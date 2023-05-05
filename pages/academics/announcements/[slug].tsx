import {
	Anchor,
	Avatar,
	Button,
	Container,
	Flex,
	Text,
	Title,
	Tooltip,
} from "@mantine/core";
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
import dayjs from "dayjs";
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
// 	const { slug } = context.query;

// 	const query = groq`
// 		*[_type == "announcements" && slug.current == "${slug}"] {
// 			"authors": authors[] -> {
// 				name,
// 				"avatar": avatar.asset->url
// 			},
// 			title,
// 			"slug": slug.current,
// 			description,
// 			_createdAt,
// 			_id
// 		}
// 	`;

// 	const data = await client.fetch(query);
// 	const announcement = await data[0];

// 	return {
// 		props: {
// 			announcement,
// 		},
// 	};
// };

export const getStaticPaths: GetStaticPaths = async () => {
	const query = groq`
		*[_type == "announcements"] {
			"slug": slug.current
		}
	`;

	const data = await client.fetch(query);
	const announcements = await data;

	const paths = announcements.map((announcement: Announcement) => ({
		params: { slug: announcement.slug },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const query = groq`
		*[_type == "announcements" && slug.current == "${context.params?.slug}"] {
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
	return (
		<Container py={50}>
			<Anchor href="/academics/announcements">
				<Button variant="subtle" leftIcon={<MdArrowBack />}>
					Go back
				</Button>
			</Anchor>
			<Title order={1} mb={10}>
				{announcement.title}
			</Title>
			<Flex justify="space-between" mb={50}>
				<Flex>
					{announcement.authors.map((author) => (
						<Tooltip label={author.name} position="bottom-start" withArrow>
							<Avatar src={author.avatar} placeholder={author.name} />
						</Tooltip>
					))}
				</Flex>
				<Text>{dayjs(announcement._createdAt).format("MMMM D, YYYY")}</Text>
			</Flex>

			<PortableText value={announcement.description} />
		</Container>
	);
};

export default AnnouncementPage;