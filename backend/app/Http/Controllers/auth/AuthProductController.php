<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\auth\Product;
use Illuminate\Http\Request;

class AuthProductController extends Controller
{
    public function getProduct(){
        $product = new Product();
        $p = $product->getProduct();
        return response()->json($p);
    }
}
