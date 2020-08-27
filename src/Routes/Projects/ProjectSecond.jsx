import React from "react";
import Project from "../../Components/Project";
import { photos, textS, explan, address, pageAddress } from "../../Contains";

const Second = () => (
	<Project
		data={photos.instaWeb}
		textS={textS.instaWeb}
		explan={explan.instaWeb}
		address={address.instaWeb}
		pageAddress={pageAddress.instaWeb}
		serverGit={address.prismaServer}
	/>
);

export default Second;
