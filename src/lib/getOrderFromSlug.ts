// Helper to extract order from slug (e.g., "2-tennis-database" → 2)
export default function getOrderFromSlug(slug: string): number {
	const match = slug.match(/^(\d+)-/);
	return match ? parseInt(match[1], 10) : 999;
}
