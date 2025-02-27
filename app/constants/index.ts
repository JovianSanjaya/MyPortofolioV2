export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full time student",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "AI Enthusiast",
		icon: "/mobile.webp",
	},

];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "Pytorch",
		icon: "/tech/pytorch.png",
	},
	{
		name: "Tensorflow",
		icon: "/tech/tensorflow.png",
	},
	{
		name: "Java",
		icon: "/tech/java.png",
	},
	{
		name: "Python",
		icon: "/tech/python.svg",
	},
	{
		name: "MySQL",
		icon: "/tech/mysql.png",
	},
	

];

const experiences = [
	{
		title: "Research Engineer Intern",
		company_name: "Singapore Institute of Manufacturing Technology",
		icon: "/company/simtechsg_logo.jpeg",
		iconBg: "#383E56",
		date: "2020 -  2023",
		points: [
			"Developed Real Time Object Detection Model to detect defect on metal surfaces for non-destructive testing. Integrated the model on Raspberry PI using Microscopic lens to be able to detect the smaller defects.",

			"Developed a web interface that will be used as the Offline Detection where User can upload an image and prediction will be made to the image. The web app also features statistical analysis to give deeper information about the predictions made such as frequency, area, and confidence classification of the defects.",

			"Conducted research about Artificial Intelligence Defect Detection Robustness in Real-time Non-Destructive Testing of Metal Surfaces and publish a paper in SINCE 2025 conference",

			"Helped out in the workflow of the the soil x-ray testing for the Optics Imaging System Department by assisting with carrying the soil samples into the machine",
		],
	},
	
];

