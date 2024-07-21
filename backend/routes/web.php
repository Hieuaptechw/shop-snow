<?php

use App\Http\Controllers\admin\BrandController;
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

    // CATEGORI
    Route::get('/categories', [CategoriController::class, 'viewList']);
    Route::post('/categories/add', [CategoriController::class, 'insert']);
    Route::delete('/categories/delete/{id}', [CategoriController::class, 'delete']);
    Route::get('/categories/edit/{id}', [CategoriController::class, 'edit']);
    Route::put('/categories/update/{id}', [CategoriController::class, 'update']);
    //BRANCH
    Route::get('/brand', [BrandController::class, 'viewList']);
    Route::post('/brand/add', [BrandController::class, 'insert']);
    Route::delete('/brand/delete/{id}', [BrandController::class, 'delete']);
    Route::get('/brand/edit/{id}', [BrandController::class, 'edit']);
    Route::put('/brand/update/{id}', [BrandController::class, 'update']);

});



