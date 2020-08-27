import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "../Routes/Home";
import About from "../Routes/About";
import Projects from "../Routes/Projects";

export const Routes = withRouter(({ location }) => {
	return (
		<Switch location={location}>
			<Route path={"/"} component={Home} exact />
			<Route path={"/about"} component={About} />
			<Route path={"/projects"} component={Projects} />
		</Switch>
	);
});
