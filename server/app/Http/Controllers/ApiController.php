<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class ApiController extends Controller
{
    public function index()
    {
        $data = Cache::remember('photos', 600, function () {
            return Http::get("https://api.unsplash.com/photos?per_page=20&client_id=" . config('services.unsplash.key'))->json();
        });

        return response()->json($data);
    }
}
