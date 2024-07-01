"use client";

import React, { useState } from "react";
import {
	motion,
	useTransform,
	AnimatePresence,
	useMotionValue,
	useSpring,
} from "framer-motion";

export const Tooltip = ({
	children,
	title,
	description,
}: {
	children: React.ReactNode;
	title: string;
	description?: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const springConfig = { stiffness: 100, damping: 5 };
	const x = useMotionValue(0); // going to set this value on mouse move

	// rotate the tooltip
	const rotate = useSpring(
		useTransform(x, [-100, 100], [-45, 45]),
		springConfig
	);
	// translate the tooltip
	const translateX = useSpring(
		useTransform(x, [-100, 100], [-50, 50]),
		springConfig
	);
	const handleMouseMove = (event: any) => {
		const halfWidth = event.target.offsetWidth / 2;
		x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
	};

	return (
		<div
			className="relative group"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<AnimatePresence mode="popLayout">
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 20, scale: 0.6 }}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1,
							transition: {
								type: "spring",
								stiffness: 260,
								damping: 10,
							},
						}}
						exit={{ opacity: 0, y: 20, scale: 0.6 }}
						style={{
							translateX: translateX,
							rotate: rotate,
							whiteSpace: "nowrap",
							left: `-${title.length * 4.5 + 4}px`,
						}}
						className="absolute -top-12 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
					>
						<div className="absolute inset-x-6 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
						<div className="absolute left-6 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
						<div className="font-bold text-white relative z-30 text-base capitalize ">
							{title}
						</div>
						{description && (
							<div className="text-white text-xs">{description}</div>
						)}
					</motion.div>
				)}
			</AnimatePresence>
			<div className="" onMouseMove={handleMouseMove}>
				{children}
			</div>
		</div>
	);
};
