<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MainController extends Controller
{
    public function home()
    {
        $product = Product::where('title', 'Jagung')
            ->orwhere('title', 'Brokoli')
            ->orwhere('title', 'Bayam Merah')
            ->orwhere('title', 'Bayam Kampung')
            ->orwhere('title', 'Bayam Hijau')
            ->orwhere('title', 'Pepaya')
            ->get();

        return Inertia::render('home', compact('product'));
    }

    public function category()
    {
        return Inertia::render('category');
    }

    public function product(Request $request)
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

        return Inertia::render('product', compact('product'));
    }

    public function show(string $slug)
    {
        $productId = Product::where('slug', $slug)->first();
        return Inertia::render('productId', compact('productId'));
    }

    public function cart()
    {
        $cart = Cart::with('product_relation')->get();
        return Inertia::render('cart', compact('cart'));
    }

    public function checkout()
    {
        $cart = Cart::with('product_relation')
            ->where('is_checked', true)
            ->get();
        return Inertia::render('checkout', compact('cart'));
    }

    public function order()
    {
        $cart = Cart::with('product_relation')->get();
        return Inertia::render('order', compact('cart'));
    }
}
