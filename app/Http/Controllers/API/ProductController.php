<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        // dd($request->all());die;

        $arrData = $request->all();
        if ($arrData) {
           foreach ($arrData as $key => $value) {
                Product::create($value);
           }
        }
        return response()->json(['susscess' => true]);
    }
}
