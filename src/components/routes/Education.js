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
                                Education
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
                                        <Item.Header>Bharati Vidyapeeth's Institute of Computer Applications and Management</Item.Header>
                                    </CardHeader>
                                    <Item.Meta>
                                        <CardSubHeader>Aug 2019-May 2022</CardSubHeader>
                                    </Item.Meta>
                                    <Item.Description>
                                        <CardText>
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                        </CardText>
                                        {/* <div className="icons">
                                            <a href="https://github.com/Samridhi-98">
                                                <CardIcon name="github"></CardIcon>
                                            </a>
                                            <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
                                                <CardIcon name="globe"></CardIcon>
                                            </a>
                                        </div> */}
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Card>
                    <Card raised color="blue">
                        <Item.Group divided>
                            <Item>
                                <Item.Content>
                                    <CardHeader>
                                        <Item.Header>Keshav Mahavidyalya</Item.Header>
                                    </CardHeader>
                                    <Item.Meta>
                                        <CardSubHeader>July 2016-May 2019</CardSubHeader>
                                    </Item.Meta>
                                    <Item.Description>
                                        <CardText>
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                        </CardText>
                                        {/* <div className="icons">
                                            <a href="https://github.com/Samridhi-98">
                                                <CardIcon name="github"></CardIcon>
                                            </a>
                                            <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
                                                <CardIcon name="globe"></CardIcon>
                                            </a>
                                        </div> */}
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Card>
                    <Card raised color="blue">
                        <Item.Group divided>
                            <Item>
                                <Item.Content>
                                    <CardHeader>
                                        <Item.Header>Sant Atulanand Convent School</Item.Header>
                                    </CardHeader>
                                    <Item.Meta>
                                        <CardSubHeader>April 2002-May 2016</CardSubHeader>
                                    </Item.Meta>
                                    <Item.Description>
                                        <CardText>
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                            Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                                        </CardText>
                                        {/* <div className="icons">
                                            <a href="https://github.com/Samridhi-98">
                                                <CardIcon name="github"></CardIcon>
                                            </a>
                                            <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
                                                <CardIcon name="globe"></CardIcon>
                                            </a>
                                        </div> */}
                                    </Item.Description>
                                </Item.Content>
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


export default Education;
