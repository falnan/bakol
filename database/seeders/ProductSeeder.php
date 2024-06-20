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
            'title' => 'Pisang Barangan',
            'slug' => 'pisang-barangan',
            'category' => 'buah',
            'description' => fake()->paragraph(20),
            'image' => '/img/buah/pisang-barangan.JPG',
            'normal_price' => 19000,
            'discount_price' => 18000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Buah Naga',
            'slug' => 'buah-naga',
            'category' => 'buah',
            'description' => fake()->paragraph(20),
            'image' => '/img/buah/buah-naga.JPG',
            'normal_price' => 32000,
            'discount_price' => 30000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Pepaya',
            'slug' => 'pepaya',
            'category' => 'buah',
            'description' => fake()->paragraph(20),
            'image' => '/img/buah/pepaya.JPG',
            'normal_price' => 13000,
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
            'normal_price' => 13000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Apel Merah Biasa',
            'slug' => 'apel-merah-biasa',
            'category' => 'buah',
            'description' => fake()->paragraph(20),
            'image' => '/img/buah/apel-merah.JPG',
            'normal_price' => 46000,
            'discount_price' => 45000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Alpukat',
            'slug' => 'alpukat',
            'category' => 'buah',
            'description' => fake()->paragraph(20),
            'image' => '/img/buah/alpukat.JPG',
            'normal_price' => 28000,
            'discount_price' => 25000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Kelengkeng (Mata Kucing)',
            'slug' => 'kelengkeng-mata-kucing',
            'category' => 'buah',
            'description' => fake()->paragraph(20),
            'image' => '/img/buah/kelengkeng.JPG',
            'normal_price' => 62000,
            'discount_price' => 60000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Salak',
            'slug' => 'salak',
            'category' => 'buah',
            'description' => fake()->paragraph(20),
            'image' => '/img/buah/salak.JPG',
            'normal_price' => 26000,
            'discount_price' => 25000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Pisang Kepok',
            'slug' => 'pisang-kepok',
            'category' => 'buah',
            'description' => fake()->paragraph(20),
            'image' => '/img/buah/pisang-kepok.JPG',
            'normal_price' => 16000,
            'discount_price' => 15000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Jeruk Kasturi',
            'slug' => 'jeruk-kasturi',
            'category' => 'buah',
            'description' => fake()->paragraph(20),
            'image' => '/img/buah/jeruk-kasturi.JPG',
            'normal_price' => 16000,
            'discount_price' => 15000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        // sayur

        Product::insert([
            'title' => 'Sawi Putih',
            'slug' => 'sawi-putih',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/sawi-putih.JPG',
            'normal_price' => 9000,
            'discount_price' => 8000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Pakcoy',
            'slug' => 'pakcoy',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/pakcoy.JPG',
            'normal_price' => 13000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Bayam Hijau',
            'slug' => 'bayam-hijau',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/bayam-hijau.JPG',
            'normal_price' => 3000,
            'discount_price' => 3000,
            'unit' => 'Ikat',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Kangkung',
            'slug' => 'kangkung',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/kangkung.JPG',
            'normal_price' => 3000,
            'discount_price' => 2500,
            'unit' => 'Ikat',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Daun Singkong',
            'slug' => 'daun-singkong',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/daun-singkong.JPG',
            'normal_price' => 2500,
            'discount_price' => 2000,
            'unit' => 'Ikat',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Daun Bawang',
            'slug' => 'daun-bawang',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/daun-bawang.JPG',
            'normal_price' => 21000,
            'discount_price' => 20000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Seledri (Daun Sop)',
            'slug' => 'seledri-daun-sop',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/seledri.JPG',
            'normal_price' => 16000,
            'discount_price' => 15000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Bayam Merah',
            'slug' => 'bayam-merah',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/bayam-merah.JPG',
            'normal_price' => 4500,
            'discount_price' => 4000,
            'unit' => 'Ikat',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Bayam Kampung',
            'slug' => 'bayam-kampung',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/bayam-kampung.JPG',
            'normal_price' => 4500,
            'discount_price' => 4000,
            'unit' => 'Ikat',
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
            'title' => 'Pakis',
            'slug' => 'pakis-sayur-paku',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/pakis.JPG',
            'normal_price' => 5500,
            'discount_price' => 5000,
            'unit' => 'Ikat',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Kol-Putih',
            'slug' => 'kol-putih',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/kol-putih.JPG',
            'normal_price' => 13000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Tomat Merah',
            'slug' => 'tomat-merah',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/tomat-merah.JPG',
            'normal_price' => 21000,
            'discount_price' => 20000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Pare',
            'slug' => 'pare',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/pare.JPG',
            'normal_price' => 13000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Labu Siam',
            'slug' => 'labu-siam',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/labu-siam.JPG',
            'normal_price' => 16000,
            'discount_price' => 15000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Tomat Hijau',
            'slug' => 'tomat-hijau',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/tomat-hijau.JPG',
            'normal_price' => 21000,
            'discount_price' => 20000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Terong Lalap Hijau',
            'slug' => 'terong-lalap-hijau',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/terong-lalap-hijau.JPG',
            'normal_price' => 9000,
            'discount_price' => 8000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Terong Hijau',
            'slug' => 'terong-hijau',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/terong-hijau.JPG',
            'normal_price' => 11000,
            'discount_price' => 10000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Talas',
            'slug' => 'talas',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/talas.JPG',
            'normal_price' => 13000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Wortel',
            'slug' => 'wortel',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/wortel.JPG',
            'normal_price' => 22000,
            'discount_price' => 20000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Kentang',
            'slug' => 'kentang',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/kentang.JPG',
            'normal_price' => 19000,
            'discount_price' => 18000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);


        Product::insert([
            'title' => 'Singkong',
            'slug' => 'singkong',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/singkong.JPG',
            'normal_price' => 5000,
            'discount_price' => 4000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Keledek',
            'slug' => 'keledek',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/keledek.JPG',
            'normal_price' => 9000,
            'discount_price' => 8000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Kentang Rendang',
            'slug' => 'kentang-rendang',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/kentang-rendang.JPG',
            'normal_price' => 22000,
            'discount_price' => 20000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Buncis',
            'slug' => 'buncis',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/buncis.JPG',
            'normal_price' => 22000,
            'discount_price' => 20000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Kacang Panjang',
            'slug' => 'kacang-panjang',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/kacang-panjang.JPG',
            'normal_price' => 13000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Toge',
            'slug' => 'toge',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/toge.JPG',
            'normal_price' => 11000,
            'discount_price' => 10000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Jagung Muda',
            'slug' => 'jagung-muda',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/jagung-muda.JPG',
            'normal_price' => 12000,
            'discount_price' => 12000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'petai',
            'slug' => 'petai',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/petai.JPG',
            'normal_price' => 84000,
            'discount_price' => 80000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Kacang Tanah',
            'slug' => 'kacang-tanah',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/kacang-tanah.JPG',
            'normal_price' => 22000,
            'discount_price' => 20000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Kacang Hijau',
            'slug' => 'kacang-hijau',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/kacang-hijau.JPG',
            'normal_price' => 29000,
            'discount_price' => 28000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);

        Product::insert([
            'title' => 'Capokak',
            'slug' => 'capokak',
            'category' => 'sayur',
            'description' => fake()->paragraph(20),
            'image' => '/img/sayur/capokak.JPG',
            'normal_price' => 7000,
            'discount_price' => 6000,
            'unit' => 'kg',
            "quantity" => 10,
        ]);
    }
}
