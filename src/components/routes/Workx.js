import React from "react";
//Semantic UI
import { Header, Item } from "semantic-ui-react";
// Styles
import {
  Holder,
  Heading,
  Hr,
  Card,
  CardText,
  CardHeader,
  CardSubHeader,
  CardIcon,
  NoComputerImg
} from "../dark-mode/styles";

// dark mode toggler
import Toggler from "../dark-mode/Toggler";
//Navbar
import Navbar from "../navbar/Navbar"
//Image
import gssoc from "../../images/work-experience/gssoc.png"
import postman from "../../images/work-experience/postman-badge.png"
import spark from "../../images/work-experience/spark_foundation.png"
import microsoft from "../../images/work-experience/microsoft.jpg"
import jpmorgan from "../../images/work-experience/jpmg.jpg"
//Footer
import Footer from "../dark-mode/Footer"

class Workx extends React.Component {
  constructor(props) {
    super(props);
  }

  changeTheme = () => {
    if (this.props.theme.name === "light") {
      //console.log("theme is : ", this.props.theme);
      this.props.handleChange("dark");
      //console.log("theme elements :", this.props.theme.body);
    } else {
      this.props.handleChange("light");
    }
  };
  render() {
    return (
      <Holder>
        <div className="home">
          <div className="header">
            <Header as="h1">
              <Heading>
                Work Experience
                <Toggler changeTheme={this.changeTheme} />
              </Heading>
            </Header>
            <Hr />
          </div>
          <Card raised color="blue">
            <Item.Group divided>
              <Item>
                <Item.Content>
                  <CardHeader>
                    <Item.Header>GirlScript Summer of Code</Item.Header>
                  </CardHeader>
                  <Item.Meta>
                    <CardSubHeader>March 2021-May 2021</CardSubHeader>
                  </Item.Meta>
                  <Item.Description>
                    <CardText>
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                    </CardText>
                    <div className="icons">
                      <a href="https://github.com/Samridhi-98">
                        <CardIcon name="github"></CardIcon>
                      </a>
                      <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
                        <CardIcon name="globe"></CardIcon>
                      </a>
                    </div>
                  </Item.Description>
                </Item.Content>
                <NoComputerImg size="small" src={gssoc}></NoComputerImg>
              </Item>
            </Item.Group>
          </Card>
          <Card raised color="blue">
            <Item.Group divided>
              <Item>
                <Item.Content>
                  <CardHeader>
                    <Item.Header>Spark Foundation</Item.Header>
                  </CardHeader>
                  <Item.Meta>
                    <CardSubHeader>Jan 2021-Feb 2021</CardSubHeader>
                  </Item.Meta>
                  <Item.Description>
                    <CardText>
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                    </CardText>
                    <div className="icons">
                      <a href="https://github.com/Samridhi-98">
                        <CardIcon name="github"></CardIcon>
                      </a>
                      <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
                        <CardIcon name="globe"></CardIcon>
                      </a>
                    </div>
                  </Item.Description>
                </Item.Content>
                <NoComputerImg size="small" src={spark}></NoComputerImg>
              </Item>
            </Item.Group>
          </Card>
          <Card raised color="blue">
            <Item.Group divided>
              <Item>
                <Item.Content>
                  <CardHeader>
                    <Item.Header>Postman Student Expertn</Item.Header>
                  </CardHeader>
                  <Item.Meta>
                    <CardSubHeader>Jan 2021-Feb 2021</CardSubHeader>
                  </Item.Meta>
                  <Item.Description>
                    <CardText>
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                    </CardText>
                    <div className="icons">
                      <a href="https://github.com/Samridhi-98">
                        <CardIcon name="github"></CardIcon>
                      </a>
                      <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
                        <CardIcon name="globe"></CardIcon>
                      </a>
                    </div>
                  </Item.Description>
                </Item.Content>
                <NoComputerImg size="small" src={postman}></NoComputerImg>
              </Item>
            </Item.Group>
          </Card>
          <Card raised color="blue">
            <Item.Group divided>
              <Item>
                <Item.Content>
                  <CardHeader>
                    <Item.Header>JPMG Virtual Internship</Item.Header>
                  </CardHeader>
                  <Item.Meta>
                    <CardSubHeader>Jan 2021-Feb 2021</CardSubHeader>
                  </Item.Meta>
                  <Item.Description>
                    <CardText>
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                    </CardText>
                    <div className="icons">
                      <a href="https://github.com/Samridhi-98">
                        <CardIcon name="github"></CardIcon>
                      </a>
                      <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
                        <CardIcon name="globe"></CardIcon>
                      </a>
                    </div>
                  </Item.Description>
                </Item.Content>
                <NoComputerImg size="small" src={jpmorgan}></NoComputerImg>
              </Item>
            </Item.Group>
          </Card><Card raised color="blue">
            <Item.Group divided>
              <Item>
                <Item.Content>
                  <CardHeader>
                    <Item.Header>Microsoft Virtual Internship</Item.Header>
                  </CardHeader>
                  <Item.Meta>
                    <CardSubHeader>Jan 2021-Feb 2021</CardSubHeader>
                  </Item.Meta>
                  <Item.Description>
                    <CardText>
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                      Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                    </CardText>
                    <div className="icons">
                      <a href="https://github.com/Samridhi-98">
                        <CardIcon name="github"></CardIcon>
                      </a>
                      <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
                        <CardIcon name="globe"></CardIcon>
                      </a>
                    </div>
                  </Item.Description>
                </Item.Content>
                <NoComputerImg size="small" src={microsoft}></NoComputerImg>
              </Item>
            </Item.Group>
          </Card>
          <Footer />
        </div>
        <Navbar theme={this.props.theme} />
      </Holder>
    );
  }
}

export default Workx;
