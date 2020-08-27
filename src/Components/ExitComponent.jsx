import React from "react";
import styled from "styled-components";
import { Exit } from "./Icons";
import { withRouter } from "react-router-dom";

const ExitContain = styled.div`
	display: flex;
	margin: 10px;
	padding: 2px;
	width: 34px;
	height: 34px;
	float: right;
	cursor: pointer;
	&:hover {
		svg {
			fill: ${(props) => props.theme.pointBlue};
			transition: fill 0.4s linear;
		}
	}
`;

export default withRouter(({ history }) => {
	const backHandle = () => {
		history.goBack();
	};
	return (
		<ExitContain onClick={backHandle}>
			<Exit size={34} />
		</ExitContain>
	);
});
