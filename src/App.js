import React from "react";
import "./App.css";
import { SerialProvider } from "./SerialContext";
import ListedShows from "./components/ListedShows";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <Router>
      <SerialProvider>
        <div className="App">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shows">
            <ListedShows />
          </Route>
        </div>
      </SerialProvider>
    </Router>
  );
}

export default App;
