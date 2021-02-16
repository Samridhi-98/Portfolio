import React from "react";
import { Card, Grid, Item, Header, Icon, Segment } from "semantic-ui-react";
import Chart from "../Chart";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }
  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    this.setState({
      chartData: {
        labels: ["", "Javascript", "HTML", "CSS"],
        datasets: [
          {
            label: "Most used languages",
            data: [0, 8, 12, 15],
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
  render() {
    return (
      <div className="home">
        <div className="top-part">
          <Header as="h1" dividing>
            Projects
          </Header>
        </div>
        <Card.Group>
          <Card fluid raised color="red">
            <Card.Content>
              <Card.Header>Project 01</Card.Header>
              <Grid columns={2} stackable>
                <Grid.Column width={11}>
                  <Card.Meta>Jun2020-July2020</Card.Meta>
                  <Card.Description className="card-content">
                    Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                    Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                    Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                    Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                    Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                    <div className="icons">
                      <a href="https://github.com/Samridhi-98">
                        <Icon name="github" style={{ color: "black" }}></Icon>
                      </a>
                      <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
                        <Icon name="globe" style={{ color: "black" }}></Icon>
                      </a>
                    </div>
                  </Card.Description>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Chart
                    className="chart"
                    type='1'
                    chartData={this.state.chartData}
                    displayTitle={false}
                  />
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
        </Card.Group>
        {/* <Segment raised color="blue">
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Header>Project 01</Item.Header>
                <Item.Meta>Jun2020-July2020</Item.Meta>
                <Item.Description>
                  Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                  Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                  Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                  Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                  Loremipsum Loremipsum Loremipsum Loremipsum Loremipsum
                  <div className="icons">
                    <a href="https://github.com/Samridhi-98">
                      <Icon name="github" style={{ color: "black" }}></Icon>
                    </a>
                    <a href="https://www.linkedin.com/in/samridhi-agrawal-1713201ab/">
                      <Icon name="globe" style={{ color: "black" }}></Icon>
                    </a>
                  </div>

                </Item.Description>
              </Item.Content>
              <Chart
                className="chart"
                type='1'
                chartData={this.state.chartData}
                displayTitle={false}
              />
            </Item>
          </Item.Group>
        </Segment> */}

      </div>
    );
  }
}

export default Home;
