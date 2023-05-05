import {
	Accordion,
	ActionIcon,
	Anchor,
	Badge,
	Card,
	Container,
	Flex,
	SimpleGrid,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { GetStaticProps, NextPage } from "next";

import { FC } from "react";
import { MdDownload } from "react-icons/md";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

type Guide = {
	_id: string;
	file: string;
	strand: string;
	category: string;
	title: string;
};

export const getStaticProps: GetStaticProps = async () => {
	const query = groq`
		*[_type == "student-guides"] | order(title asc) {
			_id,
			"file": file.asset -> url,
			strand,
			category,
			title
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

const SubjectCard: FC<{ item: Guide }> = ({ item }) => (
	<Card key={item._id}>
		<Stack justify="space-between" mih={150}>
			<Flex direction="column" gap="sm">
				{(item.file.includes("docx") || item.file.includes("doc")) && (
					<Badge>Document</Badge>
				)}
				{item.file.includes("pdf") && <Badge>PDF</Badge>}
				<Text>{item.title}</Text>
			</Flex>

			<Flex justify="end">
				<Anchor href={item.file} target="_blank">
					<ActionIcon variant="filled" size="xl">
						<MdDownload />
					</ActionIcon>
				</Anchor>
			</Flex>
		</Stack>
	</Card>
)

const CurriculumGuide: NextPage<{ guides: Guide[] }> = ({ guides }) => {
	return (
		<Container>
			<Title mt={75}>Curriculum Guides</Title>

			<Accordion mt="lg">
				<Accordion.Item value="core-subjects">
					<Accordion.Control>All Core Subjects</Accordion.Control>
					<Accordion.Panel>
						<SimpleGrid
							mt="lg"
							cols={3}
							breakpoints={[
								{ maxWidth: "sm", cols: 1 },
								{ maxWidth: "md", cols: 2 },
								{ maxWidth: "lg", cols: 3 },
							]}
						>
							{guides?.map(
								(item) =>
									item.category === "core-subjects" && (
										<SubjectCard key={item._id} item={item} />
									),
							)}
						</SimpleGrid>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="contextualized-subjects">
					<Accordion.Control>All Contextualized Subjects</Accordion.Control>
					<Accordion.Panel>
						<SimpleGrid
							mt="lg"
							cols={3}
							breakpoints={[
								{ maxWidth: "sm", cols: 1 },
								{ maxWidth: "md", cols: 2 },
								{ maxWidth: "lg", cols: 3 },
							]}
						>
							{guides?.map(
								(item) =>
									item.category === "contextualized-subjects" && (
										<SubjectCard key={item._id} item={item} />
									),
							)}
						</SimpleGrid>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="specialized-subjects-humss">
					<Accordion.Control>
						All Specialized Subjects (HUMSS)
					</Accordion.Control>
					<Accordion.Panel>
						<SimpleGrid
							mt="lg"
							cols={3}
							breakpoints={[
								{ maxWidth: "sm", cols: 1 },
								{ maxWidth: "md", cols: 2 },
								{ maxWidth: "lg", cols: 3 },
							]}
						>
							{guides?.map(
								(item) =>
									item.strand === "humss" && (
										<SubjectCard key={item._id} item={item} />
									),
							)}
						</SimpleGrid>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="specialized-subjects-gas">
					<Accordion.Control>All Specialized Subjects (GAS)</Accordion.Control>
					<Accordion.Panel>
						<SimpleGrid
							mt="lg"
							cols={3}
							breakpoints={[
								{ maxWidth: "sm", cols: 1 },
								{ maxWidth: "md", cols: 2 },
								{ maxWidth: "lg", cols: 3 },
							]}
						>
							{guides?.map(
								(item) =>
									item.strand === "gas" && (
										<SubjectCard key={item._id} item={item} />
									),
							)}
						</SimpleGrid>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="specialized-subjects-he">
					<Accordion.Control>
						All Specialized Subjects (Home Economics)
					</Accordion.Control>
					<Accordion.Panel>
						<SimpleGrid
							mt="lg"
							cols={3}
							breakpoints={[
								{ maxWidth: "sm", cols: 1 },
								{ maxWidth: "md", cols: 2 },
								{ maxWidth: "lg", cols: 3 },
							]}
						>
							{guides?.map(
								(item) =>
									item.strand === "he" && (
										<SubjectCard key={item._id} item={item} />
									),
							)}
						</SimpleGrid>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="specialized-subjects-ict">
					<Accordion.Control>All Specialized Subjects (ICT)</Accordion.Control>
					<Accordion.Panel>
						<SimpleGrid
							mt="lg"
							cols={3}
							breakpoints={[
								{ maxWidth: "sm", cols: 1 },
								{ maxWidth: "md", cols: 2 },
								{ maxWidth: "lg", cols: 3 },
							]}
						>
							{guides?.map(
								(item) =>
									item.strand === "ict" && (
										<SubjectCard key={item._id} item={item} />
									),
							)}
						</SimpleGrid>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</Container>
	);
};

export default CurriculumGuide;