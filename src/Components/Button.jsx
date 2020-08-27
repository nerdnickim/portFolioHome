import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Btn = styled.button`
	color: white;
`;

export default ({ to, text }) => {
	const history = useHistory();
	const linkHandle = (e) => {
		e.persist();
		e.preventDefault();
		if (to === "") {
			alert("위에 있는 태그를 눌러주세요");
		} else {
			history.push(to);
		}
	};
	return (
		<Btn onClick={linkHandle}>
			<span>{text}</span>
		</Btn>
	);
};
