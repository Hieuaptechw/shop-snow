<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CategoriController;
use App\Http\Controllers\auth\CategoriauthController;
use App\Http\Controllers\auth\BrandAuthController;
use App\Http\Controllers\admin\BrandController;
use App\Http\Controllers\admin\ListProductController;
use App\Http\Controllers\Api\ApiController;
use App\Http\Controllers\auth\AuthProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::group(['prefix' => ''], function () {
    //CATEGORIS
    Route::get('/admin/categories', [CategoriController::class, 'getlist']);
    Route::post('/admin/categories/add', [CategoriController::class, 'insert']);
//BRAND
Route::get('/admin/brand', [BrandController::class, 'getlist']);
Route::post('/admin/brand/add', [BrandController::class, 'insert']);
//Product
Route::get('/admin/products', [ListProductController::class, 'getlist']);
Route::post('/admin/prducts/add', [ListProductController::class, 'insert']);
});
Route::post("register",[ApiController::class,'register']);
//
Route::post("login",[ApiController::class,'login']);
Route::group([
    "middleware"=>["auth:sanctum"]

],function(){

//profile
    Route::get("profile",[ApiController::class,'profile']);
    Route::get("logout",[ApiController::class,'logout']);
});

Route::get('/category', [CategoriauthController::class, 'getCategory']);
Route::get('/category/{category_name}', [CategoriauthController::class, 'getSubcategories']);


Route::get('/brand/{brand}', [BrandAuthController::class, 'getBrand']);
Route::get('/product', [AuthProductController::class, 'getProduct']);