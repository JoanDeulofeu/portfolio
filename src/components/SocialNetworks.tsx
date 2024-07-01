import Image from "next/image";

const SocialNetworks = () => {
	return (
		<div className="h-20 mt-4 flex justify-center gap-6">
			<Image
				src={`/social-networks/github.svg`}
				alt={"github logo"}
				width={0}
				height={0}
				className="w-6 h-auto cursor-pointer"
				onClick={() =>
					window.location.assign("https://github.com/JoanDeulofeu")
				}
			/>
			<Image
				src={`/social-networks/linkedin.svg`}
				alt={"linkedin logo"}
				width={0}
				height={0}
				className="w-6 h-auto cursor-pointer"
				onClick={() =>
					window.location.assign("https://www.linkedin.com/in/joan-gehin/")
				}
			/>
			<Image
				src={`/social-networks/instagram.svg`}
				alt={"instagram logo"}
				width={0}
				height={0}
				className="w-6 h-auto cursor-pointer"
				onClick={() =>
					window.location.assign("https://www.instagram.com/joankaiaetnoki/")
				}
			/>
		</div>
	);
};

export default SocialNetworks;
