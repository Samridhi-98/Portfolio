import React from "react";
//Semantic UI
import { Header, Item } from "semantic-ui-react";
//Image
import circuitverse from "../../images/contribution/circuitVerse1.png"
import fossaisa from "../../images/contribution/fossasia.png"
import semantic from "../../images/contribution/semantic.png"
import eddiehub from "../../images/contribution/eddiehub2.jpg"
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
      images: [circuitverse, eddiehub, semantic, fossaisa,],
      contriData: [
        {
          id: 0,
          name: "Circuitverse",
          desc: "Loremipsum Loremipsum Loremipsum Loremipsum Loremipsuoremipsum Loremipsum Loremipsum Loremipsum",
        },
        {
          id: 1,
          name: "EddieHub",
          desc: "Loremipsum Loremipsum Loremipsum Loremipsum Loremipsuoremipsum Loremipsum Loremipsum Loremipsum",
        },
        {
          id: 2,
          name: "Semantic UI React",
          desc: "Loremipsum Loremipsum Loremipsum Loremipsum Loremipsuoremipsum Loremipsum Loremipsum Loremipsum",
        },
        {
          id: 3,
          name: "Fossaisa",
          desc: "Loremipsum Loremipsum Loremipsum Loremipsum Loremipsuoremipsum Loremipsum Loremipsum Loremipsum",
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
              <NoComputerImg alt={data.name} size="small" src={this.state.images[data.id]}></NoComputerImg>
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
