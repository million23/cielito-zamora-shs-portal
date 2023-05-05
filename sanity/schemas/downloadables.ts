export default {
	name: "downloadables",
	title: "Downloadables",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "string" }],
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