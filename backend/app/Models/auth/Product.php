<?php

namespace App\Models\auth;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB; 
class Product extends Model
{
    use HasFactory;
    public function getSubcategories($category_name)
    {
    $sql = "SELECT subcategories.*
            FROM `categories`
            JOIN `subcategories` ON subcategories.category_id = categories.category_id
            WHERE categories.name = $category_name;";
    $subCategory = DB::select($sql);
    return $subCategory;
   }
   public function getProduct(){
        $sql = "SELECT products.*, categories.name FROM products LEFT JOIN categories ON categories.category_id = products.product_id";
        $p = DB::select($sql);
        return $p;
   }
}
