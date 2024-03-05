import "./Footer.css";
import { FaGithub,FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer class="footer d-flex direction-column align-center">
      <p>
        Made with{" "}
        <span role="img" aria-label="Love">
          ❤️
        </span>{" "}
        by Abhijeet Choudhary
      </p>

      <div class="d-flex gap align-center padding-all-16">
          <a href="https://github.com/Abhijeet-Saich" class="link" target="_blank" rel="noreferrer">
            <FaGithub size={35} color="black"/>
          </a>

          <a href="https://www.linkedin.com/in/abhijeet-choudhary-967227202/" class="link" target="_blank" rel="noreferrer">
            <FaLinkedin size={35} color="black" />
          </a>
      </div>

    </footer>
  );
};


export default Footer;
