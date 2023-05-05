export default {
	name: "dll",
	title: "Daily Lesson Logs",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "category",
			title: "Category",
			type: "string",
			options: {
				list: [
					{ title: "Core Subjects", value: "core-subjects" },
					{ title: "Specialized Subjects", value: "specialized-subjects" },
				],
			},
		},
		{
			name: "file",
			title: "File",
			type: "file",
			options: {
				storeOriginalFilename: false,
			},
		},
	],
};