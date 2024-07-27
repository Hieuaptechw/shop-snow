<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\auth\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20',
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'address' => $validatedData['address'],
            'phone' => $validatedData['phone'],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'User Registered successfully',
            'user' => $user
        ], 201);
    }

    public function login(Request $req)
    {
        $datalogin = $req->only('email', 'password');
        $user = DB::table('users')
            ->where('email', $datalogin['email'])
            ->first();

        if ($user && Hash::check($datalogin['password'], $user->password)) {
            $apiToken = Str::random(60);

            return response()->json([
                'status' => 'success',
                'api_token' => $apiToken,
                'user' => [
                    'id' => $user->user_id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'name' => $user->name,
                    'email' => $user->email,
                    'phone' => $user->phone,
                    'address' => $user->address,
                    'registered_at' => $user->created_at,
                ],

            ], 200);
        }


        return response()->json([
            'status' => 'error',
            'message' => 'Email hoặc mật khẩu không chính xác',
        ], 401);
    }
    public function getUserById($id)
    {
        $user = DB::table('users')->where('user_id', $id)->first();

        if (!$user) {
            return response()->json([
                'status' => 'error',
                'message' => 'Người dùng không được tìm thấy.'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->phone,
                'address' => $user->address,
                'registered_at' => $user->created_at,
            ],
        ], 200);
    }
    
}
