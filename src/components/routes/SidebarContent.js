import React from "react";
import { Link } from "react-router-dom";
// Typewriting effect
import Typewriter from "typewriter-effect";
//Semantic ui
import {
  Header,
  Icon,
  Image,
  Popup
} from "semantic-ui-react";
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
              <Popup
                trigger={<Icon name="github" className="ico1"></Icon>}
                content="Samridhi-98"
                size="mini"
                position='bottom center'
              />
            </a>
            <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
              <Popup
                trigger={<Icon name="linkedin" className="ico1"></Icon>}
                content="samridhi-agrawal-1713201a"
                size="mini"
                position='bottom center'
              />
            </a>
            <a href="https://twitter.com/Samriddhi981">
              <Popup
                trigger={<Icon name="twitter" className="ico1"></Icon>}
                content="Samriddhi981"
                size="mini"
                position='bottom center'
              />
            </a>
          </div>
          <div className="menu2">
            <Link to="/">
              <Popup
                trigger={<Icon name="code" className="ico2"></Icon>}
                content="Projects"
                size="mini"
                position='bottom center'
              />
            </Link>
            <Link to="/education">
              <Popup
                trigger={<Icon name="book" className="ico2"></Icon>}
                content="Education"
                size="mini"
                position='bottom center'
              />
            </Link>

            <Link to="/work-experience">
              <Popup
                trigger={<Icon name="edit" className="ico2"></Icon>}
                content="Work-Experience"
                size="mini"
                position='bottom center'
              />
            </Link>
            <Link to="/about">
              <Popup
                trigger={<Icon name="user" className="ico2"></Icon>}
                content="About"
                size="mini"
                position='bottom center'
              />
            </Link>
            <Link to="/contribution">
              <Popup
                trigger={<Icon name="osi" className="ico2"></Icon>}
                content="Open Source"
                size="mini"
                position='bottom center'
              />
            </Link>
            <a href="mailto:agrawalsamriddhi83@gmail.com">
              <Popup
                trigger={<Icon name="mail" className="ico2"></Icon>}
                content="agrawalsamriddhi83@gmail.com"
                size="mini"
                position='bottom center'
              />
            </a>

          </div>
        </div>
      </div>
    );
  }
}

export default SidebarContent;
