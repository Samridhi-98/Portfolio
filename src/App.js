import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Grid, Sticky } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

import Sidebar from "./components/Sidebar";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import WorkEx from "./components/routes/WorkEx";
import Education from "./components/routes/Education";


class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Grid stackable columns={2}>
                    <Grid.Column computer={6}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column computer={10}>
                        <BrowserRouter>
                            <div>
                                <Route path="/" exact component={Home}></Route>
                            </div>
                            <div>
                                <Route path="/about" exact component={About}></Route>
                            </div>
                            <div>
                                <Route path="/work-experience" exact component={WorkEx}></Route>
                            </div>
                            <div>
                                <Route path="/education" exact component={Education}></Route>
                            </div>
                        </BrowserRouter>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default App;