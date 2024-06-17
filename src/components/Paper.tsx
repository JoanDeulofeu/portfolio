const Paper = ({
	children,
	cssProp,
	light,
}: {
	children?: React.ReactNode;
	cssProp?: string;
	light?: boolean;
}) => {
	const color = light ? "bg-zinc-700" : "bg-zinc-800";
	return (
		<div className={`flex  ${color} rounded-xl p-4 ${cssProp}`}>{children}</div>
	);
};

export default Paper;
