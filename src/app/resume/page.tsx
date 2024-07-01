"use client";

import IconCloud from "@/app/resume/components/IconCloud";
import Charts from "@/components/Charts";
import Paper from "../../components/Paper";
import InformationItem from "./components/InformationItem";
import TimelineItem from "./components/TimelineItem";
import SocialNetworks from "@/components/SocialNetworks";

const ANALYTICS_ICON = require("../../../public/icons/analytics.json");
const BOOK_ICON = require("../../../public/icons/book.json");
const CALENDAR_ICON = require("../../../public/icons/calendar.json");
const CODE_ICON = require("../../../public/icons/code.json");
const EMAIL_ICON = require("../../../public/icons/email.json");
const HOME_ICON = require("../../../public/icons/home.json");
const PHONE_ICON = require("../../../public/icons/phone.json");

const ResumePage = () => {
	return (
		<main className={`flex text-white min-h-screen flex-col pb-8`}>
			<p className="font-primary text-4xl mx-8 my-6">Resume</p>
			<div className="flex w-auto min-h-40 px-8 gap-6">
				<Paper cssProp="flex-col flex-1 h-fit sticky top-4">
					<>
						<Paper light cssProp="flex-col w-44 h-44 mx-auto mt-8"></Paper>
						<Paper light cssProp="flex-col mx-auto mt-8 px-2 py-2">
							<p className="font-second">Web Developper FullStack</p>
						</Paper>
						<div className="flex mx-auto h-0.5 w-11/12 mt-8 bg-dt4"></div>

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
							content="January 1993"
							size={25}
						/>
						<InformationItem
							icon={HOME_ICON}
							title="LOCATION"
							content="Montpellier, France"
							size={25}
						/>
						<SocialNetworks />
					</>
				</Paper>
				<Paper cssProp="flex-col flex-[3_3_0%]">
					<>
						<div className="flex flex-col relative">
							<div className="flex">
								<InformationItem
									icon={CODE_ICON}
									title="Experience"
									size={25}
								/>
							</div>
							<TimelineItem
								title="Naboo"
								subTitle="2023-2024 | Full Remote"
								content="Development of numerous features on a recent and powerful
										powerful stack (Nest/Next) in a hyper-growth start-up. The
										main challenge was to maintain a relatively robust despite
										the time constraints."
								subContent="Stack: MongoDB | NestJS | NextJS | TypeScript | GraphQL"
							/>
							<TimelineItem
								title="Fastory"
								subTitle="2021-2022 | Full Remote"
								content="Deepening my expertise in the React-Node stack on a vast 
								and complex code base. Learning SQL, ElasticSearch, AWS... Complete 
								overhaul of one of the site's features of the site and various 
								maintenance/DevOps tasks for our product/stack."
								subContent="Stack: PostgreSQL | NodeJS | React | TypeScript | Redux"
							/>
							<TimelineItem
								title="Ubees Inc"
								subTitle="2020-2021 | Hybrid Remote"
								content="Development of 3 mobile applications and several websites 
								(customer and in-house products). Implementation of projects in a 
								young start-up where everything had to be done."
								subContent="Stack: MongoDB | NodeJS | React | Express"
								withoutTimeline
							/>
							<div className="flex mt-4">
								<InformationItem icon={BOOK_ICON} title="Education" size={25} />
							</div>
							<TimelineItem
								title="IT and information systems expert"
								subTitle="2017-2020 | 42 Paris High School"
								content="Learning development (in C) in an environment where excellence 
								and peer-learning go hand in hand. Develop several projects such as a 
								3D graphics engine from scratch, a functional library, 2D rendering 
								fractal generators and many others. Short but intense training in web 
								development (PHP-HTML)"
							/>
							<TimelineItem
								title="Bac Logistique"
								subTitle="2010-2012 | High School - Alès"
							/>
							<TimelineItem
								title="Bep Chauffeur Routier"
								subTitle="2008-2010 | High School - Alès"
								withoutTimeline
							/>
						</div>
						<div className="flex flex-col">
							<div className="flex "></div>
							<InformationItem icon={ANALYTICS_ICON} title="Skills" size={25} />
							<Charts />
							<IconCloud />
						</div>
					</>
				</Paper>
			</div>
		</main>
	);
};

export default ResumePage;
