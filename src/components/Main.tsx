import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { Email, Instagram } from "@mui/icons-material";
import mock10 from '../assets/images/Pavanprofile.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={mock10} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ksaipavanr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kyasaram-sai-pavan-reddy-37832423a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/_sai_pavan_reddy?igsh=MTI5NjY2MWN2dWNoeQ==" target="_blank" rel="noreferrer"><Instagram/></a>
            <a href="mailto:ksaipavanr45@gmail.com" target="_blank" rel="noreferrer"><Email/></a>
          </div>
          <h1>Sai Pavan Reddy Kyasaram</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ksaipavanr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/kyasaram-sai-pavan-reddy-37832423a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.instagram.com/_sai_pavan_reddy?igsh=MTI5NjY2MWN2dWNoeQ==" target="_blank" rel="noreferrer"><Instagram/></a>
            <a href="mailto:ksaipavanr45@gmail.com" target="_blank" rel="noreferrer"><Email/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;