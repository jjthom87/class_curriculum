import React from "react";
import { Route } from "react-router";

import Home from "./components/Home";
import LyricsPage from './components/LyricsPage';

export default (
  	<Route>
    	<Route path="/" component={Home} />
    	<Route path="/lyrics/:artist/:title" component={LyricsPage} />
    </Route>
);