const TimelineItem = ({
	title,
	subTitle,
	content,
	subContent,
	withoutTimeline = false,
}: {
	title: string;
	subTitle: string;
	content?: string;
	subContent?: string;
	withoutTimeline?: boolean;
}) => {
	return (
		<div
			className={`flex ${
				withoutTimeline
					? "pt-0 before:border-l-2 before:border-dt4 before:w-1 before:h-3 before:absolute before:left-6"
					: "border-l-2 border-dt4"
			} ml-6 pl-8 p-2`}
		>
			<div className="flex flex-col">
				<div
					className={`flex items-center gap-7 ${
						withoutTimeline ? "ml-[-2.3rem]" : "ml-[-2.45rem]"
					}`}
				>
					<div className="bg-dt0 rounded-full w-3 h-3 z-10" />
					<p className="font-primary font-semibold">{title}</p>
				</div>
				<p className="font-second text-dt0">{subTitle}</p>
				<p className="font-second">{content}</p>
				<p className="font-second opacity-60">{subContent}</p>
			</div>
		</div>
	);
};

export default TimelineItem;
