import React, { Component } from "react";
import "./App.css";
import SampleComponent from "./components/SampleComponent";
import { Provider as ReduxProvider } from "react-redux";
import  {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import configureStore from "./modules/store";
import Home from "./components/Home";
import ProjectCodeName from "./components/ProjectCodeName";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
    <Link to ="/" >Home</Link> <br></br>
    <Link to="/ProjectCodeName">Click me to see some projects code names</Link>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/ProjectCodeName" component={ProjectCodeName}/>
    </Switch>
  </Router>
);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          {routing}
        </div>
      </ReduxProvider>
    );
  }
}

export default App;