<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\Subcategori;
use Illuminate\Http\Request;


class SubcategoriController extends Controller
{
    // API LIST 
    public function getlist(){
        $Subcategory = new Subcategori();
        $r = $Subcategory->getlist();
        return response()->json($r);
    }
//   VIEW LIST
    public function viewList(){
        $perPage = 5;
        $subcategory = Subcategori::orderBy('subcategory_id', 'desc')->paginate($perPage);
        return view('admin.subcategories', compact('subcategory'));
    
    }
    // INSERT 
    public function insert(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
        ]);
    
     
        $exists = Subcategori::where('name', $request->name)->exists();
    
        if ($exists) {
            return redirect('/admin/subcategories')->with('fail', 'The category name has already been taken !');
        }
  
        $Subcategory = new Subcategori();
        $Subcategory->name = $request->name;
        $Subcategory->slug = $request->slug;
        $Subcategory->save();
 
        return redirect('/admin/subcategories')->with('success', 'Category added successfully !');
    }
    public function delete($id)
    {
        $Subcategory = Subcategori::find($id);

        if ($Subcategory) {
            $Subcategory->delete();
            return redirect('/admin/subcategories')->with('success', 'Category deleted successfully');
        } else {
            return redirect('/admin/subcategories')->with('fail', 'Category not found');
        }
    }
    public function edit($id)
    {
        $Subcategory = Subcategori::find($id);

        if ($Subcategory) {
            $Subcategory = Subcategori::orderBy('category_id', 'desc')->paginate(5);
            return view('admin.subcategories', compact('subcategories', 'category'));
        } else {
            return redirect()->route('categories.index')->with('fail', 'Category not found');
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:category,name,' . $id . ',category_id',
        ]);

        $Subcategory = Subcategori::find($id);

        if ($Subcategory) {
            $Subcategory->name = $request->name;
            $Subcategory->slug = $request->slug;
            $Subcategory->save();
            return redirect('/admin/subcategories')->with('success', 'Subcategory updated successfully');
        } else {
            return redirect('/admin/subcategories')->with('fail', 'Subcategory not found');
        }
    }

}
