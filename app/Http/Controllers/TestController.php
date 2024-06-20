<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function user_client_relation()
    {
        $user =  User::with('client_relation')->get();
        return response()->json($user);
    }
}
