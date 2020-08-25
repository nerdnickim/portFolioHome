import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	position: relative;
	height: 100%;
	display: flex;
`;

const FontContains = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
`;

const Dummy = styled.div`
	width: 100%;
`;

const ImageSection = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const Ul = styled.ul`
	text-transform: uppercase;
	text-align: right;
	font-size: 4.5rem;
`;

const Li = styled.li`
	position: relative;
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
						<Span>aboutme</Span>
					</Li>
					<Li>
						<Span>projects</Span>
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
			<ImageSection />
		</Wrapper>
	);
};
