<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\User;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function test()
    {
        $user =  User::with('client_relation')->get();
        return response()->json($user);
    }
}
