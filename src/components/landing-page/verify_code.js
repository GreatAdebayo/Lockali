import React, {useEffect} from 'react'
import { useParams } from "react-router";
import axios from 'axios';
import {Baseurl} from '../base_url.js';

const VerifyCode = () => {
    let {code} = useParams();
    useEffect(() => {
        axios.post(`${Baseurl}verifycode`, {code:code}
        ).then(res => {
          console.log(res.data)
             
        }) }, [])
    return (
        <div>
            <p>verify code</p>
        </div>
    )
}

export default VerifyCode
