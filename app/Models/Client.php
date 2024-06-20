<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    protected $fillable = [
        'username',
        'name',
        'email',
        'birthday',
        'gender',
        'address1',
        'address2',
        'address3',
        'confirm_password',
    ];

    protected $primaryKey = 'username';
    public $incrementing = false;
    protected $keyType = 'string';
}
