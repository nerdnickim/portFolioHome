import React from "react";
import styled from "styled-components";
import { mainImage } from "../Contains";
import Image from "../Components/Image";

const Wrapper = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	align-items: center;
`;

const FontContains = styled.div`
	position: absolute;
	left: -120px;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

const Dummy = styled.div`
	width: 100%;
`;

const ImageSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin-right: 80px;
`;

const ImageContain = styled.div`
	width: 100%;
`;

const Ul = styled.ul`
	text-transform: uppercase;
	text-align: right;
	font-size: 4.5rem;
`;

const Li = styled.li`
	position: relative;
	font-size: 3.2rem;
	color: #323030;
	text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
		1px 1px 0 #ffffff;
`;

const Span = styled.span``;

export default () => {
	return (
		<Wrapper>
			<FontContains>
				<Ul>
					<Li>
						<Span>I'M NERDNICK</Span>
					</Li>
					<Li>
						<Span>javascript</Span>
					</Li>
					<Li>
						<Span>developer</Span>
					</Li>
					<Li>
						<Span>everyday</Span>
					</Li>
					<Li>
						<Span>coding</Span>
					</Li>
					<Li>
						<Span>react</Span>
					</Li>
					<Li>
						<Span>typescript</Span>
					</Li>
				</Ul>
			</FontContains>
			<Dummy></Dummy>
			<ImageSection>
				<ImageContain>
					<Image src={mainImage} />
				</ImageContain>
			</ImageSection>
		</Wrapper>
	);
};
