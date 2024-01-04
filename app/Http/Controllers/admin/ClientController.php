<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Client;

class ClientController extends Controller
{
    public function index()
    {
        return Client::latest()->get();
    }
}
