<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\verification_code;
use Illuminate\Http\Request;

class Email_verification extends Controller
{

    public function emailVerification(Request $request){
     $code = rand();
     $id = $request->id;
     $findUserId = User::find($id);
     if($findUserId){
        $verify = verification_code::create([
            'user_id'=>$request->id,
            'code'=> $code,
        ]);
        if($verify){
         return 'sent';
        }
     }
   
   
    }
}
