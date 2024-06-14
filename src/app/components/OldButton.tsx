export default function OldButton({
	variant,
	text,
	cssProp = "",
	onClick,
}: {
	variant?: string;
	text?: string;
	cssProp?: string;
	onClick?: () => void;
}) {
	const color = variant === "primary" ? "bg-green-500" : "bg-red-600";
	const hoverColor =
		variant === "primary" ? "hover:bg-green-400" : "hover:bg-red-500";

	return (
		<button
			onClick={onClick}
			className={`font-VT323 ${color} ${hoverColor} p-2 w-48 border-4 border-opacity-50 border-t-[#ddd] border-r-[#fff] border-b-[#222] border-l-[#000] ${cssProp}`}
		>
			{text ?? "Click Here"}
		</button>
	);
}
