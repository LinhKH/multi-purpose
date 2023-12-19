<?php

use App\Http\Controllers\admin\UserController;
use App\Http\Controllers\ApplicationController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('csrf', function () {
    return csrf_token();
});

// Route::get('/admin/dashboard', function() {
//     return view('dashboard');
// });

Route::get('/api/users', [UserController::class, 'index']);
Route::post('/api/users', [UserController::class, 'store']);
Route::get('/api/users/search', [UserController::class, 'search']);
Route::put('/api/users/{user}', [UserController::class, 'update']);
Route::patch('/api/users/{user}/change-role', [UserController::class, 'changeRole']);
Route::delete('/api/users/{user}', [UserController::class, 'destory']);

Route::get('{view}', ApplicationController::class)->where('view', '(.*)');
