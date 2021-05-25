import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
//Custom Routes
import Home from "./routes/Home";
import Education from "./routes/Education";
import Workx from "./routes/Workx";
import About from "./routes/About";
import Contribution from "./routes/Contribution";
// React sidebar
import Sidebar from "react-sidebar";
import SidebarContent from "./routes/SidebarContent";
// Sidebar styles
import { styles } from "./sidebar-styling/styles";
// styled-components
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./dark-mode/Theme";


const themes = {
  dark: DarkTheme,
  light: LightTheme,
};

const mql = window.matchMedia(`(min-width: 991px)`);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
      theme: "light",

    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    //KEY MAGICS
    this.disableF12Function = this.disableF12Function.bind(this);
    this.disableRightClickFunction = this.disableRightClickFunction.bind(this);
  }

  //!---- Disable Dev Console and Right Click
  disableF12Function(event) {
    if (event.keyCode === 123 || event.keyCode === 73) {
      event.preventDefault();
    }
  }
  disableRightClickFunction(event) {
    // console.log("clicked");
    event.preventDefault();
  }
  componentDidMount() {
    mql.addListener(this.mediaQueryChanged);
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? this.setState({ theme: localTheme }) : this.setMode("light");
    //blocking developer console.
    document.addEventListener("keydown", this.disableF12Function, false);
    //disabling right click
    document.addEventListener("contextmenu", this.disableRightClickFunction, false);
  }
  setMode = (localTheme) => {
    window.localStorage.setItem("theme", localTheme);
    this.setState({ theme: localTheme });
  };
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
    // removing event listener
    document.removeEventListener("keydown", this.disableF12Function, false);
    document.removeEventListener("contextmenu", this.disableRightClickFunction, false);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
  handleChange = (currTheme) => {
    this.setMode(currTheme);
    //console.log("the state is : ", this.state.theme);
  };
  render() {

    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        {/* {console.log("themeproviders: ", themes[this.state.theme])} */}

        {/* //!OR USE: <Router basename={process.env.PUBLIC_URL}> to host it on github pages with browserrouter */}
        <Router>

          <Sidebar
            sidebar={<SidebarContent />}
            styles={styles}
            open={this.state.sidebarOpen}
            docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}
          >
            <Route
              path="/"
              exact
              component={() => (
                <Home
                  theme={themes[this.state.theme]}
                  handleChange={this.handleChange}
                />
              )}
            />
            <Route
              path="/education"
              exact
              component={() => (
                <Education
                  theme={themes[this.state.theme]}
                  handleChange={this.handleChange}
                />
              )}
            />
            <Route
              path="/work-experience"
              exact
              component={() => (
                <Workx
                  theme={themes[this.state.theme]}
                  handleChange={this.handleChange}
                />
              )}
            />
            <Route
              path="/about"
              exact
              component={() => (
                <About
                  theme={themes[this.state.theme]}
                  handleChange={this.handleChange}
                />
              )}
            />
            <Route
              path="/contribution"
              exact
              component={() => (
                <Contribution
                  theme={themes[this.state.theme]}
                  handleChange={this.handleChange}
                />
              )}
            />
          </Sidebar>
        </Router>

      </ThemeProvider>
    );
  }
}
export default App;
