<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        // buah
        Product::insert([
            'title' => 'Jagung',
            'slug' => 'jagung',
            'category' => 'yes',
            'description' => fake()->paragraph(20),
            'image' => '/img/buah/jagung.JPG',
            'normal_price' => 4500,
            'discount_price' => 4000,
            'unit' => 'buah',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Pepaya',
            'slug' => 'pepaya',
            'category' => 'buah',
            'description' => fake()->paragraph(20),
            'image' => '/img/buah/pepaya.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Semangka',
            'slug' => 'semangka',
            'category' => 'buah',
            'description' => fake()->paragraph(20),
            'image' => '/img/buah/semangka.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        // sayur
        Product::insert([
            'title' => 'Bayam Hijau',
            'slug' => 'bayam-hijau',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/bayam-hijau.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Bayam Kampung',
            'slug' => 'bayam-kampung',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/bayam-kampung.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Bayam Merah',
            'slug' => 'Bayam Merah',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/bayam-merah.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Brokoli',
            'slug' => 'Brokoli',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/brokoli.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Buncis',
            'slug' => 'Buncis',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/buncis.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Bunga Kol',
            'slug' => 'Bunga Kol',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/bunga-kol.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Capokak',
            'slug' => 'Capokak',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/capokak.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Daun Bawang',
            'slug' => 'Daun Bawang',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/daun-bawang.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Daun Genjer',
            'slug' => 'Daun Genjer',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/daung-genjer.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Daun Singkong',
            'slug' => 'Daun Singkong',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/daun-singkong.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Gambas',
            'slug' => 'Gambas',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/gambas.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Jamur Kuping Kering',
            'slug' => 'Jamur Kuping Kering',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/jamur-kuping-kerig.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Jamur Tiram',
            'slug' => 'Jamur Tiram',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/jamur-tiram.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);
    }
}
