<?php

use App\Http\Controllers\admin\AppointmentController;
use App\Http\Controllers\admin\AppointmentStatusController;
use App\Http\Controllers\admin\ClientController;
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
Route::delete('/api/users', [UserController::class, 'bulkDelete']);

Route::get('/api/clients', [ClientController::class, 'index']);

Route::get('/api/appointment-status', [AppointmentStatusController::class, 'getStatusWithCount']);
Route::get('/api/appointments', [AppointmentController::class, 'index']);
Route::post('/api/appointments/create', [AppointmentController::class, 'store']);
Route::get('/api/appointments/{appointment}/edit', [AppointmentController::class, 'edit']);
Route::put('/api/appointments/{appointment}/edit', [AppointmentController::class, 'update']);
Route::delete('/api/appointments/{appointment}', [AppointmentController::class, 'destroy']);

Route::get('{view}', ApplicationController::class)->where('view', '(.*)');
