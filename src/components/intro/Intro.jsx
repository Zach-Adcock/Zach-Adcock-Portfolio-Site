import "./intro.scss"
import {ArrowDownward} from "@material-ui/icons"
import { init } from "ityped";
import { useEffect, useRef } from "react";



export default function Intro() {


    const titleRef = useRef()

    useEffect(() => {
        init(titleRef.current, {
            showCursor:false,
            backDelay: 100,
            // strings: ['Hire me','please','like realllyyy please hire me','please I\'m like begging you']
            strings: ['Front-End Developer', 'Collaborator', 'Life-Long Learner', 'Challenge Seeker']
        })
    },[])
    return (
        <div className="intro" id="intro">
            <div className="photo-container">
                <div className="photo-circle"></div>
                <div className="rectangle"></div>
            </div>
            <div className="intro-text-container">
                <div className="intro-text">
                    <h2>Hey, I'm</h2>
                    <h1>Zach.</h1>
                    <h2> <span ref={titleRef}></span></h2>
                </div>
                <a href="#works">
                    <ArrowDownward />
                </a>
            </div>
        </div>
    )
}
