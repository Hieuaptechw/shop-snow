<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\admin\ProductDetails;
use App\Models\admin\ProductImages;
use Illuminate\Http\Request;
use App\Models\auth\Product;
use Illuminate\Support\Facades\DB;

class ProductAuthController extends Controller
{


    //get new product
    public function getNewProducts()
    {
        $sql = "SELECT 
                    products.product_id, 
                    products.name, 
                    products.price,
                    products.price_sale,
                    products.avatar_product,
                    categories.name AS category_name, 
                    categories.slug,
                    AVG(reviews.rating) AS average_rating
                    
                FROM 
                    products
                LEFT JOIN 
                    reviews ON products.product_id = reviews.product_id
                LEFT JOIN 
                    categories ON products.category_id = categories.category_id
                GROUP BY 
                    products.product_id, 
                    products.name,
                    products.price,
                    products.price_sale,
                    products.avatar_product,
                    categories.slug,
                    categories.name
                ORDER BY 
                    products.created_at DESC
                LIMIT 8";

        $products = DB::select($sql);

        return response()->json($products);
    }

    //top-selling
    public function topselling()
    {
        $sql = "SELECT 
            products.product_id, 
            products.name, 
            products.price,
            products.price_sale,
            products.avatar_product,
            categories.name AS category_name, 
            categories.slug,
            AVG(reviews.rating) AS average_rating,
            SUM(orders_items.quantity) AS total_sold
            FROM 
                products
            JOIN 
                categories ON categories.category_id = products.category_id
            LEFT JOIN 
                orders_items ON products.product_id = orders_items.product_id
            LEFT JOIN 
                reviews ON products.product_id = reviews.product_id
            GROUP BY 
                products.product_id, 
                products.name,
                products.price,
                products.price_sale,
                categories.name,
                categories.slug,
                products.avatar_product
            -- HAVING 
            --     average_rating IS NOT NULL AND total_sold IS NOT NULL
            ORDER BY 
                total_sold DESC
            LIMIT 8;

        ";

        $topsellingproducts = DB::select($sql);

        return response()->json($topsellingproducts);
    }
    //Sản phẩm theo danh mục
    public function getProductCategory($slug)
    {

        $sql = "SELECT 
          products.product_id,
        products.name,
        products.price, 
        products.price_sale,  
        products.avatar_product,
        categories.name AS category_name, 
        categories.slug,
        AVG(reviews.rating) AS average_rating 
    FROM 
        products 
    JOIN 
        categories ON categories.category_id = products.category_id
    LEFT JOIN 
        reviews ON reviews.product_id = products.product_id
    WHERE 
        categories.slug = ?
    GROUP BY 
     products.product_id,
        products.name,
        products.price,
        products.price_sale,
        products.avatar_product,
        categories.slug,
        categories.name
     LIMIT 8";
        $products = DB::select($sql, [$slug]);

        return response()->json($products);
    }
    public function getDetailProduct($id)
    {
        $sql = "SELECT 
                    products.name,
                    products.price,
                    products.price_sale,
                    products.description,
                    products.avatar_product,
                    categories.name as category_name,
                    subcategories.name as subcategory_name, 
                    AVG(reviews.rating) AS average_rating
                FROM products 
                JOIN categories ON categories.category_id = products.category_id
                JOIN subcategories ON subcategories.subcategory_id = products.subcategory_id
                LEFT JOIN reviews On reviews.product_id = products.product_id
                WHERE products.product_id = ?
                GROUP BY 
                    products.product_id, 
                    products.name,
                    products.price,
                    products.price_sale,
                    categories.name,
                    products.description,
                    subcategories.name,
                    products.avatar_product";

        $products = DB::select($sql, [$id]);
        $product_images = ProductImages::where('product_id', $id)->get();
        $product_details = ProductDetails::where('product_id', $id)->get();
        return response()->json([
            'product' => $products,
            'images' => $product_images,
            'details' => $product_details
        ]);
    }
}
