<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'product_id',
        'normal_price',
        'discount_price',
        'quantity',
        'is_checked',
    ];


    public function product_relation(): HasOne
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }

    public function user_relation(): HasOne
    {
        return $this->hasOne(User::class, 'username', 'user_id');
    }
}
