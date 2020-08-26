import React from "react";
import styled from "styled-components";
import { Exit } from "../../Components/Icons";
import { withRouter } from "react-router-dom";
import Image from "../../Components/Image";
import { aboutMe } from "../../Contains";

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
`;

const Container = styled.div`
	display: flex;
	flex-direction: cloumn;
`;

const Left = styled.div`
	padding: 20px 0 0 20px;
	margin: 20px 0 0 0;
	line-height: 1.3;
`;

const Right = styled.div``;

const Title = styled.h1`
	font-size: 3rem;
	letter-spacing: 1.5px;
`;

const Spann = styled.h1`
	font-size: 2rem;
`;

const Name = styled.h1`
	font-size: 2.5rem;
`;

const Span = styled.span``;

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
				<Title>PROFILE</Title>
				<Container>
					<Left>
						<Name>KIM EUI KYO</Name>
						<Spann>DEVELOPER</Spann>
						<Spann>Favorite</Spann>
					</Left>
					<Right>
						<Image src={aboutMe[0]} />
					</Right>
				</Container>
			</Contain>
		</Wrapper>
	);
});
