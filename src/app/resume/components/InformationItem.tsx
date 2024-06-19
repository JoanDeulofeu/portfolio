import { Player } from "@lordicon/react";
import { RefObject } from "react";
import { useEffect, useRef } from "react";

const InformationItem = ({
	icon,
	title,
	content,
	size = 25,
}: {
	icon: string;
	title: string;
	content: string;
	size?: number;
}) => {
	const playerRef = useRef<Player>(null);
	return (
		<div
			onMouseEnter={() => playerRef.current?.playFromBeginning()}
			className="flex flex-row items-center font-second m-1 mt-8 gap-2"
		>
			<div className="flex h-fit items-center p-3 rounded-lg bg-zinc-700 ">
				<Player ref={playerRef} icon={icon} size={size} />
			</div>
			<div className="flex flex-col">
				<p>{title}</p>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default InformationItem;
