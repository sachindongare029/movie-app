import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import MovieList from './components/Home/MovieList';
import Explore from './components/Explore/Explore';
import MovieInfo from './components/Home/MovieInfo';

const Routes = () => (
  <Router>
    <Header />
    <main className="main">
      <Route exact path={"/"} component={MovieList} />
      <Route exact path={"/Explore"} component={Explore} />
      <Route exact path={"/movie/:id"} children={<MovieInfo />} />
    </main>
  </Router>
);

export default Routes;