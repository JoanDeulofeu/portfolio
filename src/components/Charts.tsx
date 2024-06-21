const Charts = () => {
	const rowsLabels = ["Jedi", "Droid", "Wookie", "Jar Jar Binks"];
	const skills = [
		{ height: 18, label: "React" },
		{ height: 16, label: "Node" },
		{ height: 10, label: "TypeScript" },
		{ height: 14, label: "GraphQL" },
		{ height: 6, label: "Redux" },
	];

	return (
		<div className="flex flex-col w-full relative">
			<div className="flex w-full h-[22.5rem] bg-dt3 p-4 gap-2">
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
			<div className="flex w-full h-[22.5rem] absolute top-0 p-4 pl-32 pr-8 items-end justify-between">
				{skills.map(({ height, label }) => {
					return (
						<div
							key={label}
							className="flex w-20 bg-red-400"
							style={{ height: `${height}rem` }}
						>
							{label}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Charts;
