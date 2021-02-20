import React from "react";
//Semantic UI
import { Header, Item } from "semantic-ui-react";
//Navbar
import Navbar from "../navbar/Navbar"
// Style Component
import {
    Holder,
    Heading,
    Hr,
    Card,
    CardText,
    CardHeader,
    CardSubHeader,
} from "../dark-mode/styles";
//Toggler
import Toggler from "../dark-mode/Toggler";
//Footer
import Footer from "../dark-mode/Footer"

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            educationData: [
                {
                    name: "Bharati Vidyapeeth's Institute of Computer Applications and Management",
                    desc: "Active member and organizer of the Web development event on The Education Day.",
                    date: "Aug 2019-May 2022",
                },
                {
                    name: "Keshav Mahavidyalya",
                    desc: "Rewarded as 'Gem of Keshav' for the class of 2016-2019 and also rewarded as 'Scholar'  for three consecutive years (2016-2019).",
                    date: "July 2016-May 2019",
                },
                {
                    name: "Sant Atulanand Convent School",
                    desc: "Won many inter-school and intra-school competitions, also secured good position in class.",
                    date: "April 2007-May 2016",
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
        let cardList = this.state.educationData.map((data) => {
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
                                Education
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


export default Education;
