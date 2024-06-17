"use client";

import Paper from "../../components/Paper";

const ResumePage = () => {
	return (
		<main className={`flex text-white min-h-screen flex-col`}>
			<p className="font-primary text-4xl mx-8 my-6">Resume</p>
			<div className="flex w-auto min-h-40 px-8 gap-6">
				<Paper cssProp="flex-col flex-1">
					<>
						<Paper light cssProp="flex-col w-44 h-44 mx-auto mt-8"></Paper>
						<Paper light cssProp="flex-col mx-auto mt-8 px-2 py-2">
							<p className="font-second">Web Developper FullStack</p>
						</Paper>
						<p>allo 2</p>
						<p>allo 3</p>
						<p>allo 4</p>
						<p>allo 5</p>
						<p>allo 5</p>
						<p>allo 5</p>
						<p>allo 5</p>
					</>
				</Paper>
				<Paper cssProp="flex-col flex-[3_3_0%]">
					<>
						<p>allo 1</p>
						<p>allo 2</p>
						<p>allo 3</p>
						<p>allo 4</p>
						<p>allo 5</p>
					</>
				</Paper>
			</div>
		</main>
	);
};

export default ResumePage;
