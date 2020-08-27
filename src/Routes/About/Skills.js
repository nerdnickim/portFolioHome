import React from "react";
import styled from "styled-components";
import { Exit } from "../../Components/Icons";
import { withRouter } from "react-router-dom";
import { textS } from "../../Contains";
import FatText from "../../Components/FatTest";
import Image from "../../Components/Image";

const Wrapper = styled.div`
	width: 50%;
	height: 100%;
	position: absolute;
	top: 0;
	right: 20px;
	background-color: #323030;
	z-index: 30;
`;

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

const Contain = styled.div`
	margin-top: 54px;
	margin-left: 20px;
	padding: 0 20px 0 20px;
	width: 100%;
`;

const FatContain = styled.ul`
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-row-gap: 16px;
`;

const FatList = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	span {
		opacity: 0;
		transition: opacity 0.45s linear;
	}
	&:hover {
		span {
			opacity: 1;
		}
	}
`;

const FatIcon = styled.div`
	display: flex;
	width: 96px;
`;

export default withRouter(({ history }) => {
	const backHandle = () => {
		history.goBack();
	};

	return (
		<Wrapper>
			<ExitContain onClick={backHandle}>
				<Exit size={34} />
			</ExitContain>
			<Contain>
				<FatContain>
					{textS.skills.map((s) => (
						<FatList key={s.id}>
							<FatIcon>
								<Image src={s.src} />
							</FatIcon>
							<FatText text={s.text} />
						</FatList>
					))}
				</FatContain>
			</Contain>
		</Wrapper>
	);
});
