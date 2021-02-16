import React from "react";

import { Route, BrowserRouter as Router } from 'react-router-dom'
// CUSTOM ROUTE
import Home from "./routes/Home";
import Education from "./routes/Education";
import WorkEx from "./routes/Workx";
import About from "./routes/About";
//REACT SIDEBAR
import Sidebar from "react-sidebar";
import SidebarContent from "./routes/SidebarContent";

// IMAGE
// import sidebarbg from "../images/sidebarbg.jpg";

import { styles } from "./sidebar-style/style"

const mql = window.matchMedia(`(min-width: 800px)`);
// let styles = {
//   root: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     overflow: "hidden"
//   },
//   sidebar: {
//     width: 500,
//     height: "100%",
//     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.6)),url(${sidebarbg})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
//   content: {
//     padding: "16px",
//     height: "100%",
//     backgroundColor: "white"
//   },
//   overlay: {
//     zIndex: 1,
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     opacity: 0,
//     visibility: "hidden",
//     transition: "opacity .3s ease-out, visibility .3s ease-out",
//     backgroundColor: "rgba(0,0,0,.3)"
//   },
//   dragHandle: {
//     zIndex: 1,
//     position: "fixed",
//     top: 0,
//     bottom: 0
//   }
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
    };
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.setTheme = this.setTheme.bind(this);
  }
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  setTheme(themeName) {
    document.getElementById("body").className = themeName;
    localStorage.setItem("theme", themeName);
    console.log("Theme set to: ", localStorage.getItem("theme"))
  }

  render() {
    return (
      <div>
        <>
          <Router >
            <Sidebar
              sidebar={
                <SidebarContent />
              }
              styles={styles}
              open={this.state.sidebarOpen}
              docked={this.state.sidebarDocked}
              onSetOpen={this.onSetSidebarOpen}
            >
              {this.setTheme("charcoal")}
              <Route path="/" exact component={Home} />
              <Route path="/education" exact component={Education} />
              <Route path="/work-experience" exact component={WorkEx} />
              <Route path="/about" exact component={About} />

            </Sidebar>
          </Router>
        </>
      </div>
    );
  }
}
export default App;