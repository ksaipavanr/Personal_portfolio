import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { Email, Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <footer>
      <div>
      <a href="https://github.com/Ganesh8296" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      <a href="https://www.linkedin.com/in/ganesh-kodmur-71a204274/?originalSubdomain=in" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      <a href="https://www.instagram.com/ganesh_kodmur/?igsh=Z2Fxb283dDR1NzVr#" target="_blank" rel="noreferrer"><Instagram/></a>
      <a href="mailto:ykodmur@gmail.com" target="_blank" rel="noreferrer"><Email/></a>
      </div>
      <p>Portfolio | Ganesh kodmur</p>
    </footer>
  );
}

export default Footer;