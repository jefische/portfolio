/**
 * @type {import('prettier').Options}
 */
module.exports = {
	plugins: [require.resolve("prettier-plugin-astro")], // I don't think this plugin is actually required for individual saves since the Astro plugin includes it. However, to run my npm clean script it does need the plugin
	overrides: [
		{
			files: "**/*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	tabWidth: 4,
	useTabs: true,
	printWidth: 120,
};
