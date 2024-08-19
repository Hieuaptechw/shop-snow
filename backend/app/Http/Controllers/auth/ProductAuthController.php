<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use App\Models\admin\ProductDetails;
use App\Models\admin\ProductImages;
use Illuminate\Support\Facades\Auth;
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
            HAVING 
                average_rating IS NOT NULL
            ORDER BY 
                average_rating DESC
           ;

        ";

        $topsellingproducts = DB::select($sql);

        return response()->json($topsellingproducts);
    }
    //Sản phẩm theo danh mục
    public function getProductCategory(Request $request, $slug)
    {
        $subcategories = $request->input('subcategories', []);
        $brands = $request->input('brands', []);
        $minPrice = $request->input('min_price', 0);
        $maxPrice = $request->input('max_price', 10000);

        $subcategoryCondition = '';
        if (!empty($subcategories)) {
            $subcategoryCondition = ' AND products.subcategory_id IN (' . implode(',', array_map('intval', explode(',', $subcategories))) . ')';
        }

        $brandCondition = '';
        if (!empty($brands)) {
            $brandCondition = ' AND products.brand_id IN (' . implode(',', array_map('intval', explode(',', $brands))) . ')';
        }
        $priceCondition = '';
        if ($minPrice !== null && $maxPrice !== null) {
            $priceCondition = ' AND products.price BETWEEN ' . intval($minPrice) . ' AND ' . intval($maxPrice);
        }
        $sql = "SELECT 
            products.product_id,
            products.name,
            products.price, 
            products.price_sale,  
            products.avatar_product,
            categories.name AS category_name, 
            subcategories.name AS subcategory_name,
            categories.slug,
            AVG(reviews.rating) AS average_rating 
        FROM 
            products 
        JOIN 
            categories ON categories.category_id = products.category_id
        LEFT JOIN 
            subcategories ON subcategories.subcategory_id = products.subcategory_id
        LEFT JOIN 
            reviews ON reviews.product_id = products.product_id
        WHERE 
            categories.slug = ?
            $subcategoryCondition
            $brandCondition
              $priceCondition
        GROUP BY 
            products.product_id,
            products.name,
            products.price,
            products.price_sale,
            products.avatar_product,
            categories.slug,
            subcategories.name,
            categories.name
        ";

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
    public function getProductCategoryDetail($slug)
    {
        $sql = "SELECT 
            products.product_id,
            products.name,
            products.price, 
            products.price_sale,  
            products.avatar_product,
            categories.name AS category_name, 
            subcategories.name AS subcategory_name,
            categories.slug,
            AVG(reviews.rating) AS average_rating 
        FROM 
            products 
        JOIN 
            categories ON categories.category_id = products.category_id
        LEFT JOIN 
            subcategories ON subcategories.subcategory_id = products.subcategory_id
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
            subcategories.name,
            categories.name
        LIMIT 8;
        ";

        $products = DB::select($sql, [$slug]);

        return response()->json($products);
    }
    public function reviewStatusorder(Request $request)
    {
        if (!Auth::check()) {
            return response()->json([
                'status' => false,
                'message' => 'User not authenticated',
            ], 401);
        }
        $validatedData = $request->validate([
            'product_id' => 'required',
            'rating' => 'required',
            'comment' => 'required|string',
        ]);
        $productId = $request->input('product_id');
        $userId = Auth::id();
        $rate = $request->input('rating');
        $comment = $request->input('comment');

        $orderSql = "SELECT * 
                     FROM orders 
                     JOIN orders_items ON orders_items.order_id = orders.order_id
                     WHERE orders_items.product_id = ? AND orders.user_id = ? AND orders.status = 'completed'";
        $orders = DB::select($orderSql, [$productId, $userId]);

        $reviewSql = "SELECT * FROM reviews WHERE product_id = ? AND user_id = ?";
        $reviews = DB::select($reviewSql, [$productId, $userId]);

        if (count($orders) > 0 && count($reviews) === 0) {
            DB::table('reviews')->insert([
                'product_id' => $productId,
                'user_id' => $userId,
                'rating' => $rate,
                'comment' => $comment,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
            return response()->json([
                'status' => true,
                'message' => 'Review submitted successfully',
                'info' => [
                    'user' => $userId,
                    'product' => $productId,
                    'rate' => $rate,
                    'comment' => $comment,
                ]
            ], 200);
        } else if (count($orders) > 0 && count($reviews)) {
            return response()->json([
                'status' => false,
                'message' => 'You have reached the maximum number of reviews for this product.',
                'info' => [
                    'user' => $userId,
                    'product' => $productId,
                    'rate' => $rate,
                    'comment' => $comment,
                ]
            ], 403);
        }else{
            return response()->json([
                'status' => false,
                'message' => 'Please place an order for the product before submitting a review.',
                'info' => [
                    'user' => $userId,
                    'product' => $productId,
                    'rate' => $rate,
                    'comment' => $comment,
                ]
            ], 403);
        }
    }
    public function getProductReviews($productId)
    {
    
        $productExists = DB::table('products')->where('product_id', $productId)->exists();
    
        if (!$productExists) {
            return response()->json([
                'status' => false,
                'message' => 'Product not found',
            ], 404);
        }
    
    
        $reviews = DB::table('reviews')
            ->where('product_id', $productId)
            ->join('users', 'reviews.user_id', '=', 'users.id')
            ->select('reviews.rating', 'reviews.comment', 'users.name as user_name', 'reviews.created_at')
            ->orderBy('reviews.created_at', 'desc')
            ->get();
    
        return response()->json([
            'status' => true,
            'reviews' => $reviews,
        ], 200);
    }
    public function getReviewStats($productId)
    {
   
        $productExists = DB::table('products')->where('product_id', $productId)->exists();

        if (!$productExists) {
            return response()->json([
                'status' => false,
                'message' => 'Product not found',
            ], 404);
        }

        $reviewCounts = DB::select("
            SELECT 
                rating,
                COUNT(*) AS count
            FROM 
                reviews
            WHERE 
                product_id = ?
            GROUP BY 
                rating
            ORDER BY 
                rating DESC
        ", [$productId]);

        $averageRating = DB::select("
            SELECT 
                AVG(rating) AS average_rating
            FROM 
                reviews
            WHERE 
                product_id = ?
        ", [$productId]);

   
        $reviewCounts = collect($reviewCounts)->mapWithKeys(function ($item) {
            return [$item->rating => $item->count];
        })->toArray();

        for ($i = 5; $i >= 1; $i--) {
            if (!isset($reviewCounts[$i])) {
                $reviewCounts[$i] = 0;
            }
        }

        return response()->json([
            'status' => true,
            'review_stats' => $reviewCounts,
            'average_rating' => $averageRating[0]->average_rating ?? 0,
        ], 200);
    }
}
