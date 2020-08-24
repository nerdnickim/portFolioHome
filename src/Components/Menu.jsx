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
`;

const Nav = styled.nav`
	position: relative;
	height: 26%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.active {
		fill: ${(props) => props.theme.pointBlue};
	}
`;

const LinkA = styled(Link)`
    position:relative;
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
			<LinkA to={to} className={match ? "active" : ""} label={label}>
				{label === "home" ? <Home size={32} /> : null}
				{label === "about" ? <About size={32} /> : null}
				{label === "projects" ? <Projects size={32} /> : null}
			</LinkA>
		);
	};

	return (
		<Wrapper>
			<Nav>
				<LinkHandle to={"/"} label={"home"} activeExact={true} />
				<LinkHandle to={"/about"} label={"about"} />
				<LinkHandle to={"/projects"} label={"projects"} />
			</Nav>
		</Wrapper>
	);
};
