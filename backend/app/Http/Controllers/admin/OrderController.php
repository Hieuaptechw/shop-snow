<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\admin\Order;
class OrderController extends Controller
{
     public function getOrderDetails($order_id)
    {
        $order = Order::with('orderItems')->find($order_id);

        if ($order) {
            return response()->json([
                'order' => $order,
                'orderItems' => $order->orderItems
            ]);
        } else {
            return response()->json(['message' => 'Order not found'], 404);
        }
    }
    public function getUserOrders()
    {
        $orders = Order::where('total_price', '>', 0)
                        ->with(['orderItems.product', 'user'])
                        ->orderByRaw('CASE 
                        WHEN status = "pending" THEN 1
                        WHEN status = "processing" THEN 2
                        WHEN status = "completed" THEN 3
                        ELSE 4
                    END')
                    ->orderBy('created_at', 'desc')
                    ->paginate(3);
        return view('admin.order', [
            'userOrders' => $orders,
        ]);
    }
    public function updateStatus(Request $request, $id)
    {
        $request->validate([
            'status' => 'required|in:pending,processing,completed,cancelled',
        ]);

        $order = Order::findOrFail($id);
        $order->status = $request->input('status');
        $order->save();

        return redirect()->back()->with('success', 'Order status updated successfully.');
    }
    
}
