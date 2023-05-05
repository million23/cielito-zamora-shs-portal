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
			name: "file",
			title: "File",
			type: "file",
			options: {
				storeOriginalFilename: false,
			},
		},
	],
};