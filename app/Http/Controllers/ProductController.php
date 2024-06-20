<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        if ($request->search) {
            $paramSearch = $request->search;
        } else {
            $paramSearch = "";
        }
        if ($request->category) {
            $paramCategory = $request->category;
        } else {
            $paramCategory = "";
        }


        $product = Product::where('category', 'like', '%' . $paramCategory . '%')
            ->where('title', 'like', '%' . $paramSearch . '%')
            ->paginate(14);

        return response()->json($product);
    }
}
