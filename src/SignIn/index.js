import React,{useState} from "react";
import "./style.css"
const SignIn =() =>{
    const [Email, setEmail] =useState('');
    const [Password, setPassword] =useState('');
    console.log({Email});
    console.log({Password});

    return(
        <div>
            <form className="loginPage">
                <h1>Login</h1>
                <input placeholder="Enter Email" type="email" 
                onChange={(a)=>{setEmail(a.target.value)}}></input>
                <br>
                </br>
                <br>
                </br>
                <input placeholder="Enter Password" type="password"
                onChange={(a)=>{setPassword(a.target.value)}}></input>
                <br>
                </br>
                <br>
                </br>
            </form>
        </div>
    )
}
export default SignIn;