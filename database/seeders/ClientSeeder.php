<?php

namespace Database\Seeders;

use App\Models\Client;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    public function run(): void
    {
        Client::insert([
            'username' => 'hanif',
            'name' => 'Muhammad Hanif Arrouf',
            'email' => 'hanif@gmail.com',
            'birthday' => Carbon::now(),
            'gender' => 'male',
            'address1' => 'Jalan Awang Mahmuda, Sungai Alam',
            'address2' => 'Jalan Wonosari Tengah, Wonosari',
            'address3' => '',
            'confirm_password' => 123,
            'created_at' => Carbon::now(),
        ]);
    }
}