const testimonials = [
	
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Jovian Sanjaya Putra",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/om-patel-401068143/",
	},
	// {
	// 	id: 4,
	// 	testimonial:
	// 		"Also do check out my UI/UX Portfolio where I have shared by design studies.",
	// 	name: "Om Patel",
	// 	image: "/socialmedia/portfolio.svg",
	// 	link: "https://omthecreator.netlify.app/",
	// },

	{
		id: 4,
		testimonial:
			"If you want to support me don't forget to check out on my Buy Me a Coffee.",
		name: "Jovian",
		image: "/socialmedia/coffee.jpg",
		link: "buymeacoffee.com/jovian",
	},

	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "JovianSanjaya",
		image: "/tech/github.webp",
		link: "https://github.com/omunite215",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Canva" | "Vercel" | "Figma" | "Github" | "Web" | " "
}[] = [
	{
		name: "Real-Time and Web-Based Micro Defect Detection in Metal Surfaces",
		description:
			"During my internship at Singapore Institute of Manufacturing Technology (SIMTech), I developed Real-time and Web-Based Micro  project for detecting defects on surfaces such as metal using computer vision and deep learning to streamline the inspection process. Some of the techniques used include adotpion of YOLOv11, Weighted Loss Function, Slicing Aided Hyper Inference (SAHI). For the web based-based detection, HTML, Tailwing CSS, and javascript are used for front-end and Flask is used for backend.",
		tags: [
			{
				name: "YOLOv11",
				color: "blue-text-gradient",
			},
			{
				name: "Full stack development",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/intern.png",
		platform: "Canva",
		deploy_link: "https://www.canva.com/design/DAGeN4ZYVD0/UwvTtZ8d5p0oUrbrcL9AFA/edit?utm_content=DAGeN4ZYVD0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
	},
	{
		name: "LifeFit",
		description:
			" Life Fit is a personalised app that integrates smart technology and community-based caregiving. This app not only offers user-friendly features to improve convenience but also fosters connections between caregivers and recipients. It serves as a modern care management platform, facilitating customized services such as home therapy, nursing, personal care, and doctor visits LifeFit prioritizes security and efficiency, ensuring that users can access their care services with ease and convenience.",
		tags: [
			{
				name: "next",
				color: "red-text-gradient",
			},
			{
				name: "Next UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/lifefit.png",
		platform: "Github",
		deploy_link: "https://github.com/omunite215/React-Admin-DashBoard",
	},
	{
		name: "Data Analysis of HDB Flats in Singapore",
		description:
		"I am an international student who studies in Polytechnic and decides to take tuition grant. Upon my graduation, I need to work for 3 years in Singapore to fulfill my bond. I am trying to look for a place to stay in the long run for about 10 years but there are some factors that I am confused about. Firstly, I am looking a flat that is 'value for money' which means that flats have lots of amenities at a reasonable price with decent and strategic location which means easy to go anywhere. Secondly, I am planning to move in in January 2024 with my brother. So i am hoping to have the right amount of room for us to stay. Thirdly, I am confused whether to buy or rent Help me to decide whether should i buy or rent , the location, and the flat type!",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/hdb.png",
		platform: "Github",
		deploy_link: "https://github.com/JovianSanjaya/DataAnalysisOfHdbFlatsInSingapore",
	},
	{
		name: "Fire Alarm Sytem Technology",
		description:
			"The Smart Fire Alarm System is a DevOps final project focused on developing an intelligent fire detection and response system. It involves stages like planning, development, testing, deployment, and monitoring. The system is designed to detect fire incidents, issue real-time alerts, and integrate with hardware sensors. DevOps practices such as continuous integration, deployment automation, and monitoring are utilized to ensure efficient development, deployment, and maintenance of the system.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/fast.jpg",
		platform: "Github",
		deploy_link: "https://github.com/JovianSanjaya/F.A.S.T",
	},
	
];


const achievements :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web" | " "
}[] = [
	{
		name: "The 5th RoboCup Asia-Pacific Tianjin Invitational Tournament (RCAP-TJI2024) - 1st Prizes Two Categories",
		description:
		"My team participated in the RCAP Autonomous Delivery (ADL) and Vision Technical Challenge.In the ADL category, I developed the Nodes Sorting Algorithm that will automatically sort all the nodes and its neighboring nodes according to the required format . I also helped in optimizing the Pathfinding Algorithm and fine-tuned the mobile robot to ensure that it is stable throughout the competition.The difference between this map and the one used during the selection in Singapore was that it now included priority in the package delivered which required a balance between delivery time and distance.For the Vision Technical Challenge, I was responsible for the computer vision utilized by the robot. The competition map provides barcodes in the middle and at the side of the wall that is used to navigate the robot. My team managed to clinch 1st prizes for both categories",
		tags: [
			{
				name: "Computer Vision",
				color: "blue-text-gradient",
			},
			{
				name: "Robotics",
				color: "green-text-gradient",
			},
		],
		image: "/achievements/tianjin.jpg",
		platform: "Web",
		deploy_link: "https://www.facebook.com/singaporepolytechnic/posts/last-month-team-sp-took-on-the-robocup-asia-pacific-tianjin-invitational-tournam/894044586093167/",
	},
	{
		name: "OPPO ColorOSHack 2023 Asia Pacific - Top 10th Finalist",
		description:
		 "I had the opportunity to represent my school as a Top 10th finalist in the OPPO ColourOS Hack 2024, where I presented my project. This was my first international hackathon, and I learned to use new software developed by OPPO called Pantanal to improve the mobile app I developed. We had to balance school and the competition, which was tiring, but it was worth it because I learned a lot. Through this competition, I not only improved my technical skills expecially in android developemnt using Java and implemented Large Language Model Chatbot but also strengthened my problem-solving, teamwork, and pitching abilities. Our app is a personalised app that integrates smart technology and community-based caregiving. We want to bring this idea to life as I believe it will significantly benefit society, particularly in caregiving and healthcare. Competing at this level also exposed me to industry professionals and like-minded peers.",
		tags: [
			{
				name: "next",
				color: "red-text-gradient",
			},
			{
				name: "Next UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/achievements/oppo.jpg",
		platform: "Web",
		deploy_link: " https://www.oppo.com/en/newsroom/press/upcoming-oppocoloroshack-2023-finals-wrap-up/",
	},
	{
		name: "Robocup Singapore Open 2024 - 1st Prize",
		description:
		"This competition serves as the national selection to represent Singapore in the international scale competition. I participated in this competition individually in Autonomous Delivery Category. The competition was quite tough as everyone will be facing one another to compete for places to represent Singapore. Nevertheless, I still want to join the competition as I believe myself that I can do it. The competition aim was to deliver the parcel in the shortest time possible by programming the virtual robot. My method of solving was to plan the shortest route and fine tune the PID Control of the robot so that it’s stable throughout the competition. I am grateful that I managed to clinch the 1st Prize and got the opportunity to represent Singapore in Tianjin.",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/achievements/open.png",
		source_code_link: "",
		platform: "Web",
		deploy_link: "https://github.com/JovianSanjaya/DataAnalysisOfHdbFlatsInSingapore ",
	},
	{
		name: "National Robotics Competition 2023 - 1st Prize",
		description:
		"This was one of the first competitions I joined during my polytechnic years which is also inline with the application of AI. In the competition, I had to program a virtual robot car to drive autonomously without delivering packages. The challenge focused on Smart Transportation, where we programmed the robot to complete tasks like line tracing and color detection using RGB sensors.My partner and I won 1st prize. One key technique we used was optimizing the robot’s turns by making them round instead of sharp, which reduced the time significantly. I also improved the robot's stability using PID control and utilized the robot’s sensors by understanding its configuration.Winning this competition brought honor to my school and it was a proud moment. It showed my interest in robotics and AI, allowing me to apply my technical skills and time management to solve problems. We also received a cash prize.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/achievements/nrc.png",
		source_code_link: "",
		platform: "Web",
		deploy_link: "https://sopossible.sp.edu.sg/courses/schools/sma/happenings/detail/eee-happenings/eee-teams-swept-first---second-prizes-at-national-robotics-competition-(nrc)-2023",
	},
	{
		name: "NUS HumanITy Challenge 2024 - Top 10th Finalist",
		description:
			"My team and I participated in the HumanITy challenge by NUS and managed to get into top 10th finalist. We had to present our project to the stakeholders such as Vice President Dell Technologies Asia Pacific. My role as the team leader was to guide the the direction of the development of the project. Our project, Life Fit, was an application designed to provide personalized care by blending advanced technology with community-based caregiving for individuals in need. I mainly in charge of the development of the mobile application whereas my team members are in charge of the web application, business model, market research, and aesthetic design for pitching.  Even though we did not win top 3 prizes, I am very proud that we did exceed our expectation and other teams were very impressed by our performance.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/achievements/humanity.jpeg",
		source_code_link: "",
		platform: "Web",
		deploy_link: "https://www.instagram.com/p/C_NPEh2Ni7c/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
	},
	{
		name: "Research Paper Publication on Non-Destructive Testing",
		description:
			"During my internship at Singapore Institute of Manufacturing Technology, I had the opportunity to write and publish my first research paper, which was successfully accepted into 5th Singapore International Non Destructive Testing Conference & Exhibition. My paper focuses on Artificial Intelligence Defect Detection Robustness in Real-time Non-Destructive Testing of Metal Surfaces. The paper main focuses on the key challenges in applying AI to real-time NDT, such as surface variability, environmental factors, and defect diversity, which can affect system performance. To address these issues, the paper proposes a multi-model AI approach and develops a cost-effective, real-time NDT platform. The aim is to evaluate the robustness of AI in practical scenarios, providing insights for designing reliable AI-driven NDT systems. Even though this required a significant amount of self-directed learning, extensive research, and weeks of effort, I am truly grateful for the experience.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/achievements/since.png",
		source_code_link: "",
		platform: "Web",
		deploy_link: "https://www.instagram.com/p/C_NPEh2Ni7c/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
	},
	
];



export { services, technologies, experiences, testimonials, projects, achievements};
