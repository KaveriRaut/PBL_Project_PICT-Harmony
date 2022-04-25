import React from "react";
import Clubs from "./Clubs";
import './Allstyles.css';

import img from "../Images/IEEE.jpeg";
import img1 from "../Images/PCSB.jpeg";
import img2 from "../Images/PASC.jpeg";
import img3 from "../Images/DEBSOC.jpeg";
import img4 from "../Images/PICT_Art_Circle.jpeg";
import img5 from "../Images/PICTOREAL.jpeg";
import img6 from "../Images/TED.jpeg";
import img7 from "../Images/PICT_MUN.jpeg";
import img8 from "../Images/ROBOTICS.png";
import img9 from "../Images/IET.jpg";


function Club_info() {

    return (
        <div>
            <div className="facilities">
                <h1>~Technical Clubs~</h1>
                <div className="row">
                    <Clubs
                        // logo={img}
                        icon={img}
                        name={"IEEE"}
                        content={"IEEE provides an opportunity for all, including student members, to showcase their talent, views and further strengthen IEEE activities. PISB has always been a platform for all the students to learn and polish their skills in various fields. The students, faculty and professionals alike have always aimed to enhance the awareness of technical developments and trends among all its members."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img1}
                        name={"PCSB CSI"}
                        content={"PICT CSI Student Branch, working under CSI, was established in 2016 with an objective to facilitate research, knowledge and career enhancement for the students, along with inspiring and nurturing new entrants into the industry.It provides a platform for technical and non-technical education. One of our key strengths at PCSB is our rate of growth in a short span of time. We take pride in the fact that we are one of the best student communities in Pune, still growing at an exponential rate."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img2}
                        name={"PASC ACM"}
                        content={"Founded by Richard Hamming in 1947, ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges.As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking."}
                    ></Clubs>
                </div>
                <div className="row">
                    <Clubs
                        // logo={img}
                        icon={img8}
                        name={"PICT Robotics"}
                        content={"PICT Robotics has been participating in ABU ROBOCON for the past 12 years. We stood 4th in India in 2014 and 11th in India in 2017.Students from all classes and departments are welcome here. PICT Robotics is a place where students can indulge into their curiosity and the passion for robotics and dare to go beyond the boundaries of their academics to explore real-life applications of their knowledge, learn new technologies and be exposed to national level competitions. "}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img9}
                        name={"PISC IET"}
                        content={"PISC'S inception in 2012, the PICT IET Student Chapter (PISC) has always aimed at preparing students and providing them with that extra edge for success in the professional world they step into. The chapter offers a plethora of opportunities to its student body to hone their technical skills and with a speedy growth, PISC has now gone on to become the largest student chapter in the state."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img2}
                        name={"PASC ACM"}
                        content={"PICT is an engineering college located in Pune , India . This is a blog about the activities conducted by the NSS unit of PICT .NSS stands for National Service Scheme , which is an initiative by the Government of India , with the following objectives :To make the students ..i. understand the community in which they workii. understand themselves in relation to their communityiii. identify the needs and problems of the community and involve them in problem-solving. develop among themselves a sense of social and civic responsibility"}
                    ></Clubs>
                </div>
            </div>
            <hr></hr>
            <div className="facilities">
                <h1>~Non-Technical Clubs~</h1>
                <div className="row">
                    <Clubs
                        // logo={img}
                        icon={img3}
                        name={"DEBSOC"}
                        content={"PICT DEBSOC is a community that develops and nurtures public speaking skills and a variety of soft skills which are essential in today’s world. The modern world requires people to not only be technically proficient in their work but also be outspoken leaders who can initiate a change. We ensure that students improve their oratory skills by giving them a platform where they can voice their opinions and build their confidence."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img4}
                        name={"PICT Art Circle"}
                        content={"PICT Art Circle, we believe in giving back to the society. To promote this culture in PICT, multiple events like nurtures public speaking skills and a variety of soft skills which are essential in today’s world, blood donation and money donation drives are conducted. PICT-O-SOCIAL, a subgroup in PICTOREAL, benevolently organizes activities like orphanage visits, old-age home visits and career counselling sessions to help students indulge in social interactions."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img5}
                        name={"PICTOREAL"}
                        content={"PICTOREAL also organizes several diverse events all around the year. These events contribute towards nurturing one’s pragmatic skills like public speaking, confidence, event management in addition to expression of thoughts, visuals, and photography in a lucid yet creative manner."}
                    ></Clubs>
                </div>
                <div className="row">
                    <Clubs
                        // logo={img}
                        icon={img6}
                        name={"TEDxPICT"}
                        content={"TEDxPICT is a group of proactive individuals focussed at providing a platform to bring in various stakeholders together to share the ideas, stories, and innovation. In the context of current fast developing world, sharing of ideas , and experiences is very much necessary for the overall society progress. TEDxPICT plays vital role in spreading these essential things to the masses."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img7}
                        name={"PICT MUN"}
                        content={"Established in the year 2016, the PICT MUN Club focuses on organizing conferences for the personality development of the students of the college and the region. The Club has successfully organized four MUN Conferences for college students and conducts group discussions, extempore and debates regularly. The Club also organizes training workshops conducted by experienced and decorated MUNers for MUN enthusiasts from in and around the city."}
                    ></Clubs>
                    <Clubs
                        // logo={img}
                        icon={img5}
                        name={"PICTOREAL"}
                        content={"This is our pict club for students."}
                    ></Clubs>
                </div>
            </div>
        </div >
    )
}

export default Club_info;