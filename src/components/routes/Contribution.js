import React from "react";
//Semantic UI
import { Header, Item } from "semantic-ui-react";
//Image
import circuitverse from "../../images/contribution/circuitVerse1.png"
import fossaisa from "../../images/contribution/fossasia.png"
import semantic from "../../images/contribution/semantic.png"
import eddiehub from "../../images/contribution/eddiehub2.jpg"
import hacktober from "../../images/contribution/hacktober.jpeg"
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
      images: [circuitverse, eddiehub, semantic, fossaisa, hacktober],
      contriData: [
        {
          id: 0,
          name: "Circuitverse",
          desc: "Created an issue #503 and also made a PR #507 in the Interactive Book repository.",
        },
        {
          id: 1,
          name: "EddieHub",
          desc: "Created an issue #235 and also made a PR #236 in the Awesome github profiles repository.",
        },
        // {
        //   id: 5,
        //   name: "MLH Local Hack Day",
        //   desc: "Loremipsum Loremipsum Loremipsum Loremipsum Loremipsuoremipsum Loremipsum Loremipsum Loremipsum",
        // },
        {
          id: 2,
          name: "Semantic UI React",
          desc: "Created an issue #4149 in the Semantic-UI-React repository.",
        },
        {
          id: 3,
          name: "Fossaisa",
          desc: "Created an issue #6601 in the open-event-frontend repository.",
        },
        {
          id: 4,
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
