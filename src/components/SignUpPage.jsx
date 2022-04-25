import React from "react";
import { SignInImage } from "./SignIn";
import SignUp from "./SignUp";


function SignUpPage(){
    return(
        <div class="container" id="container">
            <SignUp></SignUp>
            <div class="overlay-container">
                <div class="overlay">
                    <SignInImage></SignInImage>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;