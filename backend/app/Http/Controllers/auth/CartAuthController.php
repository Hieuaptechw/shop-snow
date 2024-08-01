<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\auth\Cart;
use App\Models\auth\CartItem;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\auth\Product;

class CartAuthController extends Controller
{
    public function addToCart(Request $request)
    {
        $validatedData = $request->validate([
            'product_id' => 'required|exists:products,product_id',
            'quantity' => 'required|integer|min:1',
        ]);

        $userId = Auth::id();
        $productId = $request->input('product_id');
        $quantity = $request->input('quantity');
        $cart = Cart::firstOrCreate([
            'user_id' => $userId,
        ]);
        if (!$cart->cart_id) {
            return response()->json([
                'status' => false,
                'message' => 'Failed to create or find cart',
            ], 500);
        }
        $product = Product::where('product_id', $productId)->firstOrFail();


        $cartItem = CartItem::where('cart_id', $cart->cart_id)
            ->where('product_id', $productId)
            ->first();

        if ($cartItem) {
            $cartItem->quantity += $quantity;
            $cartItem->save();
        } else {
            CartItem::create([
                'cart_id' => $cart->cart_id,
                'product_id' => $productId,
                'quantity' => $quantity,
                'price' => $product->price_sale,
            ]);
        }


        $totalPrice = CartItem::where('cart_id', $cart->cart_id)
            ->sum(DB::raw('quantity * price'));


        $cart->total_price = $totalPrice;
        $cart->save();

        return response()->json([
            'status' => true,
            'message' => 'Product added to cart successfully',
            'cart' => $cart,
        ], 200);
    }


    public function productcard()
    {
        $userId = Auth::id();
        $sql = "SELECT carts.total_price,products.price_sale,products.name,carts_items.quantity,products.avatar_product
            FROM users 
            JOIN carts ON carts.user_id = users.id
            LEFT JOIN carts_items ON carts_items.cart_id = carts.cart_id
            LEFT JOIN products ON products.product_id = carts_items.product_id
            WHERE users.id = ?";
         $pc = DB::select($sql, [$userId]);
        $cart = Cart::where('user_id', $userId)->first();
        return response()->json([
            'products' => $pc,
            'cart' => $cart
        ]);
    }
}
