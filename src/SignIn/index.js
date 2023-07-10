import React,{useState} from "react";
import "./style.css"
import Navigation from "../Navigation";
import { Link } from "react-router-dom";

const SignIn =() =>{
    const [Email, setEmail] =useState('');
    const [Password, setPassword] =useState('');
    console.log({Email});
    console.log({Password});

    return(
        <div>
            <Navigation></Navigation>
            <form className="loginPage">
                <h1>Login</h1>
                <label>UserName</label>
                <br>
                </br>
                <br>
                </br>

                <input placeholder="Enter username" type="text" 
                onChange={(a)=>{setEmail(a.target.value)}}></input>
                <br>
                </br>
                <br>
                </br>
                <label>Password</label>
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
                <Link to={'/Products/'}><button type="submit" className="login-button">Login</button></Link>
            </form>
        </div>
    )
}
export default SignIn;