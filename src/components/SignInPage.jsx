import React from "react";
import SignIn from "./SignIn";
import { SignUpImage } from "./SignUp";


function SignInPage() {
    return (
        <div class="container" id="container">
            <SignIn></SignIn>
            <div class="overlay-container">
                <div class="overlay">
                    <SignUpImage></SignUpImage>
                </div>
            </div>
        </div>
    );
}

export default SignInPage;