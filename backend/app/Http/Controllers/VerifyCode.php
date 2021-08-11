<?php

namespace App\Http\Controllers;

use App\Models\verification_code;
use Illuminate\Http\Request;

class VerifyCode extends Controller
{
    public function verifyCode(Request $request){
        $code= $request->code;
        $checkCode = verification_code::find($code);
        if($checkCode){
         return 'good';
        }else{
            return 'bad';
        }
    }
}
