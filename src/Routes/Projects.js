import React, { useRef, useState } from "react";
import styled from "styled-components";
import { names } from "../Contains";
import Button from "../Components/Button";
import { Switch, Route } from "react-router-dom";
import First from "./Projects/ProjectFirst";
import Second from "./Projects/ProjectSecond";
import Third from "./Projects/ProjectThird";

const Wrapper = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Contain = styled.div`
	position: relative;
	min-width: 80%;
	height: 80%;
	display: flex;
	flex-direction: column;
`;

const TagContains = styled.ul`
	display: flex;

	.active {
		background: ${(props) => props.theme.pointBlue};
	}
`;
const TagLi = styled.li`
	position: relative;
	width: 95px;

	min-height: 70px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	white-space: break-spaces;
	margin-right: 1px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #2c2c2c;
	cursor: pointer;
	transition: all 0.45s linear;
`;

const Tag = styled.span`
	text-align: center;
`;

const ShowImage = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #2c2c2c;
`;

const ImageContain = styled.div`
	padding: 20px 10px;
	width: 100%;
	height: 100%;
`;

const ImageBack = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.src});
	background-size: auto 100%;
	background-position: center center;
	background-repeat: no-repeat;
`;

const ButtonContain = styled.div`
	position: absolute;
	bottom: 20px;
	right: 30px;
	display: flex;
	button {
		border: 1px solid black;
		border-radius: 10px;
		padding: 6px 16px;
	}
	span {
		font-size: 20px;
		color: ${(props) => props.theme.pointBlue};
		letter-spacing: 2px;
	}
	&:hover {
		button {
			background: white;
			transition: background 0.45s linear;
		}
	}
`;

export default () => {
	const tagRef = useRef();
	const [state, setState] = useState({ uri: "", id: 0, to: "" });

	const clickHandle = (t) => {
		setState((prev) => ({ ...prev, uri: t.src, id: t.id, to: t.to }));
	};

	return (
		<Wrapper>
			<Contain>
				<TagContains>
					{names.map((t) => (
						<TagLi
							key={t.id}
							className={state.id === t.id ? "active" : ""}
							onClick={() => clickHandle(t)}
						>
							<Tag>{t.name}</Tag>
						</TagLi>
					))}
				</TagContains>
				<ShowImage ref={tagRef}>
					<ImageContain>
						<ImageBack src={state.uri} />
					</ImageContain>
					<ButtonContain>
						<Button to={state.to} text="DETAIL" />
					</ButtonContain>
				</ShowImage>
			</Contain>
			<Switch>
				<Route path="/projects/newwaveboys" children={First} />
				<Route path="/projects/webclone" children={Second} />
				<Route path="/projects/appclone" children={Third} />
			</Switch>
		</Wrapper>
	);
};
