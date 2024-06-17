"use client";

/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";

import OldAlert from "../components/OldAlert";
import OldButton from "../components/OldButton";

interface Alert {
	x: number;
	y: number;
}

export default function Home() {
	const router = useRouter();

	const [alerts, setAlerts] = useState<Alert[]>([]);

	const displayAlert = () => {
		const screenWidth = window.innerWidth;
		const screenHeight = window.innerHeight;
		// 384 = alert width and 92 = alert height
		// We are sure that the alert will be displayed in the screen
		const x = Math.floor(Math.random() * (screenWidth - 384));
		const y = Math.floor(Math.random() * (screenHeight - 92));

		if (alerts.length < 40) {
			setAlerts((oldAlerts) => [...oldAlerts, { x, y }]);
			setTimeout(() => {
				setAlerts((OldAlerts) => OldAlerts.filter((_, i) => i !== 0));
			}, 5000);
		}
	};

	return (
		<main
			className={`font-VT323 bg-[#f2f29d] flex min-h-screen flex-col items-center `}
		>
			{alerts.map((a, i) => (
				<OldAlert key={i} x={a.x} y={a.y} />
			))}
			<div
				className={`underline text-blue-600 flex items-center justify-end gap-6 pr-6 min-h-20 w-full border-b-2 mb-12 border-black `}
			>
				<div
					onClick={displayAlert}
					className="flex border-2 ml-6 mr-auto border-black text-black h-12 w-24 cursor-not-allowed"
				>
					<Image
						onClick={displayAlert}
						alt="logo"
						// error.png is volountary an invalid image to display the error image
						src="/error.png"
						width={40}
						height={40}
					></Image>
				</div>
				<p onClick={displayAlert} className="cursor-help">
					About
				</p>
				<p onClick={displayAlert} className="cursor-help">
					Resume
				</p>
				<p onClick={displayAlert} className="cursor-help">
					Portfolio
				</p>
				<p onClick={displayAlert} className="cursor-help">
					Blog
				</p>
				<p onClick={displayAlert} className="cursor-help">
					Contact
				</p>
			</div>
			<h1 className="text-6xl mb-20">My Amazing Portfolio</h1>
			<div className="flex flex-col w-2/3 min-h-48 p-8 border-dashed border-4 bg-stone-400">
				<p className="text-2xl">
					{"Aren't you fed up with ugly and buggy websites?"}
				</p>
				<div className="flex w-full mt-6 items-center justify-around">
					<OldButton
						onClick={displayAlert}
						text="Stay on the ugly world"
						cssProp="cursor-alias"
					></OldButton>
					<OldButton
						onClick={() => router.push("/about")}
						text="Go to the future"
						variant="primary"
					></OldButton>
				</div>
			</div>

			<div className={"w-2/3 pt-6 mt-auto mb-6"}>
				<p className="">My social network:</p>
				<p className="underline text-blue-600" onClick={displayAlert}>
					• My Facebook profile
				</p>
				<p className="underline text-blue-600" onClick={displayAlert}>
					• myspace.com
				</p>
				<p className="underline text-blue-600" onClick={displayAlert}>
					• My Yahoo Blog
				</p>
			</div>
		</main>
	);
}
