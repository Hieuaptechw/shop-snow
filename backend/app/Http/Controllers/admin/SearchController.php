<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\Product;
use App\Models\admin\Categori;
use App\Models\admin\Subcategori;
use App\Models\admin\Brand;
use App\Models\admin\Order;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');
        $keywords = explode(' ', $query);
        $products = Product::query();
        foreach ($keywords as $keyword) {
            $products->where(function ($q) use ($keyword) {
                $q->where('product_id', 'like', '%' . $keyword . '%')
                    ->orWhere('name', 'like', '%' . $keyword . '%')
                    ->orWhere('description', 'like', '%' . $keyword . '%');
            });
        }
        $products = $products->get();

        $categories = Categori::query();
        foreach ($keywords as $keyword) {
            $categories->where(function ($q) use ($keyword) {
                $q->where('category_id', 'like', '%' . $keyword . '%')
                    ->orWhere('name', 'like', '%' . $keyword . '%');
            });
        }
        $categories = $categories->get();

        $subcategories = Subcategori::query();
        foreach ($keywords as $keyword) {
            $subcategories->where(function ($q) use ($keyword) {
                $q->where('subcategory_id', 'like', '%' . $keyword . '%')
                    ->orWhere('name', 'like', '%' . $keyword . '%');
            });
        }
        $subcategories = $subcategories->get();

        $brands = Brand::query();
        foreach ($keywords as $keyword) {
            $brands->where(function ($q) use ($keyword) {
                $q->where('brand_id', 'like', '%' . $keyword . '%')
                    ->orWhere('name', 'like', '%' . $keyword . '%');
            });
        }
        $brands = $brands->get();
        $orders = Order::where('order_code', 'like', '%' . $query . '%')
        ->where('total_price', '>', 0)
        ->with(['orderItems.product', 'user'])
        ->get();
        return view('admin.layouts.searchresult', compact('products', 'categories', 'subcategories', 'brands','orders','query'));
    }
    public function searchapi($query)
{
    $keywords = explode(' ', $query);
    $products = Product::query()
        ->where(function($q) use ($keywords) {
            foreach ($keywords as $keyword) {
                $q->where(function($q) use ($keyword) {
                    $q->where('product_id', 'like', '%' . $keyword . '%')
                      ->orWhere('name', 'like', '%' . $keyword . '%')
                      ->orWhere('description', 'like', '%' . $keyword . '%');
                });
            }
        })
        ->with('category')
        ->get();

    return response()->json([
        'status' => true,
        'products' => $products,
        'query' => $query
    ]);
}

    
}
