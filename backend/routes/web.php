<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/admin', function () {
    return view('admin.app');
});
Route::get('/home', function () {
    return view('home');
});
Route::get('/auth', function () {
    return view('auth.register');
});

Route::get('/admin/dashboard', function () {
    return view('admin.dashboard');
});


// Định nghĩa route với tên 'dashboard'

