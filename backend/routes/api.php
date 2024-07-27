<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\admin\CategoriController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\admin\BrandController;
use App\Http\Controllers\admin\ListProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FrontendController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
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


//     Route::post('login', [AuthController::class,'login']);


// Route::group(['middleware'=>'api'],function(){
//         Route::post('logout',[AuthController::class,'logout']);
//         Route::post('refresh', [AuthController::class,'refresh']);
//         Route::post('me', [AuthController::class,'me']);
// });

//auth//
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/user/{id}', [AuthController::class, 'getUserById']);

Route::get('/category', [CategoryController::class, 'getCategory']);
Route::get('/category/{category_name}', [CategoryController::class, 'getSubcategories']);

