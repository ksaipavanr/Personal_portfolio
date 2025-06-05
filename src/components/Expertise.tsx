import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJava, faHtml5, faCss3, faJs, faAws } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Python",
    "java",
    "SQL",
    "AI",
    "Machine Learning",
    "Postman",
    "AWS"
];
function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>skills</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faHtml5} size="4x"/>
                            <FontAwesomeIcon icon={faCss3} size="4x"/>
                            <FontAwesomeIcon icon={faJs} size="4x"/>
                            <FontAwesomeIcon icon={faReact} size="4x"/>
                            <FontAwesomeIcon icon={faJava} size="4x"/>
                            <FontAwesomeIcon icon={faAws} size="4x"/>
                        </div>
                        <h3>Full Stack Web Development</h3>
                        <p>I have built a diverse range of full-stack web applications from scratch using modern technologies such as React for the frontend and Node.js with the Serverless Framework for scalable, cloud-native backend development on AWS.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;