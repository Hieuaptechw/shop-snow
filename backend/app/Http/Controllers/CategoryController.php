<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\auth\Category;

class CategoryController extends Controller

{
    public function getCategory(){
        $Category = new Category();
        $r = $Category->getCategory();
        return response()->json($r);
    }

    public function getSubcategories($category_name)
    {
        $category = DB::table('categories')
                      ->where('name', $category_name)
                      ->first();

        if (!$category) {
            return response()->json(['message' => 'Category not found'], 404);
        }

        $subcategories = DB::table('subcategories')
                            ->where('category_id', $category->category_id)
                            ->get();

        $subcategoriesArray = $subcategories->map(function($subcategory) {
            return [
                'id' => $subcategory->subcategory_id,
                'name' => $subcategory->name,

            ];
        });

        return response()->json(
             $subcategoriesArray
        );
    }
}
