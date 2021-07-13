import React from "react";
//Semantic UI
import { Grid, Header, Segment } from "semantic-ui-react";
// Dark mode toggler
import Toggler from "../dark-mode/Toggler";
// Chart.js
import Chart from "../Chart";
// CSS
import "../../css/master.css";
//Dark mode
import { Holder, Heading, Hr } from "../dark-mode/styles";
//Navbar
import Navbar from "../navbar/Navbar"
//Footer
import Footer from "../dark-mode/Footer"

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData1: {},
      chartData2: {},

    };
  }
  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    this.setState({
      chartData1: {
        labels: ["C++", "MongoDB", "Express", "React", "Nodejs"],
        datasets: [
          {
            label: "Most used languages",
            data: [20, 20, 20, 20, 20],
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
      chartData2: {
        labels: ["Problem Solving", "Team Work", "Multitasking", "Adaptation"],
        datasets: [
          {
            data: [25, 25, 25, 25],
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
    return (
      <Holder>
        <div className="about">
          <div className="header">
            <Header as="h1" >
              <Heading>
                About
                <Toggler changeTheme={this.changeTheme} />
              </Heading>
            </Header>
            <Hr />
            <Segment basic className="desc">
              I'm a 2<sup>nd</sup> year student pursuing Master's in Computer Applications
              from GGSIPU. I'm a passionate learner who's always willing to learn and work across
              technologies and domains. I love to explore new technologies
              and leverage them to solve real-life problems.
              <br />

              <br />
              I'm currently into Web Development and working on my Data Structures and Algorithms
              skills.Seeking an opportunity to pursue a suitable role to upgrade , learn and adapt myself to meet the
              requirements of a company , a competitive and challenging environment where I can serve the organization and establish a career for myself.
              <br />
              <br />
              <a href="https://drive.google.com/file/d/1oRfTyOvtFhPbuLzaFRQo4GhdmbgAdUhY/view?usp=sharing" target="blank">Download resume</a>
            </Segment>
          </div>
          <div>
            <Grid columns={2} divided stackable className="chart">
              <Grid.Column>
                <Chart
                  className="chart"
                  chartData={this.state.chartData1}
                  text="Technical Skills"
                />
              </Grid.Column>
              <Grid.Column>
                <Chart
                  className="chart"
                  chartData={this.state.chartData2}
                  text="Interpersonal Skills"
                />
              </Grid.Column>
            </Grid>
          </div>
          <Footer />
        </div>
        <Navbar theme={this.props.theme} />
      </Holder>
    );
  }
}

export default About;
