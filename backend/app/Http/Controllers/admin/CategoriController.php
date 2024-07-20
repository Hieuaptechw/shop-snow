<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\admin\Categori;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoriController extends Controller
{
    public function list(){
        $Category = new Categori();
        $r = $Category->getlist();
        return response()->json($r);
    }
    public function viewList(){
        $Category = DB::table('category')->get();
        // dd($Category);
        return view('admin.categories', ['categories' => $Category]);
    }

}
