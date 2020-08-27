import React from "react";
import ProjectApp from "../../Components/ProjectApp";
import { photos, textS, explan, address } from "../../Contains";

const Third = () => (
	<ProjectApp
		data={photos.instaApp}
		textS={textS.instaApp}
		explan={explan.instaApp}
		address={address.instaApp}
		serverGit={address.prismaServer}
	/>
);

export default Third;
