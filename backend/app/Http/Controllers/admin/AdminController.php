<?php

namespace App\Http\Controllers\admin;

use Carbon\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\Models\auth\User;


class AdminController extends Controller
{
    public function adminlogin()
    {
        return view('admin.login');
    }
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        $credentials = $request->only('email', 'password');

        if (!Auth::guard('web')->attempt($credentials)) {
            return response()->json(['status' => false, 'message' => 'Email & password does not match'], 401);
        }

        $user = Auth::guard('web')->user();
        if ($user->role === 'admin') {
            $token = $user->createToken('Admin API Token')->plainTextToken;
            return redirect()->route('admin.dashboard')->with('token', $token);
        }
        Auth::guard('web')->logout();
        return response()->json(['status' => false, 'message' => 'Unauthorized'], 403);
    }
    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        if ($request->user() && $request->user()->tokens()) {
            $request->user()->tokens()->delete();
        }

        return redirect()->route('login')->with('message', 'Successfully logged out');
    }
    public function dashboard()
    {
        $totalProductCount = DB::table('products')->count();
        $totalCustomerCount = DB::table('users')->count();
        $totalSoldProduct = DB::table('orders_items')->distinct('product_id')->count('product_id');
        $totalOrderPending = DB::table('orders')
            ->where('status', 'pending')->count();
        $totalOrderCompleted = DB::table('orders')
            ->where('status', 'completed')->count();
        $totalOrderProcessing = DB::table('orders')
            ->where('status', 'processing')->count();
        $totalRevenueByMonth = DB::table('orders')
            ->whereMonth('created_at', date('m'))
            ->whereYear('created_at', date('Y'))
            ->sum('total_price');
        $totalRevenueByYear = DB::table('orders')
            ->whereYear('created_at', date('Y'))
            ->sum('total_price');
        $endDate = Carbon::now()->endOfDay();
        $startDate = Carbon::now()->subDays(10)->startOfDay();

        $recentReviews = DB::table('reviews')
            ->join('users', 'reviews.user_id', '=', 'users.id')
            ->select('reviews.*', 'users.name as user_name')
            ->whereBetween('reviews.created_at', [$startDate, $endDate])
            ->orderBy('reviews.created_at', 'desc')
            ->paginate(5);
        $recentOrder = DB::table('orders')
            ->join('users', 'orders.user_id', '=', 'users.id')
            ->select('orders.*', 'users.name as user_name')
            ->whereBetween('orders.created_at', [$startDate, $endDate])
            ->orderBy('orders.created_at', 'desc')
            ->paginate(5);
        $revenueData = DB::table('orders')
            ->select(DB::raw('SUM(total_price) as revenue'), DB::raw('MONTH(created_at) as month'))
            ->whereYear('created_at', Carbon::now()->year)
            ->groupBy(DB::raw('MONTH(created_at)'))
            ->pluck('revenue', 'month')
            ->toArray();

        $monthlyRevenue = array_fill(1, 12, 0);

        foreach ($revenueData as $month => $revenue) {
            $monthlyRevenue[$month] = $revenue;
        }
        $monthlyRevenue = array_values($monthlyRevenue);



        return view('admin.dashboard', [
            'totalProducts' => $totalProductCount,
            'totalCustomers' => $totalCustomerCount,
            'totalSoldProduct' => $totalSoldProduct,
            'totalOrderPending' => $totalOrderPending,
            'totalOrderCompleted' => $totalOrderCompleted,
            'totalOrderProcessing' => $totalOrderProcessing,
            'totalRevenueMonth' => $totalRevenueByMonth,
            'totalRevenueYear' => $totalRevenueByYear,
            'recentReviews' => $recentReviews,
            'recentOrder' => $recentOrder,
            'monthlyRevenue' => $monthlyRevenue
        ]);
    }
}
