import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Github : Clone docs repo (in Action) to ./docs/notes and load them 
// Non CI : Load Markdown and MDX files in the `src/content/blog/`
const blogFolderPath = import.meta.env.PROD ? './docs/notes': 'src/content/blog';

const blog = defineCollection({
	loader: glob({ base: blogFolderPath, pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
