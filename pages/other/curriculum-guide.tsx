import {
	ActionIcon,
	Anchor,
	Card,
	Container,
	Flex,
	SimpleGrid,
	Text,
	Title,
} from "@mantine/core";
import { GetStaticProps, NextPage } from "next";

import { MdDownload } from "react-icons/md";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

type Guide = {
	_createdAt: string;
	_id: string;
	file: string;
	tags: string[];
	title: string;
};

export const getStaticProps: GetStaticProps = async () => {
	const query = groq`
    *[_type == "downloadables" && "guide" in tags] {
      title,
      _createdAt,
      "file": file.asset -> url,
      tags,
      _id
    }
  `;

	const data = await client.fetch(query);
	const guide = await data;

	return {
		props: {
			guides: guide,
		},
	};
};

const CurriculumGuide: NextPage<{ guides: Guide[] }> = ({ guides }) => {
	return (
		<Container>
			<Title mt={75}>Curriculum Guides</Title>

			<SimpleGrid
				mt="lg"
				cols={3}
				breakpoints={[
					{ maxWidth: "sm", cols: 1 },
					{ maxWidth: "md", cols: 2 },
					{ maxWidth: "lg", cols: 3 },
				]}
			>
				{guides?.map((item) => (
					<Card key={item._id}>
						<Text>{item.title}</Text>

						<Flex justify="end">
							<Anchor href={item.file} target="_blank">
								<ActionIcon variant="filled" size="xl">
									<MdDownload />
								</ActionIcon>
							</Anchor>
						</Flex>
					</Card>
				))}
			</SimpleGrid>
		</Container>
	);
};

export default CurriculumGuide;