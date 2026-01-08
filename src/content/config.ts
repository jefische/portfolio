import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	pubDate: z.coerce.date(),
	updatedDate: z.string().optional(),
	heroImage: z.string().optional(),
	badge: z.string().optional(),
	tags: z
		.array(z.string())
		.refine((items) => new Set(items).size === items.length, {
			message: "tags must be unique",
		})
		.optional(),
	order: z.number(),
});

const projectSchema = z.object({
	title: z.string(),
	description: z.string(),
	custom_link_label: z.string(),
	custom_link: z.string().optional(),
	github_link: z.string().optional(),
	updatedDate: z.coerce.date(),
	badge: z.string().optional(),
	heroImage: z.string().optional(),
	imgBg: z.string().optional(),
	tagsJS: z
		.array(z.string())
		.refine((items) => new Set(items).size === items.length, {
			message: "tags must be unique",
		})
		.optional(),
	tagsCSS: z
		.array(z.string())
		.refine((items) => new Set(items).size === items.length, {
			message: "tags must be unique",
		})
		.optional(),
	order: z.number().optional(),
	cssId: z.string(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
	blog: blogCollection,
	projects: projectCollection,
};
