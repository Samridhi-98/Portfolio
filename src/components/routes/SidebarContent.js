import React from "react";
import { Link } from "react-router-dom";
// Typewriting effect
import Typewriter from "typewriter-effect";
//Semantic ui
import {
  Header,
  Image,
  Popup
} from "semantic-ui-react";
//REACT_ICONS
import { IconContext } from "react-icons"
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaUserGraduate, FaEdit, FaUserAlt } from "react-icons/fa"
import { RiOpenSourceFill, RiMailFill } from "react-icons/ri"

//CSS
import "../../css/master.css";
// Image
import profile from "../../images/my_profile.jpeg";
class SidebarContent extends React.Component {
  constructor() {
    super();
    this.state = {
      isDarkMode: false
    }
  }
  toggleButton = () => {
    this.setState({ isDarkMode: (this.state.isDarkMode === true) ? false : true });
  }
  render() {
    return (
      <div>
        <div className="sidebar">
          <Image src={profile} size="small" circular centered></Image>
          <Header as="h2" textAlign="center" className="header">
            Samriddhi Agrawal
            <Header.Subheader className="header">
              <Typewriter
                options={{
                  strings: ["Full Stack Developer", "Enthusiastic Learner"],
                  autoStart: true,
                  loop: true
                }}
                onInit={
                  (typewriter) => {
                    typewriter
                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                  }}
              />

            </Header.Subheader>

          </Header>


          <div className="menu1">
            <a href="https://github.com/Samridhi-98">
              <IconContext.Provider value={{ className: "ico1" }}>
                <Popup
                  content="Samridhi-98"
                  size="mini"
                  position='bottom center'
                  trigger={
                    <FaGithub />
                  }
                />
              </IconContext.Provider>
            </a>
            <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
              <IconContext.Provider value={{ className: "ico1" }}>
                <Popup
                  content="samridhi-agrawal-1713201ab"
                  size="mini"
                  position='bottom center'
                  trigger={
                    <FaLinkedin />
                  }
                />
              </IconContext.Provider>
            </a>
            <a href="https://twitter.com/Samriddhi981">
              <IconContext.Provider value={{ className: "ico1" }}>
                <Popup
                  content="Samriddhi981"
                  size="mini"
                  position='bottom center'
                  trigger={
                    <FaTwitter />
                  }
                />
              </IconContext.Provider>
            </a>
          </div>
          <div className="menu2">
            <Link to="/">
              <IconContext.Provider value={{ className: "ico2", size: "1.1em" }}>
                <Popup
                  content="Project"
                  size="mini"
                  position='bottom center'
                  trigger={
                    <FaCode />
                  }
                />
              </IconContext.Provider>
            </Link>
            <Link to="/contribution">
              <IconContext.Provider value={{ className: "ico2", size: "1.1em" }}>
                <Popup
                  trigger={<RiOpenSourceFill />}
                  content="Open Source"
                  size="mini"
                  position='bottom center'
                />
              </IconContext.Provider>
            </Link>
            <Link to="/education">
              <IconContext.Provider value={{ className: "ico2", size: "0.9em" }}>
                <Popup
                  trigger={<FaUserGraduate />}
                  content="Education"
                  size="mini"
                  position='bottom center'
                />
              </IconContext.Provider>
            </Link>

            <Link to="/work-experience">
              <IconContext.Provider value={{ className: "ico2" }}>
                <Popup
                  trigger={<FaEdit />}
                  content="Work-Experience"
                  size="mini"
                  position='bottom center'
                />
              </IconContext.Provider>
            </Link>
            <Link to="/about">
              <IconContext.Provider value={{ className: "ico2", size: "0.9em" }}>
                <Popup
                  trigger={<FaUserAlt />}
                  content="About"
                  size="mini"
                  position='bottom center'
                />
              </IconContext.Provider>
            </Link>
            <a href="mailto:agrawalsamriddhi83@gmail.com">
              <IconContext.Provider value={{ className: "ico2", size: "1em" }}>
                <Popup
                  trigger={<RiMailFill />}
                  content="agrawalsamriddhi83@gmail.com"
                  size="mini"
                  position='bottom center'
                />
              </IconContext.Provider>
            </a>

          </div>
        </div>
      </div>
    );
  }
}

export default SidebarContent;
