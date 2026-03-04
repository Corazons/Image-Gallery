<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class ApiController extends Controller
{
    public function index(Request $request)
    {
        $page = max((int)$request->query('page', 1), 1);

        $perPage = 20;

        $data = Cache::remember('photos', 3600, function () {
            $allPhotos = [];

            for ($i = 1; $i <= 20; $i++) {
                $response = Http::get("https://api.unsplash.com/photos", [
                    'page' => $i,
                    'per_page' => 20,
                    'client_id' => config('services.unsplash.key')
                ])->json();

                $allPhotos = array_merge($allPhotos, $response);
            }

            return $allPhotos;
        });

        if (!is_array($data)) {
            return response()->json(['error' => 'Invalid data'], 500);
        }

        $offset = ($page - 1) * $perPage;

        $paginatedData = array_slice($data, $offset, $perPage);

        return response()->json([
            'current_page' => $page,
            'per_page' => $perPage,
            'total' => count($data),
            'total_pages' => ceil(count($data) / $perPage),
            'data' => $paginatedData
        ]);
    }
}
