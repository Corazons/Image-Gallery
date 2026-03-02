<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiController extends Controller
{
    private $unsplashAPI;

    public function index()
    {
        $unsplashAPI = "https://api.unsplash.com/photos?per_page=20&client_id=" . config('services.unsplash.key');

        $response = Http::get($unsplashAPI);

        return $response->json();
    }
}
