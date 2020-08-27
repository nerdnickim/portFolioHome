import React from "react";
import styled, { css } from "styled-components";
import { Exit } from "../../Components/Icons";
import { withRouter } from "react-router-dom";
import Image from "../../Components/Image";
import { aboutMe } from "../../Contains";

const Wrapper = styled.div`
	width: 54%;
	height: 100%;
	position: absolute;
	top: 0;
	right: 40px;
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

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 20px 20px 0 20px;
	margin: 20px 0 0 0;
`;

const Left = styled.div`
	line-height: 1.3;
	width: 100%;
	letter-spacing: 1.6px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const Right = styled.div`
	width: 100%;
`;

const Title = styled.h1`
	font-size: 3rem;
	letter-spacing: 1.5px;
	color: ${(props) => props.theme.pointBlue};
`;

const Spann = styled.h1`
	font-size: 2rem;
`;

const Name = styled.h1`
	font-size: 2.5rem;
`;

const ClipContain = styled.div`
	
	display: flex;
	flex-direction: column;
	margin-top:40px;
	&:hover {
		transform: rotateY(180deg);
	}
	transform-style: preserve-3d;
	transition: z-index 0.75s, transform 0.75s;
	z-index: 0
	perspective: 1000px

	&.flip {
		z-index:1;
	}
`;

const CardSlide = css`
	width: 100%;
	min-width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	backface-visibility: hidden;
`;

const ClipInner = styled.div`
	position: relative;
`;

const ClipFront = styled.div`
	${CardSlide}
	z-index:0;
`;

const ClipBack = styled.div`
	${CardSlide}
	position:absolute;
	top: 0;
	left: 0;
	transform: rotateY(-180deg);
	transition: all 0.75s linear;
	z-index: 1;
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
				<Title>PROFILE</Title>
				<Container>
					<Left>
						<Name>KIM EUI KYO</Name>
						<Spann>1993.09.17</Spann>
						<Spann>Developer</Spann>
					</Left>
					<Right>
						<ClipContain>
							<ClipInner>
								<ClipFront>
									<Image src={aboutMe[0]} />
								</ClipFront>
								<ClipBack>
									<Image src={aboutMe[1]} />
								</ClipBack>
							</ClipInner>
						</ClipContain>
					</Right>
				</Container>
			</Contain>
		</Wrapper>
	);
});
