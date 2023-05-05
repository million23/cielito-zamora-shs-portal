import {
	Avatar,
	Card,
	Center,
	Container,
	Flex,
	Group,
	Image,
	Loader,
	LoadingOverlay,
	Skeleton,
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
import { useEffect, useState } from "react";

import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import dayjs from "dayjs";
import { groq } from "next-sanity";

const announcementQuery = groq`
	*[_type == "announcements"] {
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

type Announcement = {
	authors: {
		name: string;
		avatar: string;
	}[];
	title: string;
	slug: string;
	description: string;
	_createdAt: string;
	_id: string;
};

export const getStaticProps: GetStaticProps = async () => {
	const data = await client.fetch(announcementQuery);
	const announcements = await data;

	return {
		props: {
			announcements,
		},
	};
};

const AnnouncementPage: NextPage<{ announcements: Announcement[] }> = ({
	announcements,
}) => {
	return (
		<Container>
			<h1>Announcements</h1>

			<Flex direction="column" gap="sm">
				{!announcements &&
					Array(3)
						.fill(0)
						.map((_, i) => <Skeleton key={`skeleton_${i}`} h={120} />)}

				{announcements?.map((announcement) => (
					<Link
						key={announcement._id}
						href={`/academics/announcements/${announcement.slug}`}
						style={{ textDecoration: "none" }}
					>
						<Card>
							<Text size="xl" fw="bold">
								{announcement.title}
							</Text>
							<Group mt="xl" position="apart">
								<Flex align="center" gap="sm">
									<Text>By</Text>
									{announcement.authors.map((author) => (
										<Tooltip
											key={author.name}
											label={author.name}
											position="bottom"
											withArrow
										>
											<Avatar
												radius="xl"
												src={author.avatar}
												placeholder={author.name}
											/>
										</Tooltip>
									))}
								</Flex>
								<Text>
									{dayjs(announcement._createdAt).format("MMMM DD, YYYY")}
								</Text>
							</Group>
						</Card>
					</Link>
				))}
			</Flex>
		</Container>
	);
};

export default AnnouncementPage;