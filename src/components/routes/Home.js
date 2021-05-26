import React from "react";
//Semantic UI
import { Header, Item } from "semantic-ui-react";
//Chart
import Chart from "../Chart";
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
} from "../dark-mode/styles";
// Dark mode toggler
import Toggler from "../dark-mode/Toggler";
//Navbar
import Navbar from "../navbar/Navbar"
//Footer
import Footer from "../dark-mode/Footer"

//Home Component
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      feedData: [
        { lang1: "Javascript", lang2: "HTML", lang3: "CSS", l1: 89.9, l2: 7.9, l3: 5.2 },
        { lang1: "Javascript", lang2: "HTML", lang3: "CSS", l1: 65.7, l2: 13.3, l3: 29 },
        { lang1: "Javascript", lang2: "HTML", lang3: "CSS", l1: 85.9, l2: 15.2, l3: 10.8 },
        { lang1: "Javascript", lang2: "HTML", lang3: "CSS", l1: 85.9, l2: 15.2, l3: 10.8 },
        { lang1: "Javascript", lang2: "HTML", lang3: "CSS", l1: 83.1, l2: 9.1, l3: 5.7 },
        { lang1: "Javascript", lang2: "HTML", lang3: "CSS", l1: 61.9, l2: 30.6, l3: 17.5 },
        { lang1: "Javascript", lang2: "HTML", lang3: "CSS", l1: 8.2, l2: 85.1, l3: 6.7 },
      ],

      projectData: [
        {
          id: 5,
          name: "Git-To",
          desc: "Platform that allows one to find, collaborate and chat with the other like minded contributors. Also allows contributors to find projects according to their preferred tech stack and knowledge in the field.",
          date: "Feb 2021-Mar 2021",
          github: "https://github.com/1s-0s/Gitto",
          web: "https://git-to.herokuapp.com"
        },
        {
          id: 4,
          name: "OnlyMeal",
          desc: "To overcome the problem of food wastage, Onlymeal provides a two way interaction between those with a food surplus and those looking for food. The data collected from this app includes nature of the food, date of expiry, location etc. This data when aggregated can be very useful for NGOs to connect the locations with surplus with those that are in need of the food.",
          date: "Oct 2020-Dec 2020",
          github: "https://github.com/Samridhi-98/OnlyMeal",
          web: "https://onlymeal.herokuapp.com/"
        },
        {
          id: 3,
          name: "Rapid-NPM-Package",
          desc: "Fast API search and implementation using various APIs like news API, weather API, memeAPI, and FoodAPI to retrieve required data using provided methods and parameter-list.",
          date: "Feb 2021-Mar 2021",
          github: "https://github.com/Samridhi-98/Rapid-NPM-Package",
          web: "https://www.npmjs.com/package/rapid-npm-package"
        },
        {
          id: 2,
          name: "Psychic-Doodle",
          desc: "While studying one might want to draw on the same page in order to make others or self understand the concept in a deeper manner. It is a browser extension that allows user to doodle over the active web page. The user can doodle with different colours,shapes and strokes.",
          date: "Dec 2020-Jan 2021",
          github: "https://github.com/Samridhi-98/Psychic-Doodle",
          web: "#"
        },
        {
          id: 1,
          name: "Captcha-IMHUMAN",
          desc: "Visually impaired citizens face a lot of problems with the CAPTCHA authentication process. In some of the applications OTP is given as an alternative but not with the rest of the apps. In some of the apps audio captcha is provided but many citizens find it difficult to decipher. To overcome this problem designed a CAPTCHA using environmental sounds.",
          date: "Sep 2020-Oct 2020",
          github: "https://github.com/Samridhi-98/Captcha-IMHUMAN",
          web: "https://captcha-imhuman.herokuapp.com/"
        },
        {
          id: 0,
          name: "Secret",
          desc: "A simple web application to share your secret anonymously. Also added google and facebook authentication feature using passport.js and used EJS for templating.",
          date: "June 2020-July 2020",
          github: "https://github.com/Samridhi-98/Secrets",
          web: "#"
        }
      ]
    };
  }
  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    let tempArray = [];
    this.state.feedData.map((vals) => {
      let chartVal = {
        cData: {
          labels: ["", vals.lang1, vals.lang2, vals.lang3],
          datasets: [
            {
              label: "Most used languages",
              data: [0, vals.l1, vals.l2, vals.l3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)",
              ],
            },
          ],
        },
      };
      //console.log("chartval: ", chartVal.cData);
      tempArray = tempArray.concat(chartVal.cData);
      return 0;
    });
    //console.log("temparray is : ", tempArray);
    // ! setState is a async function
    this.setState({ chartData: tempArray }, () => {
      console.log("chartData: ", this.state.chartData);
    });
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
    let cardList = this.state.projectData.map((data) => {
      return (
        <Card raised color="blue">
          <Item.Group divided>
            <Item>
              <Item.Content>
                <CardHeader>
                  <Item.Header>{data.name}</Item.Header>
                  <CardSubHeader>{data.date}</CardSubHeader>
                </CardHeader>
                <Item.Description>
                  <CardText>
                    {data.desc}
                  </CardText>
                  <div className="icons">
                    <a href={data.github}>
                      <CardIcon name="github"></CardIcon>
                    </a>
                    <a href={data.web}>
                      <CardIcon name="globe"></CardIcon>
                    </a>
                  </div>
                </Item.Description>
              </Item.Content>
              <Chart
                className="chart"
                type="1"
                chartData={this.state.chartData[data.id]}
                displayTitle={false}
              />
            </Item>
          </Item.Group>
        </Card>
      );
    });
    return (
      <Holder>
        <div className="home">
          <div className="header">
            <Header as="h1">
              <Heading>
                Project
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

export default Home;
