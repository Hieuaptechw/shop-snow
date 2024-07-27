<?php

namespace App\Http\Controllers;

use App\Models\admin\Categori;
use App\Models\auth\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FrontendController extends Controller
{
    public function getSubcategories($category_name)
    {
        $category = Product::where('name', $category_name)->first();
        if ($category) {
            $subcategories = $category->subcategories;
            return response()->json($subcategories);
        } else {
            return response()->json(['error' => 'Category not found'], 404);
        }
    }
}
