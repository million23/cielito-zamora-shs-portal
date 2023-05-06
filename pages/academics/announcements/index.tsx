import {
	Anchor,
	Avatar,
	Box,
	Card,
	Center,
	Container,
	Flex,
	Grid,
	Group,
	Image,
	Loader,
	LoadingOverlay,
	SimpleGrid,
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

import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import dayjs from "dayjs";
import { groq } from "next-sanity";

const announcementQuery = groq`
	*[_type == "announcements"] | order(_createdAt desc) {
		"authors": authors[] -> {
			name,
			"avatar": avatar.asset->url
		},
		title,
		"slug": slug.current,
		"headerImage": headerImage.asset->url,
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
	headerImage?: string;
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
		<Container mt={75}>
			<Title mb="lg">All Posts</Title>

			<Grid gutter="md">
				{!announcements &&
					Array(5)
						.fill(0)
						.map((_, i) => (
							<Grid.Col sm={12} md={6} key={`loadingcard_${i}`}>
								<Card>
									<Flex direction="column" gap="sm">
										<Skeleton height={15} />
										<Skeleton height={15} width={100 + i * 40} />
									</Flex>
									<Flex align="center" mt="xl">
										<Skeleton height={50} circle mr="auto" />
										<Skeleton height={15} w={40 + i * 20} />
									</Flex>
								</Card>
							</Grid.Col>
						))}

				{announcements?.map((announcement, index) => (
					<Grid.Col key={`authorcard_${index}`} sm={12} md={6}>
						<Anchor
							key={announcement._id}
							href={`/academics/announcements/${announcement.slug}`}
							style={{ textDecoration: "none" }}
						>
							<Card shadow="sm">
								<Card.Section mb={10}>
									<Image
										src={
											announcement.headerImage ||
											"https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
										}
										height={150}
									/>
								</Card.Section>
								<Box mah={150} maw="100%">
									<Text size="xl" fw="bold" truncate>
										{announcement.title}
									</Text>
								</Box>
								<Group mt="xl" position="apart">
									<Flex align="center" gap="sm">
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
						</Anchor>
					</Grid.Col>
				))}
			</Grid>

			{/* {!announcements &&
					Array(3)
						.fill(0)
						.map((_, i) => <Skeleton key={`skeleton_${i}`} h={120} />)}

				
				*/}
		</Container>
	);
};

export default AnnouncementPage;