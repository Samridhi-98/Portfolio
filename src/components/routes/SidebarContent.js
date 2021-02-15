import React from "react";
import { Link } from "react-router-dom";
//Semantic ui
import {
  Header,
  Icon,
  Image,
} from "semantic-ui-react";
//CSS
import "../../css/master.css";
// Image
//import profile from "../../images/Samridhi_Profile.jpeg";
import profile from "../../images/my_profile.jpeg";
//Typewriter
import Typewriter from "typewriter-effect";

class SidebarContent extends React.Component {
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
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
              />
            </Header.Subheader>
          </Header>
          <div className="menu1">
            <a href="https://github.com/Samridhi-98">
              <Icon name="github" className="ico1"></Icon>
            </a>
            <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
              <Icon name="linkedin" className="ico1"></Icon>
            </a>
            <a href="https://twitter.com/Samriddhi981">
              <Icon name="twitter" className="ico1"></Icon>
            </a>
          </div>
          <div className="menu2">
            <Link to="/">
              <Icon name="code" className="ico2"></Icon>
            </Link>
            <Link to="/education">
              <Icon name="book" className="ico2"></Icon>
            </Link>

            <Link to="/work-experience">
              <Icon name="edit" className="ico2"></Icon>
            </Link>
            <Link to="/about">
              <Icon name="user" className="ico2"></Icon>
            </Link>
            <a href="mailto:agrawalsamriddhi83@gmail.com">
              <Icon name="mail" className="ico2"></Icon>
            </a>

          </div>
        </div>
      </div>
    );
  }
}

export default SidebarContent;
