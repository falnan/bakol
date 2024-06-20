<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

Route::get('/login', [AuthController::class, 'login']);
Route::post('/login', [AuthController::class, 'auth']);
Route::get('/daftar', [AuthController::class, 'register']);
Route::post('/daftar', [AuthController::class, 'registerPost']);
Route::get('/logout', [AuthController::class, 'logout']);

Route::get('/', [MainController::class, 'home']);
Route::get('/kategori', [MainController::class, 'category']);
Route::get('/produk', [MainController::class, 'product']);
Route::get('/produk/{slug}', [MainController::class, 'show']);
Route::get('/keranjang', [MainController::class, 'cart']);
Route::get('/checkout', [MainController::class, 'checkout']);
Route::get('/pesanan', [MainController::class, 'order']);

Route::get('/user-client', [TestController::class, 'user_client_relation']);
