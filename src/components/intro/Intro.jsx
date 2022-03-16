import "./intro.scss"
import {ArrowDownward} from "@material-ui/icons"
import { init } from "ityped";
import { useEffect, useRef } from "react";
import LinkedInLogo from "../../logos/LinkedInLogo.png";
import GitHubLogo from "../../logos/GitHubLogo.png";
import ResumePDF from "../../PDFs/ZachAdcockResume2022"




export default function Intro() {


    const titleRef = useRef()

    useEffect(() => {
        init(titleRef.current, {
            showCursor:false,
            backDelay: 1000,
            // strings: ['Hire me','please','like realllyyy please hire me','please I\'m like begging you']
            strings: ['Front-End Developer', 'Collaborator', 'Life-Long Learner', 'Challenge Seeker']
        })
    },[])
    return (
        <div className="intro" id="intro">
            <div className="photo-container">
                <div className="photo-circle"></div>
                <div className="rectangle"></div>
                <div className="external-links-mobile">
                    <a href = {ResumePDF} target = "_blank">
                        <div className="resume-box-mobile">Download Resume</div>
                    </a>
                    <a href="https://www.linkedin.com/in/zachary-adcock/" alt="Zach Adcock LinkedIn URL">
                        <img src={LinkedInLogo} alt="LinkedIn Logo" />
                    </a>
                    <a href="https://github.com/zach-adcock" alt="Zach Adcock GitHub URL">
                        <img src={GitHubLogo} alt="GitHub Logo" />
                    </a>
                </div>
            </div>
            <div className="intro-text-container">
                <div className="intro-text">
                    <h2>Hey, I'm</h2>
                    <h1>Zach.</h1>
                    <h3> <span ref={titleRef}></span></h3>
                </div>
                <a href="#about">
                    <ArrowDownward />
                </a>
                
            </div>
            <div className="external-links">
                <a href = {ResumePDF} target = "_blank">
                    <div className="resume-box">Download Resume</div>
                </a>
                <a href="https://www.linkedin.com/in/zachary-adcock/" alt="Zach Adcock LinkedIn URL">
                    <img src={LinkedInLogo} alt="LinkedIn Logo" />
                </a>
                <a href="https://github.com/zach-adcock" alt="Zach Adcock GitHub URL">
                    <img src={GitHubLogo} alt="GitHub Logo" />
                </a>
            </div>
        </div>
    )
}
