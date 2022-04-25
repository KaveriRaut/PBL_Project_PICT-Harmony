import React from "react";
import { useNavigate } from "react-router-dom";
import img from "./loginImg2.png";

function SignIn() {

    const nevigateToSignUpPage=useNavigate();
    function setHistory1(){
        nevigateToSignUpPage("/SignUpPage");
    }

    const nevigateToHome=useNavigate();
    function setHistory2(){
        nevigateToHome("/Home");
    }

    return (
        <div>
            <div className="form-container sign-in-container" >
                <form action="#">
                    <h1>Log in</h1>
                    <div className="social-container" ></div>
                    <span>Log in Through Your Account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="glow-button" onClick={setHistory2}>Sign In</button>
                    <br></br>
                    <span>Dont Have An Account?</span>
                    <button className="glow-button" onClick={setHistory1}>Create Account</button>
                </form>
            </div>
        </div>
    );
}

function SignInImage() {
    return (
        <div className="overlay-panel overlay-right" >
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <img src={img} alt="LoginImg" width="200" height="200" ></img>
        </div>
    );
}

export default SignIn;
export { SignInImage };