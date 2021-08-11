<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Email_verification;
use App\Http\Controllers\RegisterController as ControllersRegisterController;
use App\Http\Controllers\VerifyCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Auth::routes();
Route::post('/register', [ControllersRegisterController::class, 'register']);
Route::post('/email-verification', [Email_verification::class, 'emailVerification']);
Route::post('/verifycode', [VerifyCode::class, 'verifyCode']);
Route::group([

    'middleware' => 'api',
    // 'prefix' => 'auth'

], function () {

    Route::post('/login', [AuthController::class, 'login']);
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});