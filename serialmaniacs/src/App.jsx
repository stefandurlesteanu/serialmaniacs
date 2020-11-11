import React from "react";

import "./App.css";
import { SerialProvider } from "./SerialContext";
import ListedShows from "./components/ListedShows";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { ShowPage } from "./components/ShowPage";
import Footer from "./components/layout/footer";
import { default as Nav } from "./components/layout/navBar";
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FrontPage from './components/pages/FrontPage'
import NewGenres from './components/NewGenres'


function App() {
	return (
		<SerialProvider>
			<div className="App">
				<Router>
					<div className="contentWrap">
						<Nav />
						<Route exact path="/">
							<FrontPage />
						</Route>
						<Route path="/shows">
							<ListedShows />
						</Route>
						<Route path="/show/:id" component={ShowPage} />
						<Route exact path="/genres">
							<Redirect to="/genres/0" />
						</Route>
						<Route path="/genres/:id" component={NewGenres} />
						<footer id="footerLink">
							<Footer />
						</footer>
					</div>
				</Router>
			</div>
		</SerialProvider >
	);
}

export default App;
