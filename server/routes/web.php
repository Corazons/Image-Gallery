<?php

use App\Http\Controllers\ApiController;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redis;

//cek laravel bekerja
Route::get('/', function () {
    return view('welcome');
});

//cek redis sudah terkoneksi
Route::get('/redis-test', function () {
    Redis::set('check', 'Redis Connect');
    return Redis::get('check');
});

//mengambil data dari redis
Route::get('/photos', [ApiController::class, 'index']);
