<?php

use App\Http\Controllers\ApiController;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redis;

$employee = [
    "E001" => ["name" => "Alice Smith", "role" => "Developer"],
    "E002" => ["name" => "Bob Jones", "role" => "Designer"],
    "E003" => ["name" => "Charlie Brown", "role" => "Manager"]
];

Route::get('/', function () {
    return view('welcome');
});

Route::get('/user/{id?}', function (?string $id = null) use ($employee) {
    if (!$id) {
        return response()->json($employee);
    }

    if (!isset($employee[$id])) {
        return response()->json([
            "message" => "Employee tidak ditemukan"
        ], 404);
    }

    return response()->json($employee[$id]);
});

Route::get('/redis-test', function () {
    Redis::set('check', 'Redis Connect');
    return Redis::get('check');
});

Route::get('photos', [ApiController::class, 'index']);
