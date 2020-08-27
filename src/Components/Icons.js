import React from "react";

export const Home = ({ size }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		fillRule="evenodd"
		clipRule="evenodd"
	>
		<path d="M22 11.414v12.586h-20v-12.586l-1.293 1.293-.707-.707 12-12 12 12-.707.707-1.293-1.293zm-6 11.586h5v-12.586l-9-9-9 9v12.586h5v-9h8v9zm-1-7.889h-6v7.778h6v-7.778z" />
	</svg>
);

export const About = ({ size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
		<path d="M12 2c3.032 0 5.5 2.467 5.5 5.5 0 1.458-.483 3.196-3.248 5.59 4.111 1.961 6.602 5.253 7.482 8.909h-19.486c.955-4.188 4.005-7.399 7.519-8.889-1.601-1.287-3.267-3.323-3.267-5.61 0-3.033 2.468-5.5 5.5-5.5zm0-2c-4.142 0-7.5 3.357-7.5 7.5 0 2.012.797 3.834 2.086 5.182-5.03 3.009-6.586 8.501-6.586 11.318h24c0-2.791-1.657-8.28-6.59-11.314 1.292-1.348 2.09-3.172 2.09-5.186 0-4.143-3.358-7.5-7.5-7.5z" />
	</svg>
);

export const Projects = ({ size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
		<path d="M6 22v-16h16v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-10.386h-20v20h10.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-5v-1h5v1zm5-4h-10v1h10v-1zm0-3h-10v1h10v-1zm2-7h-19v19h-2v-21h21v2z" />
	</svg>
);

export const PlayBtn = ({ size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
		<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
	</svg>
);

export const PauseBtn = ({ size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
		<path d="M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z" />
	</svg>
);

export const ForwardBtn = ({ size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
		<path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" />
	</svg>
);

export const Exit = ({ size }) => (
	<svg
		width={size}
		height={size}
		xmlns="http://www.w3.org/2000/svg"
		fillRule="evenodd"
		clipRule="evenodd"
	>
		<path d="M11 21h8v-2l1-1v4h-9v2l-10-3v-18l10-3v2h9v5l-1-1v-3h-8v18zm10.053-9l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z" />
	</svg>
);

export const Arrow = ({ size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
		<path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
	</svg>
);

export const Github = ({ size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
		<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
	</svg>
);

export const Check = ({ size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
		<path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />
	</svg>
);
