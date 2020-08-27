import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import { Home, About, Projects } from "./Icons";

const Wrapper = styled.div`
	width: 80px;
	height: 100%;
	background-color: #181818;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
	.active {
		background-color: black;
		box-shadow: -14px 10px 10px black;
	}
	box-shadow: inset -10px 0px 10px black;
`;

const Nav = styled.nav`
	position: relative;
	width: 100%;
	height: 60%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.active {
		fill: ${(props) => props.theme.pointBlue};
	}
	.off {
		fill: white;
	}
`;

const LinkA = styled(Link)`
	position:relative;
	width:100%;
	height:100%;
    margin-bottom: 10px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-transform: uppercase;
	color:${(props) => props.theme.pointBlue};
	&:hover {
		fill: ${(props) => props.theme.pointBlue};
		svg {
            transition: all 0.4s ease-out;
			opacity: 0;
         }
         :after {
            content: "${(props) => props.label}";
            position:absolute;
        }
	}
	transition: all 0.4s ease-out;
	
`;

export default () => {
	const LinkHandle = ({ to, label, activeExact }) => {
		let match = useRouteMatch({
			path: to,
			exact: activeExact,
		});
		return (
			<LinkA
				to={{
					pathname: to,
				}}
				className={match ? "active" : "off"}
				label={label}
			>
				{label === "Home" ? <Home size={32} color={"white"} /> : null}
				{label === "About" ? <About size={32} color={"white"} /> : null}
				{label === "Projects" ? <Projects size={32} color={"white"} /> : null}
			</LinkA>
		);
	};

	return (
		<Wrapper>
			<Nav>
				<LinkHandle to={"/"} label={"Home"} activeExact={true} />
				<LinkHandle to={"/about"} label={"About"} />
				<LinkHandle to={"/projects"} label={"Projects"} />
			</Nav>
		</Wrapper>
	);
};
