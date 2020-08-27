import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { PlayBtn, PauseBtn } from "../Components/Icons";
import { Switch, Route, Link } from "react-router-dom";
import Profile from "./About/Profile";
import Skills from "./About/Skills";
import Favorite from "./About/Favorite";

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
	background-color: #2c2c2c;
	border-radius: 20px;
	display: flex;
	align-items: center;
	padding: 10px 20px;

	.active {
		animation: ${spin} 8s linear infinite;
	}

	.first {
		top: 10px;
		left: 10px;
	}

	.second {
		top: 10px;
		right: 10px;
	}

	.third {
		bottom: 10px;
		left: 10px;
	}

	.fourth {
		bottom: 10px;
		right: 10px;
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
	background-color: black;
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
	}
	&:nth-child(2) {
		transform: rotate(120deg) skewY(30deg);
	}
	&:nth-child(3) {
		transform: rotate(240deg) skewY(30deg);
	}
`;

const PointCirlce = styled.div`
	position: absolute;
	max-width: 80px;
	width: 100%;
	max-height: 80px;
	height: 100%;
	border: 3px solid #c8c0c0;
	border-radius: 50%;
	background-color: black;
`;

const PointRound = styled.div`
	position: absolute;
	max-width: 200px;
	width: 100%;
	max-height: 200px;
	height: 100%;
	border: 1px solid #c8c0c0;
	border-radius: 50%;
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
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CircleRound = styled.div`
	position: relative;
	max-width: 80px;
	width: 100%;
	max-height: 80px;
	height: 100%;
	border: 3px solid #c8c0c0;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
`;

const CircleRoundIn = styled.div`
	position: relative;
	max-width: 30px;
	width: 100%;
	max-height: 30px;
	height: 100%;
	border: 1px solid #c8c0c0;
	border-radius: 50%;
	display: flex;
	background-color: #2c2c2c;
	z-index: 11;
	justify-content: center;
	align-items: center;
`;

const StickPoint = styled.div`
	position: absolute;
	max-width: 15px;
	width: 100%;
	max-height: 15px;
	height: 100%;
	border: 1px solid #c8c0c0;
	border-radius: 50%;
	background-color: black;
`;

const Stick = styled.div`
	position: absolute;
	top: 10px;

	width: 10px;
	height: 390px;
	background: black;
	transform-origin: top;
	display: flex;
	justify-content: center;
	border: 2px solid white;

	transition: transform 1.45s cubic-bezier(0.51, 0, 0.46, 1);
`;

const Rectangle = styled.div`
	position: absolute;
	top: 360px;
	width: 20px;
	height: 50px;
	background: black;
	border-radius: 6px;
	border: 3px solid white;
`;

const Span = styled.span`
	margin-left: 50px;

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

const LinkS = styled(Link)`
	transform: skewY(-30deg) rotate(180deg);
`;

export default () => {
	const [state, setState] = useState(false);
	const lpRef = useRef(null);
	const stickRef = useRef(null);

	const playHandle = (e) => {
		e.persist();
		e.preventDefault();
		setState((p) => !p);
		if (state === false) {
			lpRef.current.style.animationPlayState = "paused";
		} else {
			lpRef.current.style.animationPlayState = "running";
		}
	};

	const pausedHandle = (e) => {
		e.persist();
		e.preventDefault();
		if (state === false) {
			lpRef.current.style.animationPlayState = "paused";
			setState((p) => !p);
		}
	};

	const runningHandle = (e) => {
		e.persist();
		e.preventDefault();
		if (state === true) {
			lpRef.current.style.animationPlayState = "running";
			setState((p) => !p);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			if (stickRef.current === null) {
				return;
			} else {
				stickRef.current.style.transform = `rotate(30deg)`;
				setTimeout(() => {
					if (lpRef.current === null) {
						return;
					} else {
						lpRef.current.classList.add("active");
					}
				}, 1900);
			}
		}, 450);
	});

	return (
		<Wrapper>
			<Record>
				<LP ref={lpRef} onMouseOut={runningHandle}>
					<LPPart>
						<LinkS to="/about/profile" onMouseOver={pausedHandle}>
							<Span>profile</Span>
						</LinkS>
					</LPPart>
					<LPPart>
						<LinkS to="/about/skills" onMouseOver={pausedHandle}>
							<Span>skills</Span>
						</LinkS>
					</LPPart>
					<LPPart>
						<LinkS to="/about/favorite" onMouseOver={pausedHandle}>
							<Span>Favorite</Span>
						</LinkS>
					</LPPart>
					<PointCirlce />
					<PointRound />
				</LP>
				<Circle>
					<CircleRound>
						<CircleRoundIn>
							<Stick ref={stickRef}>
								<Rectangle />
							</Stick>
							<StickPoint />
						</CircleRoundIn>
					</CircleRound>
				</Circle>
				<BtnContains>
					<Button onClick={playHandle}>
						{state ? <PauseBtn size={48} /> : <PlayBtn size={48} />}
					</Button>
				</BtnContains>
				<StickPoint className="first" />
				<StickPoint className="second" />
				<StickPoint className="third" />
				<StickPoint className="fourth" />
			</Record>
			<Switch>
				<Route path="/about/favorite" children={Favorite} />
				<Route path="/about/profile" children={Profile} />
				<Route path="/about/skills" children={Skills} />
			</Switch>
		</Wrapper>
	);
};
