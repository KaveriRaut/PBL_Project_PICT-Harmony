import React from "react";
import { useNavigate } from "react-router-dom";
import img from "./loginImg.png";

function SignUp() {

    const nevigateToSignInPage=useNavigate();
    function setHistory1(){
        nevigateToSignInPage("/SignInPage");
    }

    return (
        <div>
            <div className="form-container sign-in-container">
                <form action="#" >
                    <h1>Create Account</h1>
                    <div className="social-container"></div>
                    <span>Use College Email-id for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="cpassword" placeholder="Confirm Password" />
                    <button className="glow-button" onClick={setHistory1}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

function SignUpImage() {
    return (
        <div className="overlay-panel overlay-right" >
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <img src={img} alt="LoginImg" width="200" height="200" ></img>
        </div>
    );
}

export default SignUp;
export { SignUpImage };