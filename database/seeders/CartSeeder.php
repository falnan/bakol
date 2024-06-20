<?php

namespace Database\Seeders;

use App\Models\Cart;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class CartSeeder extends Seeder
{
    public function run(): void
    {
        Cart::insert([
            'user_id' => 'hanif',
            "product_id" => 1,
            "normal_price" => 40000,
            "discount_price" => 20000,
            "quantity" => 2,
            "is_checked" => true,
            "created_at" => Carbon::now(),
        ]);

        Cart::insert([
            'user_id' => 'hanif',
            "product_id" => 6,
            "normal_price" => 40000,
            "discount_price" => 25000,
            "quantity" => 3,
            "is_checked" => true,
            "created_at" => Carbon::now(),
        ]);

        Cart::insert([
            'user_id' => 'hanif',
            "product_id" => 6,
            "normal_price" => 40000,
            "discount_price" => 35000,
            "quantity" => 3,
            "is_checked" => false,
            "created_at" => Carbon::now(),
        ]);
    }
}
