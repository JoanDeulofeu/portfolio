import { Player } from "@lordicon/react";
import { useRef } from "react";
import BadgeContainer from "@/components/BadgeContainer";

const InformationItem = ({
	icon,
	title,
	content,
	size = 25,
}: {
	icon: string;
	title: string;
	content?: string;
	size?: number;
}) => {
	const playerRef = useRef<Player>(null);
	return (
		<div
			onMouseEnter={() => playerRef.current?.playFromBeginning()}
			className="flex flex-row items-center font-second m-1 mt-8 gap-2"
		>
			<BadgeContainer>
				<Player ref={playerRef} icon={icon} size={size} />
			</BadgeContainer>
			<div className="flex flex-col">
				<p className={`${!content && "font-primary text-xl font-semibold"}`}>
					{title}
				</p>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default InformationItem;
