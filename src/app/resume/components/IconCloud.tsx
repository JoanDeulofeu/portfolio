"use client";

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

import { useEffect, useMemo, useState } from "react";
import {
	Cloud,
	fetchSimpleIcons,
	ICloud,
	renderSimpleIcon,
	SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
	containerProps: {
		style: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			paddingTop: 40,
		},
	},
	options: {
		reverse: true,
		depth: 1,
		wheelZoom: false,
		imageScale: 2,
		activeCursor: "default",
		tooltip: "native",
		initial: [0.1, -0.1],
		clickToFront: 500,
		tooltipDelay: 0,
		outlineColour: "#0000",
		maxSpeed: 0.04,
		minSpeed: 0.02,
		// dragControl: false,
	},
};

const iconSlugs = [
	"amazonaws",
	"css3",
	"express",
	"figma",
	"git",
	"github",
	"googlecloud",
	"graphql",
	"html5",
	"javascript",
	"jest",
	"mongodb",
	"mongoosedotws",
	"nestjs",
	"nextdotjs",
	"nodedotjs",
	"postgresql",
	"prisma",
	"react",
	"reactrouter",
	"reactquery",
	"redux",
	"swagger",
	"trello",
	"tailwindcss",
	"typescript",
	"visualstudiocode",
];

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
	const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
	const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
	const minContrastRatio = theme === "dark" ? 2 : 1.2;

	return renderSimpleIcon({
		icon,
		bgHex,
		fallbackHex,
		minContrastRatio,
		size: 36,
		aProps: {
			href: undefined,
			target: undefined,
			rel: undefined,
			onClick: (e: any) => e.preventDefault(),
		},
	});
};

const IconCloud = () => {
	const [data, setData] = useState<IconData | null>(null);

	useEffect(() => {
		fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
	}, []);

	const renderedIcons = useMemo(() => {
		if (!data) return null;

		return Object.values(data.simpleIcons).map((icon) =>
			renderCustomIcon(icon, "dark")
		);
	}, [data]);

	return (
		<div className="px-20 lg:hidden">
			{
				// @ts-ignore
				<Cloud {...cloudProps}>
					<>{renderedIcons}</>
				</Cloud>
			}
		</div>
	);
};

export default IconCloud;
