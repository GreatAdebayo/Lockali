<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\verification_code;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request){
        $this->validate($request, [
            'username' => ['required', 'string', 'max:255', 'unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'required_with:repeatPassword', 'same:repeatPassword'],
            'repeatPassword' => ['required', 'string', 'min:8'],
        ]);


    //     verification_code::create([
    //     'code' => $code
    //    ]);

       return User::create([
            'username'=>$request->username,
            'email'=>$request->email,
            'password'=>Hash::make($request->password) 
        ]);

  


     
    }
}
