import React from "react";
import mock07 from '../assets/images/senti1.png';
import mock08 from '../assets/images/brain.jpg';
import mock09 from '../assets/images/Weather.png';
import mock10 from '../assets/images/Shoe_Recommendation.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="http://smartshoe-recommender.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://smartshoe-recommender.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noreferrer"><h2>Shoe Recommendation System</h2></a>
                <p>Shoe Recommendation System: A serverless AI-powered web app built using React, AWS Lambda, and RDS that suggests personalized shoes based on user preferences and past purchases. It features real-time recommendations, order placement, and cloud scalability.
</p>
            </div>
            <div className="project">
                <a href="http://weather-now-s3.s3-website.ap-south-1.amazonaws.com/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://weather-now-s3.s3-website.ap-south-1.amazonaws.com/" target="_blank" rel="noreferrer"><h2>Weather Fore Cast</h2></a>
                <p>Weather Website: A dynamic weather forecasting app built using React.js, which fetches real-time weather data based on the user's current location. It displays temperature, humidity, and conditions in a clean, responsive UI.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Brain Tumor Detection System</h2></a>
                <p>A deep learning-based project built using Python and CNNs to detect brain tumors from MRI scans. It features image preprocessing, data augmentation, and hyperparameter tuning to achieve high accuracy in tumor classification.</p>
                
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Video Sentiment Analysis System </h2></a>
                <p>Developed a multi-modal AI system that analyzes video content by combining visual, audio, and text features to detect emotions and sentiments. Leveraged NLP, CNNs, and machine learning for accurate and robust sentiment recognition across various media inputs.</p>
                
            </div>
        </div>
    </div>
    );
}

export default Project;