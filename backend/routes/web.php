<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CategoriController;

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
Route::get('/', function () {

    return view('admin.categories');

});

Route::get('/home', function () {
    return view('home');
});
Route::get('/auth', function () {
    return view('auth.register');
});
Route::group(['prefix' => 'admin'], function () {
    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    });

    Route::get('/categories', [CategoriController::class, 'viewList']);

    Route::get('/', function () {
        return view('admin.dashboard');
    });
});

// Định nghĩa route với tên 'dashboard'

