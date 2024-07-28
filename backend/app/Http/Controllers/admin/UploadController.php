<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $fileName = time() . '-' . $_FILES['file']['name'];
        $request->file('file')->storeAs('public/images/product', $fileName);
        $url =  asset('storage/images/product/' . $fileName);
        return response()->json([
            'success' => true,
            'path' => $url
        ]);

    }
    public function uploads(Request $request)
    {
        try {
            $uploadedFiles = $request->file('files');
            $urls = [];

            foreach ($uploadedFiles as $file) {
                $fileName = time() . '-' . $file->getClientOriginalName();
                $file->move(public_path('storage/images/product'), $fileName);
                $urls[] = asset('storage/images/product/' . $fileName);
            }

            return response()->json([
                'success' => true,
                'urls' => $urls
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred during the upload',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
