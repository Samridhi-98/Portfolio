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
  // CardIcon,
  NoComputerImg
} from "../dark-mode/styles";

// dark mode toggler
import Toggler from "../dark-mode/Toggler";
//Navbar
import Navbar from "../navbar/Navbar"
//Image
import gssoc from "../../images/work-experience/gssoc.png"
import postman from "../../images/work-experience/postman-badge.png"
import spark from "../../images/work-experience/spark.png"
import microsoft from "../../images/work-experience/microsoft.jpg"
import jpmorgan from "../../images/work-experience/jpmg.jpg"
//Footer
import Footer from "../dark-mode/Footer"

class Workx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [gssoc, spark, postman, jpmorgan, microsoft],
      workData: [
        {
          id: 0,
          name: "GirlScript Summer of Code",
          desc: "I have been selected as a participant in GSSoC'21.Looking forward to contribute in open source.",
          date: "March 2021-May 2021",
        },
        {
          id: 1,
          name: "Spark Foundation",
          desc: "Joined The Spark Foundation as a web developement and designing intern under Graduate Rotational Internship Program.",
          date: "Jan 2021-Feb 2021",
        },
        {
          id: 2,
          name: "Postman Student Expert",
          desc: "Successfully completed the student expert program provided by Postman for API building and testing.",
          date: "Jan 2021-Feb 2021",
        },
        {
          id: 3,
          name: "JPMG Virtual Internship",
          desc: "Successfully managed to done all the task provided by JPMG under Software Engineering Virtual Experience.",
          date: "June 2020-Aug 2020",
        },
        {
          id: 4,
          name: "Microsoft Virtual Internship",
          desc: "Successfully completed all the task provided by Undergradute and Masters Asia Virtual Experience Program.",
          date: "June 2020-July 2020",
        }
      ]
    }
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
    let cardList = this.state.workData.map((data) => {
      return (
        <Card raised color="blue">
          <Item.Group divided>
            <Item>
              <Item.Content>
                <CardHeader>
                  <Item.Header>{data.name}</Item.Header>
                </CardHeader>
                <Item.Meta>
                  <CardSubHeader>{data.date}</CardSubHeader>
                </Item.Meta>
                <Item.Description>
                  <CardText>
                    {data.desc}
                  </CardText>
                </Item.Description>
              </Item.Content>
              <NoComputerImg alt={data.name} size="tiny" src={this.state.images[data.id]}></NoComputerImg>
            </Item>
          </Item.Group>
        </Card>
      )
    })
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
          {cardList}
          <Footer />
        </div>
        <Navbar theme={this.props.theme} />
      </Holder>
    );
  }
}

export default Workx;
