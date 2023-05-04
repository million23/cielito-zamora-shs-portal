import { Anchor, Button, Container, Title } from "@mantine/core";
import {
	GetServerSideProps,
	GetStaticPaths,
	GetStaticProps,
	NextPage,
} from "next";
import { MdArrowBack, MdArrowLeft } from "react-icons/md";

import { PortableText } from "@portabletext/react";
import { TypedObject } from "sanity";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

type Announcement = {
	authors: {
		name: string;
		avatar: string;
	}[];
	title: string;
	slug: string;
	description: TypedObject | TypedObject[];
	_createdAt: string;
	_id: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { slug } = context.query;

	const query = groq`
		*[_type == "announcements" && slug.current == "${slug}"] {
			"authors": authors[] -> {
				name,
				"avatar": avatar.asset->url
			},
			title,
			"slug": slug.current,
			description,
			_createdAt,
			_id
		}
	`;

	const data = await client.fetch(query);
	const announcement = await data[0];

	return {
		props: {
			announcement,
		},
	};
};

const AnnouncementPage: NextPage<{ announcement: Announcement }> = ({
	announcement,
}) => {
	console.log(announcement);

	return (
		<Container py={50}>
			<Anchor href="/academics/announcements">
				<Button variant="subtle" leftIcon={<MdArrowBack />}>
					Go back
				</Button>
			</Anchor>
			<Title order={1}>{announcement.title}</Title>

			<PortableText value={announcement.description} />
		</Container>
	);
};

export default AnnouncementPage;