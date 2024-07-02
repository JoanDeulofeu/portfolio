import React, { Suspense, use } from "react";

import {
	Craftsmanship,
	TechnologyWatch,
	FortyTwo,
	Loader,
	Error,
} from "./Components";
import ErrorBoundary from "../../utils/ErrorBoundary";

// This component is only use to get screenshot for the MacbookScroll component
// His code is useless

const getKnowledge = async () => {
	const res = await fetch("https://api.github.com/users/joangehin");
	return res.json();
};

const AboutMe = () => {
	const knowledge = use(getKnowledge());

	return (
		<ErrorBoundary fallback={<Error />}>
			<Suspense fallback={<Loader />}>
				<div className="flex flex-column m-12 px-8 py-4 text-wrap font-primary">
					<div className="flex-1 bg-blend-color-dodge w-16 h-fit">
						After 5 years as a truck driver, I retrained as an IT engineer at
						Ecole 42 Paris. I then worked in various start-ups in the
						agriculture sector, digital marketing, seminar organisation and RGPD
						management.
					</div>

					<div className="relative w-full p-8 justify-around">
						As a fullstack web developer, I define myself by 3 important points:
						<Craftsmanship>
							I will always do my utmost to create clean, optimised, easily
							maintainable code. It has to be well designed, always provide
							added value, be as close as possible to good programming language
							practice and meet customer needs.
						</Craftsmanship>
						<TechnologyWatch>
							The javascript ecosystem is one of the fastest evolving. I am
							constantly looking for tools and techniques that will enable me to
							push my Craftsmanship approach even further.
						</TechnologyWatch>
						<FortyTwo>
							I was trained in a school that taught me one essential thing. One
							who knows is better than 10 who are looking. For me, collective
							intelligence is the basis of our profession. This philosophy is
							the only way to constantly improve.
						</FortyTwo>
					</div>
					{knowledge &&
						knowledge.skills.map((skill: string) => <p key={skill}>{skill}</p>)}
				</div>
			</Suspense>
		</ErrorBoundary>
	);
};

export default AboutMe;
