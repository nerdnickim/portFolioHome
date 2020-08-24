import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "../Routes/Home";
import About from "../Routes/About";
import Projects from "../Routes/Projects";

export default withRouter(({ location, match }) => {
	return (
		<Switch location={location}>
			<Route path="/" exact component={Home} />
			<Route path="/about" exact component={About} />
			<Route path="/projects" exact component={Projects} />
		</Switch>
	);
});
