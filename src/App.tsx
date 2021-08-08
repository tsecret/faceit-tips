import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Player, Match } from './pages';
import './App.scss';

import config from './config';
axios.defaults.baseURL = window.location.hostname === "faceit.tips"? config.SERVER_URL : config.SERVER_LOCAL_URL

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/match/:id" component={Match} />
				<Route exact path="/player/:id" component={Player} />
			</Switch>
		</Router>
	);
	}

export default App;
