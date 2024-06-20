<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('title')->unique();
            $table->string('slug');
            $table->string('category');
            $table->text('description');
            $table->string('image');
            $table->integer('normal_price');
            $table->integer('discount_price');
            $table->string('unit');
            $table->integer('quantity');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
