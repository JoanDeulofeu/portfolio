const BadgeContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex h-fit items-center p-3 rounded-lg bg-dt3">
			{children}
		</div>
	);
};

export default BadgeContainer;
