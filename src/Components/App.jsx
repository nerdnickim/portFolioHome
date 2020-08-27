import React from "react";
import { HashRouter as Router } from "react-router-dom";
import GlobalStyle from "../Styles/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";

import Menu from "./Menu";
import { Routes } from "./Routes";

const Wrapper = styled.div`
	padding-left: 80px;
	height: 100vh;
`;

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<Router>
				<Menu />
				<Wrapper>
					<Routes />
				</Wrapper>
			</Router>
		</ThemeProvider>
	);
}

export default App;
