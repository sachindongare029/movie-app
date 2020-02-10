import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import MovieList from './components/MovieList';
import Explore from './components/Explore';

const Routes = () => (
  <Router>
    <Header />
    <main className="main">
      <Route exact path={"/"} component={MovieList} />
      <Route exact path={"/Explore"} component={Explore} />
    </main>
  </Router>
);

export default Routes;