import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "../Routes/Home";
import About from "../Routes/About";
import Projects from "../Routes/Projects";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const routesAry = ["/", "/about", "/projects"];

export const Routes = withRouter(({ location }) => {
	const currentScreen = routesAry.indexOf(location.pathname);
	const { state } = location;
	const previousScreen = state ? state.previousScreen : 0;
	const classNames = currentScreen > previousScreen ? "slide-forward" : "slide-backward";

	return (
		<TransitionGroup
			childFactory={(child) => React.cloneElement(child, { classNames })}
			style={{ height: `100vh` }}
		>
			<CSSTransition key={location.key} timeout={3000} classNames={classNames}>
				<Switch location={location}>
					<Route path={"/"} component={Home} exact />
					<Route path={"/about"} component={About} />
					<Route path={"/projects"} component={Projects} />
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	);
});
