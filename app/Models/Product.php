<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'slug',
        'category',
        'description',
        'image',
        'normal_price',
        'discount_price',
        'unit',
        'quantity',
    ];
}
