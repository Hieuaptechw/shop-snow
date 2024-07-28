<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    protected $table = "products";
    protected $fillable = ['name'];
    protected $primaryKey = 'product_id';

    public function getlist()
    {
        $sql = "SELECT *
                FROM products
               ";
        $r = DB::select($sql);
        return $r;
    }

    public function insert($arrData)
    {
       DB::table($this->table)->insert($arrData);
    }
}
