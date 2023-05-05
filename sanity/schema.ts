import { type SchemaTypeDefinition } from "sanity";
import announcements from "./schemas/announcements";
import author from "./schemas/author";
import downloadables from "./schemas/downloadables";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [announcements, author, downloadables],
};
