import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { Email, Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <footer>
      <div>
      <a href="https://github.com/ksaipavanr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      <a href="https://www.linkedin.com/in/kyasaram-sai-pavan-reddy-37832423a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      <a href="https://www.instagram.com/_sai_pavan_reddy?igsh=MTI5NjY2MWN2dWNoeQ==" target="_blank" rel="noreferrer"><Instagram/></a>
      <a href="mailto:ksaipavanr45@gmail.com" target="_blank" rel="noreferrer"><Email/></a>
      </div>
      <p>Portfolio | Sai Pavan Reddy </p>
    </footer>
  );
}

export default Footer;