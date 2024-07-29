<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\Product;
use Illuminate\Http\Request;
use App\Models\admin\Brand;
use App\Models\admin\Categori;
use App\Models\admin\Subcategori;
use App\Models\admin\Store;
class ListProductController extends Controller
{
    public function getlist(){
        $Category = new Product();
        $r = $Category->getlist();
        return response()->json($r);
    }
    public function viewList() {
        $perPage = 9;
        $productlist  = Product::orderBy('product_id', 'desc')->paginate($perPage);
        return view('admin.listproduct', compact('productlist'));
    }
    public function delete($id)
    {
        $product = Product::find($id);

        if ($product) {
            $product->delete();
            return redirect('/admin/products')->with('success', 'Product deleted successfully');
        } else {
            return redirect('/admin/products')->with('fail', 'Product not found');
        }
    }
    public function edit($id){
        $product = Product::with('images', 'details')->find($id);
        $categories = Categori::all();
        $subcategories = Subcategori::all();
        $brands = Brand::all();
        $stores = Store::all();
        return view('admin.editproduct', compact('product','categories','subcategories','brands','stores'));

    }
    public function edit1($id){

        // $product = Product::where('products.product_id', $id)
        // ->join('product_images', 'products.product_id', '=', 'product_images.product_id')
        // ->join('product_details', 'products.product_id', '=', 'product_details.product_id')
        // ->select('products.*', 'product_images.*','product_details.*')
        // ->first();
        $product = Product::with('details')->find($id);

        // Giả sử thuộc tính màu sắc được lưu dưới dạng mảng
        $selectedColors = $product->details
            ->where('attribute_name', 'color')
            ->pluck('attribute_value')
            ->toArray();

        $categories = Categori::all();
        $subcategories = Subcategori::all();
        $brands = Brand::all();
        $stores = Store::all();
        return response()->json([
            'product'=> $product,
            'selectedColors' => $selectedColors,
            'category'=> $categories,
        ]);
    }
    public function update(Request $request, $id){

    }
    
}
