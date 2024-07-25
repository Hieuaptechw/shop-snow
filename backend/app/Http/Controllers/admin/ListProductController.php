<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\Product;
use Illuminate\Http\Request;

class ListProductController extends Controller
{
    public function getlist(){
        $Category = new Product();
        $r = $Category->getlist();
        return response()->json($r);
    }
    public function viewList() {
        $newProduct = new Product();
        $productlist = $newProduct->getlist();
        return view('admin.listproduct', compact('productlist'));
    }
    
}
