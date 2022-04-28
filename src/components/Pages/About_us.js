import React from "react";
import '../../App.css';
import imgk from "./ImagesForNotice/kaveripic.jpeg";
import imgr from "./ImagesForNotice/photo.jpg";
import imgs from "./ImagesForNotice/sandhyapic.jpeg";
import imgn from "./ImagesForNotice/nimishpic.jpeg";
import imgv from "./ImagesForNotice/varunpic.jpeg";
// import { useState } from "react";

export default function About_us() {
    return (
        <div className="TeamBody">
            <div className="Teamcontainer" >
                <h1 className="heading">Meet Our Team</h1>

                <div className="profiles">
                    <div className="profile">
                        <img src={imgk} className="profile-img" />
                        <h3 className="user-name">Kaveri Raut</h3>
                        <h5>Front-End Developer</h5>
                    </div>

                    <div className="profile">
                        <img src={imgr} className="profile-img" />
                        <h3 className="user-name">Riya Mulay</h3>
                        <h5>Front-End Developer</h5>
                    </div>

                    <div className="profile">
                        <img src={imgs} className="profile-img" />
                        <h3 className="user-name">Sandhya Rakhunde</h3>
                        <h5>Back-End Developer</h5>
                    </div>

                    <div className="profile">
                        <img src={imgn} className="profile-img" />
                        <h3 className="user-name">Nimish Sanghavi</h3>
                        <h5>Back-End Developer</h5>
                    </div>

                    <div className="profile">
                        <img src={imgv} className="profile-img" />
                        <h3 className="user-name">Varun Sovani</h3>
                        <h5>Back-End Developer</h5>
                    </div>
                </div>
            </div>


        </div>
    );

}

