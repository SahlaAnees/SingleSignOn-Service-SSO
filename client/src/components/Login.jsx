import React from "react";

import Google from "../images/google.png";
import Microsoft from "../images/microsoft.png";
import "./Login.css"

function Login() {

    const google= ()=>{
        window.open("http://localhost:5000/auth/google", "_self");
    }

    const microsoft= ()=>{
        window.open("http://localhost:5000/auth/microsoft", "_self");
    }

    return (
        <div className="login">
            <h1 className="loginTitle">Sign in</h1>

            <div className="up">
                <input type="text" placeholder="Username" /><br />
                <input type="text" placeholder="Password" /><br />
                <button className="loginbutton">Login</button><br />
            </div>


            <div className="center">
                <hr className="hrline"/>
                <div className="or">Or continue with</div>
                <hr className="hrline"/>
            </div>

            <div className="wrapper">
                <div className="down">
                    <div className="loginbybutton google" onClick={google}>
                        <img src={Google} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginbybutton microsoft" onClick={microsoft}>
                        <img src={Microsoft} alt="" className="icon" />
                        Microsoft
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Login;