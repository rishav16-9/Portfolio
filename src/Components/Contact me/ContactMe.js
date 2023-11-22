import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
} from "lucide-react";

const ContactMe = () => {
  return (
    <>
      <div id="contact" className="container">
        <div className="h-screen bg-contact-bg bg-no-repeat bg-cover bg-center overflow-x-hidden w-screen">
          <div>
            <Fade duration={2000}>
              <h1 className="heigth-title text-center">Contact Me</h1>
              <div className="flex gap-14 pt-32 justify-center">
                <a
                  href="https://www.instagram.com/rishav_surana/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon size={48} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100004195479661"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon size={48} />
                </a>
                <a
                  href="https://github.com/rishav16-9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon size={48} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rishav-surana-9aa97318b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon size={48} />
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
