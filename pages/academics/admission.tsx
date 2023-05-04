import {
	Container,
	Flex,
	Group,
	Image,
	List,
	SimpleGrid,
	Stepper,
	Text,
	Title,
} from "@mantine/core";

import dayjs from "dayjs";
import { useState } from "react";

const AdmissionPage = () => {
	const [activeStep, setActiveStep] = useState(0);

	return (
		<Container>
			<Title>Admission Process</Title>

			<Text>
				We are currently accepting applications for the {dayjs().year()}-
				{dayjs().year() + 1} school year.
			</Text>

			<Text size="lg" fw={"bold"} mt={75} mb="md">
				Follow the steps below to apply for admission to the school.
			</Text>
			<Stepper active={activeStep} onStepClick={setActiveStep} breakpoint="sm">
				<Stepper.Step label="First Step" description="Prepare your papers">
					<Container>
						<SimpleGrid
							cols={1}
							breakpoints={[
								{ minWidth: "xs", cols: 1 },
								{ minWidth: "md", cols: 2 },
							]}
						>
							<Image
								src={
									"https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								}
								height={200}
							/>
							<Flex direction="column" gap="md">
								<Text>
									Provide the original and photocopy of the following documents:
								</Text>
								<List>
									<List.Item>PSA Copy of your Certificate of Birth</List.Item>
									<List.Item>School Form 9 (Latest Report Card)</List.Item>
									<List.Item>School Form 10 (Permanent Record)</List.Item>
									<List.Item>
										1x1 ID Picture with with background and formal attire
									</List.Item>
									<List.Item>Completion Certificate</List.Item>
									<List.Item>Good Moral Certificate</List.Item>
								</List>
							</Flex>
						</SimpleGrid>
					</Container>
				</Stepper.Step>
				<Stepper.Step label="Second Step" description="Assessment">
					<Container>
						<SimpleGrid
							cols={1}
							breakpoints={[
								{ minWidth: "xs", cols: 1 },
								{ minWidth: "md", cols: 2 },
							]}
						>
							<Image
								src={
									"https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								}
								height={200}
							/>
							<Flex direction="column" gap="md">
								<Text>
									If you already secured your papers, you can now proceed to the
									registrar's office for assessment.
								</Text>
							</Flex>
						</SimpleGrid>
					</Container>
				</Stepper.Step>
				<Stepper.Step label="Last Step" description="Fill up your ERF">
					<Container>
						<SimpleGrid
							cols={1}
							breakpoints={[
								{ minWidth: "xs", cols: 1 },
								{ minWidth: "md", cols: 2 },
							]}
						>
							<Image
								src={
									"https://images.pexels.com/photos/7578209/pexels-photo-7578209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								}
								height={200}
							/>
							<Flex direction="column" gap="md">
								<Text>
									After the assessment, you will be given an Enrollment
									Registration Form (ERF) to fill up for sectioning and filing
									purposes.
								</Text>
								<Text>
									We shall process your admission and update you with our final
									decision within five (5) working days.
								</Text>
							</Flex>
						</SimpleGrid>
					</Container>
				</Stepper.Step>
			</Stepper>

			<Text mt={50}>
				For more information, please contact us at (02) 123-4567 or email us at
				somethingemail@email.com
			</Text>
		</Container>
	);
};

export default AdmissionPage;
