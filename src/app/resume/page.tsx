"use client";

import Paper from "../../components/Paper";

import InformationItem from "./components/InformationItem";

const EMAIL_ICON = require("../../../public/email.json");
const PHONE_ICON = require("../../../public/phone.json");
const CALENDAR_ICON = require("../../../public/calendar.json");

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
						<div className="flex mx-auto h-0.5 w-11/12 mt-8 bg-zinc-700"></div>

						<InformationItem
							icon={EMAIL_ICON}
							title="EMAIL"
							content="Contact@joangehin.com"
							size={25}
						/>
						<InformationItem
							icon={PHONE_ICON}
							title="PHONE"
							content="+33 6 58 27 53 19"
							size={25}
						/>
						<InformationItem
							icon={CALENDAR_ICON}
							title="BIRTHDAY"
							content="12 January 1993"
							size={25}
						/>
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
