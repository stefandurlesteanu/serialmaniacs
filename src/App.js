import React from "react";
import "./App.css";
import { SerialProvider } from "./SerialContext";
import ListedShows from "./components/ListedShows";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import { ShowPage } from "./components/ShowPage";
import Footer from "./components/layout/footer";
import { default as Nav } from "./components/layout/navBar";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <SerialProvider>
      <div className="App">
        <Router>
          <div className="contentWrap">
            <Nav />
            <Route exact path="/">
              <Home/>
          
            </Route>
            <Route path="/shows">
              <ListedShows />
            </Route>
            <Route path="/show/:id" component={ShowPage} />
            <Footer />
          </div>
        </Router>
      </div>
    </SerialProvider>
  );
}

export default App;
