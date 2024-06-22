import Image from "next/image";
import test from "../../public/skills-logo/aws.svg";
import { color } from "framer-motion";

const Charts = () => {
	const rowsLabels = ["Jedi", "Droid", "Wookie", "Jar Jar Binks"];
	const skills = [
		{
			height: 18,
			type: "Controlled",
			logos: ["react", "node-js", "typescript", "git", "mongodb"],
			color: "bg-gradient-to-b from-red-400 to-red-500",
		},
		{
			height: 16,
			type: "Common",
			logos: ["nestjs", "nextjs", "express", "jest"],
			color: "bg-gradient-to-b from-blue-400 to-blue-500",
		},
		{
			height: 19,
			type: "Joke",
			color: "bg-gradient-to-b from-green-400 to-green-500",
		},
		{
			height: 13,
			type: "Unusual",
			logos: ["redux", "graphql", "gcp"],
			color: "bg-gradient-to-b from-yellow-400 to-yellow-500",
		},
		{
			height: 8,
			type: "Seen",
			logos: ["aws", "c-plain"],
			color: "bg-gradient-to-b from-purple-400 to-purple-500",
		},
	];

	return (
		<div className="flex flex-col w-full relative">
			<div className="flex w-full h-[22.5rem] p-4 gap-2">
				<div className="w-24">
					{rowsLabels.map((label) => {
						return (
							<p
								key={label}
								className={`flex justify-end w-full h-20 font-second text-xs opacity-60`}
							>
								{label}
							</p>
						);
					})}
				</div>
				<div className="flex flex-col w-full pt-2 h-[22.5rem] ">
					<div className="border-dt4 border-b-2 relative">
						{rowsLabels.map((label) => {
							return (
								<div
									key={label}
									className={`flex border-dt4 border-t-2 border-dashed w-full h-20`}
								></div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="flex w-full h-[22.5rem] absolute top-0 p-4 pl-32 pr-8 items-end justify-between ">
				{skills.map(({ height, type, logos, color }) => {
					return (
						<div
							key={type}
							className={`flex flex-col w-20 ${color} justify-end items-center gap-4 rounded-t-xl shadow-t-reflection`}
							style={{ height: `${height}rem` }}
						>
							<>
								{logos && logos?.length > 0 ? (
									logos?.map((logo) => {
										return (
											<Image
												key={logo}
												src={`/skills-logo/${logo}.svg`}
												alt={logo}
												width={24}
												height={24}
											/>
										);
									})
								) : (
									<p className="font-primary text-md text-center">
										Drinking Juice 🥤
									</p>
								)}
								<p className="font-primary text-3xl">{`${
									(height * 100) / 20
								} %`}</p>
							</>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Charts;
