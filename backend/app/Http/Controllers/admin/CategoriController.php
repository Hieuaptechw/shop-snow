<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\Categori;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoriController extends Controller
{
    // API LIST 
    public function getlist(){
        $Category = new Categori();
        $r = $Category->getlist();
        return response()->json($r);
    }
//   VIEW LIST
    public function viewList(){
        $perPage = 6;
        $categories = Categori::orderBy('category_id', 'desc')->paginate($perPage);
        return view('admin.categories', compact('categories'));
    
    }
    // INSERT 
    public function insert(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);
    
     
        $exists = Categori::where('name', $request->name)->exists();
    
        if ($exists) {
            return redirect('/admin/categories')->with('fail', 'The category name has already been taken !');
        }
  
        $category = new Categori();
        $category->name = $request->name;
        $category->save();
 
        return redirect('/admin/categories')->with('success', 'Category added successfully !');
    }
    public function delete($id)
    {
        $category = Categori::find($id);
        $category->delete();

        return redirect('/admin/categories')->with('success', 'Category deleted successfully');
    }

}
