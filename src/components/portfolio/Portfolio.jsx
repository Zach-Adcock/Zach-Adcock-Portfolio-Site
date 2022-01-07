import "./portfolio.scss";
import libraryIMG from "../../portfolio-screenshots/library-shot.png"
import etchASketchIMG from "../../portfolio-screenshots/etch-shot.png"
import portfolioIMG from "../../portfolio-screenshots/portfolio-shot.png"
import plannerIMG from "../../portfolio-screenshots/planner-shot.png"




export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h2>Projects</h2>
            <div className="projects">
                <div className="project trip-planner">
                    <div className="img-container">
                        <img src={plannerIMG} alt="trip-plannerproject" />
                        <div className="overlay">
                            <div className="title">Trip Planner</div>
                        </div>
                    </div>
                    <div className="project-description">
                        A webapp built in react to help you find things to do in your city or 
                        on your vacation.
                    </div>
                    <div className="project-links">
                        <div className="project-btn">
                            <a href="https://github.com/Zach-Adcock/Trip-Planner">Site</a>
                        </div>
                        <div className="project-btn">
                            <a href="https://github.com/Zach-Adcock/Trip-Planner">Code</a>
                        </div>
                    </div>
                </div>
                <div className="project portfolio-project">
                    <div className="img-container">
                        <img src={portfolioIMG} alt="portfolio project" />
                        <div className="overlay">
                            <div className="title">Portfolio Site</div>
                        </div>
                    </div>
                    <div className="project-description">
                        A react app built by and for yours truly. Take a look around and feel free to ask 
                        questions!
                    </div>
                    <div className="project-links">
                        <div className="project-btn">
                            <a href="https://github.com/Zach-Adcock/Zach-Adcock-Portfolio-Site">Site</a>
                        </div>
                        <div className="project-btn">
                            <a href="https://github.com/Zach-Adcock/Zach-Adcock-Portfolio-Site">Code</a>
                        </div>
                    </div>
                </div>
                <div className="project etch-a-sketch">
                    <div className="img-container">
                        <img src={etchASketchIMG} alt="etch-a-sketch project" />
                        <div className="overlay">
                            <div className="title">Etch-A-Sketch</div>
                        </div>
                    </div>
                    <div className="project-description">
                        A webapp to help blow off steam and express your inner-artist.
                    </div>
                    <div className="project-links">
                        <div className="project-btn">
                            <a href="https://zach-adcock.github.io/Etch-A-Sketch/">Site</a>
                        </div>
                        <div className="project-btn">
                            <a href="https://github.com/Zach-Adcock/Etch-A-Sketch">Code</a>
                        </div>
                    </div>
                </div>
                <div className="project library">
                    <div className="img-container">
                        <img src={libraryIMG} alt="library project" />
                        <div className="overlay">
                            <div className="title">Library Project</div>
                        </div>
                    </div>
                    <div className="project-description">
                        A webapp built to track the books in your personal library. Books can be 
                        toggled between read/unread and Data is stored locally.
                    </div>
                    <div className="project-links">
                        <div className="project-btn">
                            <a href="https://zach-adcock.github.io/Library-Project/">Site</a>
                        </div>
                        <div className="project-btn">
                            <a href="https://github.com/Zach-Adcock/Library-Project">Code</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
