<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::insert([
            'username' => 'hanif',
            'email' => 'hanif@gmail.com',
            'password' => Hash::make(123),
            'created_at' => Carbon::now(),
        ]);
    }
}
