import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./layout/NavBar";
import ConnectedAbout from "./layout/about/about";
import ConnectedNews from "./layout/news/news";
import ConnectedMain  from "./layout/main/main";
import { store } from "./data/store";

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <NavBar />
        
        <Route path="/about" component={ConnectedAbout} />
        <Route path="/news" component={ConnectedNews} />
        <Route exact path="/" component={ConnectedMain} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
