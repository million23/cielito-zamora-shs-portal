import type { NextApiRequest, NextApiResponse } from "next";

const announcements = [
	{
		title: "New Principal Announced",
		date: "2022-09-01",
		description:
			"We are excited to announce that Mr. Smith will be the new principal of our school starting next week. He brings a wealth of experience and knowledge to the role, and we are looking forward to working with him.",
	},
	{
		title: "Back-to-School Night",
		date: "2022-09-05",
		description:
			"Join us for Back-to-School Night on Tuesday, September 5th from 6:00-8:00 pm. Meet your child's teachers, learn about the curriculum, and get to know other parents in the community.",
	},
	{
		title: "Fall Sports Tryouts",
		date: "2022-09-10",
		description:
			"Fall sports tryouts will be held the week of September 10th. Students interested in participating in football, volleyball, cross-country, or cheerleading should sign up in the main office.",
	},
	{
		title: "College Fair",
		date: "2022-09-15",
		description:
			"Our annual college fair will take place on Friday, September 15th from 9:00 am to 12:00 pm in the gymnasium. Representatives from over 50 colleges and universities will be in attendance to answer questions and provide information about their schools.",
	},
	{
		title: "School Picture Day",
		date: "2022-09-20",
		description:
			"School Picture Day will be on Wednesday, September 20th. Students should dress in their best attire and be prepared to smile for the camera.",
	},
	{
		title: "Parent-Teacher Conferences",
		date: "2022-09-25",
		description:
			"Parent-teacher conferences will be held on Monday, September 25th from 1:00-8:00 pm. Sign-ups will be available online starting next week.",
	},
	{
		title: "Homecoming Week",
		date: "2022-10-02",
		description:
			"Get ready for Homecoming Week, starting on Monday, October 2nd. There will be daily spirit themes, a pep rally, and a football game on Friday night. Go Cougars!",
	},
	{
		title: "Fall Festival",
		date: "2022-10-10",
		description:
			"Join us for our annual Fall Festival on Tuesday, October 10th from 4:00-7:00 pm. There will be food, games, and activities for the whole family to enjoy.",
	},
	{
		title: "School Musical",
		date: "2022-10-15",
		description:
			"Don't miss our school's production of 'Grease' on Sunday, October 15th at 7:00 pm. Tickets will be available for purchase starting next week.",
	},
	{
		title: "Parent Association Meeting",
		date: "2022-10-20",
		description:
			"Join us for the Parent Association meeting on Friday, October 20th at 6:00 pm in the library. We will be discussing upcoming events and ways to get involved in the school community.",
	},
];

type Data = {
	announcement: {
		title: string;
		date: string;
		description: string;
	};
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	// get id from query
	const { id } = req.query;

	// if id is provided, return announcement with that id
	if (id) {
		const announcement = announcements.find((a) => a.date === id);
		res.status(200).json({
			announcement: announcement || {
				title: "Announcement not found",
				date: "",
				description: "",
			},
		});
	}
}
