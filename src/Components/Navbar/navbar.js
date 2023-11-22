import React from "react";
import "./navbar.css";
import { Menu, PanelRightCloseIcon } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar() {
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  return (
    <>
      <div className="container px-4 py-2 items-center fixed">
        <div className="flex justify-between text-black font-bold">
          <div>
            <AnchorLink href="#home">Rishav Surana</AnchorLink>
          </div>
          <div className="flex gap-20 justify-center HideMenu">
            <div>
              <AnchorLink href="#about">About</AnchorLink>
            </div>
            <div>
              <AnchorLink href="#skills">Skill</AnchorLink>
            </div>
            <div>
              <AnchorLink href="#project">Project</AnchorLink>
            </div>
            <div>
              <AnchorLink href="#work">Work</AnchorLink>
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <AnchorLink href="#contact" className="HideMenu">
                Contact Me
              </AnchorLink>
            </div>
            <Menu id="main" className="hide-hamburger-menu" onClick={openNav} />
          </div>
        </div>
        <div id="mySidebar" className="sidebar">
          <PanelRightCloseIcon
            color="white"
            className="closebtn"
            onClick={closeNav}
          />
          <AnchorLink onClick={closeNav} href="#about">
            About
          </AnchorLink>
          <AnchorLink onClick={closeNav} href="#skills">
            Skills
          </AnchorLink>
          <AnchorLink onClick={closeNav} href="#project">
            Project
          </AnchorLink>
          <AnchorLink onClick={closeNav} href="#work">
            Work
          </AnchorLink>
          <AnchorLink onClick={closeNav} href="#contact">
            Contact
          </AnchorLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
