import React from "react";
import Image from "next/image";

const OldAlert = ({ x, y }: { x?: number; y?: number }) => {
	return (
		<div
			className={`flex bg-stone-300 text-red-500 w-96 p-4 absolute z-10`}
			style={{ top: y, left: x }}
		>
			<Image
				src="/retro-warning.jpg"
				alt="retro-warning"
				width={60}
				height={60}
			></Image>
			<div className="ml-6">
				<p>{"Oops... Something wen't wrong."}</p>
				<p>{"Please don't contact admin !"}</p>
			</div>
		</div>
	);
};

export default OldAlert;
