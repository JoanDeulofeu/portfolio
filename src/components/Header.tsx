"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/utils/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./NavBarMenu";

const Header = ({ className }: { className?: string }) => {
	const router = useRouter();

	const [active, setActive] = useState<string | null>(null);
	return (
		<div className={cn("fixed top-10 max-w-2xl mx-auto z-50", className)}>
			<Menu setActive={setActive}>
				<MenuItem
					onClick={() => router.push("/about")}
					setActive={setActive}
					active={active}
					item="About"
				>
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/web-dev">Web Development</HoveredLink>
						<HoveredLink href="/interface-design">Interface Design</HoveredLink>
						<HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
						<HoveredLink href="/branding">Branding</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem
					onClick={() => router.push("/resume")}
					setActive={setActive}
					active={active}
					item="Resume"
				>
					<div className="  text-sm grid grid-cols-2 gap-10 p-4">
						{/* <ProductItem
							title="Algochurn"
							href="https://algochurn.com"
							src="https://assets.aceternity.com/demos/algochurn.webp"
							description="Prepare for tech interviews like never before."
						/>
						<ProductItem
							title="Tailwind Master Kit"
							href="https://tailwindmasterkit.com"
							src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
							description="Production ready Tailwind css components for your next project"
						/>
						<ProductItem
							title="Moonbeam"
							href="https://gomoonbeam.com"
							src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
							description="Never write from scratch again. Go from idea to blog in minutes."
						/>
						<ProductItem
							title="Rogue"
							href="https://userogue.com"
							src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
							description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
						/> */}
					</div>
				</MenuItem>
				<MenuItem
					onClick={() => router.push("/portfolio")}
					setActive={setActive}
					active={active}
					item="Portfolio"
				>
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/hobby">Hobby</HoveredLink>
						<HoveredLink href="/individual">Individual</HoveredLink>
						<HoveredLink href="/team">Team</HoveredLink>
						<HoveredLink href="/enterprise">Enterprise</HoveredLink>
					</div>
				</MenuItem>
				<MenuItem
					onClick={() => router.push("/contact")}
					setActive={setActive}
					active={active}
					item="Contact"
				>
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/hobby">Hobby</HoveredLink>
						<HoveredLink href="/individual">Individual</HoveredLink>
						<HoveredLink href="/team">Team</HoveredLink>
						<HoveredLink href="/enterprise">Enterprise</HoveredLink>
					</div>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default Header;
