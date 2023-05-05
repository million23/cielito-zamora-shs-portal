import {
	ActionIcon,
	Anchor,
	Button,
	Card,
	Container,
	Flex,
	Group,
	SimpleGrid,
	Text,
	Title,
} from "@mantine/core";

import { MdDownload } from "react-icons/md";
import { NextPage } from "next";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

type DLL = {
	_createdAt: string;
	_id: string;
	file: string;
	tags: string[];
	title: string;
};

export const getStaticProps = async () => {
	const query = groq`
    *[_type == "downloadables" && "dll" in tags] {
      title,
      _createdAt,
      "file": file.asset -> url,
      tags,
      _id
    }
  `;

	const data = await client.fetch(query);
	const dll = await data;

	return {
		props: {
			dll,
		},
	};
};

const DLLPage: NextPage<{ dll: DLL[] }> = ({ dll }) => {
	return (
		<>
			<Container>
				<Title mt={75}>Downloadable Daily Lesson Logs</Title>

				<SimpleGrid
					mt="lg"
					cols={3}
					breakpoints={[
						{ maxWidth: "sm", cols: 1 },
						{ maxWidth: "md", cols: 2 },
						{ maxWidth: "lg", cols: 3 },
					]}
				>
					{dll?.map((item) => (
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
		</>
	);
};

export default DLLPage;