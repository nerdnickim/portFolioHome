import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { PlayBtn, ForwardBtn, PauseBtn } from "../Components/Icons";
import { Switch, Route, Link } from "react-router-dom";
import Profile from "./About/Profile";
import Skills from "./About/Skills";
import Oneday from "./About/Oneday";

const spin = keyframes`
	100%{
		transform: rotate(360deg);
	}
`;

const Wrapper = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Record = styled.div`
	position: relative;
	min-width: 65%;
	height: 80%;
	border: 1px solid #c8c0c0;
	border-radius: 20px;
	display: flex;
	align-items: center;
	padding: 10px 20px;

	.active {
		animation: ${spin} 8s linear infinite;
	}
`;

const LP = styled.ul`
	position: relative;
	max-width: 560px;
	width: 100%;
	max-height: 560px;
	height: 100%;
	border: 2px solid #c8c0c0;
	border-radius: 50%;
	margin-left: 70px;
	margin-bottom: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #323030;
	overflow: hidden;
	box-shadow: 9px 9px 18px 8px black;
	text-transform: uppercase;
	z-index: 1;
	&:before {
		content: "";
		max-width: 530px;
		width: 100%;
		max-height: 530px;
		height: 100%;
		border: 6px solid #c8c0c0;
		border-radius: 100%;
	}

	&:after {
		position: absolute;
		content: "";
		max-width: 5px;
		width: 100%;
		max-height: 5px;
		height: 100%;
		border: 6px solid #c8c0c0;
		border-radius: 50%;
		background-color: #c8c0c0;
	}
`;

const LPPart = styled.li`
	overflow: hidden;
	position: absolute;
	top: -20%;
	right: -20%;
	width: 70%;
	height: 70%;
	display: flex;
	align-items: center;
	justify-content: center;
	transform-origin: 0% 100%;
	&:first-child {
		transform: rotate(0deg) skewY(30deg);
		background: #4a4646;
		box-shadow: inset -3px -6px 10px 0px black;
	}
	&:nth-child(2) {
		transform: rotate(120deg) skewY(30deg);
		background: #918989;
		box-shadow: inset -3px -6px 10px 0px black;
	}
	&:nth-child(3) {
		transform: rotate(240deg) skewY(30deg);
		background: #736c6c;
		box-shadow: inset -3px -6px 10px 0px black;
	}
`;

const PointCirlce = styled.div`
	position: absolute;
	max-width: 80px;
	width: 100%;
	max-height: 80px;
	height: 100%;
	border: 1px solid #c8c0c0;
	border-radius: 50%;
	background-color: #323030;
`;

const Circle = styled.div`
	position: absolute;
	top: 30px;
	right: 70px;
	max-width: 230px;
	width: 100%;
	max-height: 230px;
	height: 100%;
	border: 1px solid #c8c0c0;
	border-radius: 50%;
`;

const Span = styled.span`
	margin-right: 40px;
	transform: skewY(-30deg) rotate(150deg);
	letter-spacing: 2px;
	font-size: 2rem;
`;

const BtnContains = styled.div`
	position: absolute;
	bottom: 30px;
	left: 30px;
	display: flex;
`;

const Button = styled.button`
	&:hover {
		svg {
			fill: ${(props) => props.theme.pointBlue};
			transition: fill 0.4s linear;
		}
	}
`;

export default () => {
	const [state, setState] = useState(false);
	const lpRef = useRef(null);

	const playHandle = (e) => {
		e.persist();
		e.preventDefault();
		console.dir(lpRef.current);
	};

	return (
		<Wrapper>
			<Record>
				<LP className={state === false ? "active" : ""} ref={lpRef}>
					<LPPart>
						<Link to="/about/profile">
							<Span>profile</Span>
						</Link>
					</LPPart>
					<LPPart>
						<Link to="/about/skills">
							<Span>skills</Span>
						</Link>
					</LPPart>
					<LPPart>
						<Link to="/about/oneday">
							<Span>one day</Span>
						</Link>
					</LPPart>
					<PointCirlce />
				</LP>
				<Circle></Circle>
				<BtnContains>
					<Button onClick={playHandle}>
						{state ? <PauseBtn size={36} /> : <PlayBtn size={36} />}
					</Button>
					<Button>
						<ForwardBtn size={36} />
					</Button>
				</BtnContains>
			</Record>
			<Switch>
				<Route path="/about/oneday" children={Oneday} />
				<Route path="/about/profile" children={Profile} />
				<Route path="/about/skills" children={Skills} />
			</Switch>
		</Wrapper>
	);
};
