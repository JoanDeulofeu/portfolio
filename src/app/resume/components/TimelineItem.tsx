const TimelineItem = ({
	title,
	subTitle,
	content,
	subContent,
}: {
	title: string;
	subTitle: string;
	content?: string;
	subContent?: string;
}) => {
	return (
		<div className="flex border-l-2 border-dt4 ml-7 pl-8 p-2">
			<div className="flex flex-col">
				<div className="flex items-center gap-7 ml-[-2.4rem]">
					<div className="bg-dt0 rounded-full w-3 h-3" />
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
