import React from "react";
//Semantic UI
import { Header, Item } from "semantic-ui-react";
//Image
import circuitverse from "../../images/contribution/circuitVerse1.png"
import fossaisa from "../../images/contribution/fossasia.png"
import semantic from "../../images/contribution/semantic.png"
import eddiehub from "../../images/contribution/eddiehub2.jpg"
import hacktober from "../../images/contribution/hacktober.jpeg"
import projectsakura from "../../images/contribution/project-sakura.png";
import restfetch from "../../images/contribution/rest-fetch.png";
import girlcodeit from "../../images/contribution/girlcodeit.png";
// Styles
import {
  Holder,
  Heading,
  Hr,
  Card,
  CardText,
  CardHeader,
  NoComputerImg,
} from "../dark-mode/styles";
import Toggler from "../dark-mode/Toggler";
//Phone Navbar
import Navbar from "../navbar/Navbar"
//Footer
import Footer from "../dark-mode/Footer"


class Contribution extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [hacktober, eddiehub, fossaisa, semantic, circuitverse, restfetch, girlcodeit, projectsakura],
      contriData: [
        {
          id: 7,
          name: "Project Sakura",
          desc: "Contributed in multiple repositories of the Project Sakura (A completely free and open source custom ROM based on lineage OS wih over 100K active users) as a Full Stack developer.",
        },
        {
          id: 6,
          name: "Girl Code It",
          desc: "Contributed on the Opportunity-Calendar project, specifically on the responsiveness and form component of the frontend and swagger documentation of the backend.",
        },
        {
          id: 5,
          name: "REST-FETCH",
          desc: "Worked on REST-API to generate massive amount of fake data in nodejs and the browser which can be easily used during testing and development without the need for creating sample data manually.",
        },
        {
          id: 4,
          name: "Circuitverse",
          desc: "Opened an issue for additional information and questions(#503) and also made various PRs to add MCQs for each topics in the Interactive Book repository.",
        },
        // {
        //   id: 3,
        //   name: "EddieHub",
        //   desc: "Opened an issue #235 and also made a PR #236 in the Awesome github profiles repository.",
        // },
        {
          id: 2,
          name: "Semantic UI React",
          desc: "Opened an issue #4149 for inappropiate behaviour of the sticky component.",
        },
        {
          id: 1,
          name: "Fossaisa",
          desc: "Opened an issue #6601 regarding inappropiate working of HCAPTCHA in the open-event-frontend repository.",
        },
        {
          id: 0,
          name: "Hacktoberfest",
          desc: "Participated in Hacktoberfest 2020 and got merged more than 4 PRs successfully.",
        },
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
    let cardList = this.state.contriData.map((data) => {
      return (
        <Card raised color="blue">
          <Item.Group divided>
            <Item>
              <Item.Content>
                <CardHeader>
                  <Item.Header>{data.name}</Item.Header>
                </CardHeader>
                <Item.Meta>
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
                Open Source
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

export default Contribution;
