"use client";

import { MacbookScroll } from "@/components/MacbookScroll";

export default function HomePage() {
	return (
		<main className={`flex min-h-screen flex-col items-center `}>
			<div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
				<MacbookScroll
					title={
						<span>
							This Macbook is built with Tailwindcss. <br /> No kidding.
						</span>
					}
					// badge={
					// <Link href="https://peerlist.io/manuarora">
					// 	<Badge className="h-10 w-10 transform -rotate-12" />
					// </Link>
					// }
					src={`/macbook2.png`}
					showGradient={false}
				/>
			</div>
		</main>
	);
}
