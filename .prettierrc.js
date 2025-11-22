/** @type {import("prettier").Config} */
const config = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'es5',
	printWidth: 100,
	plugins: ['prettier-plugin-svelte'],
};

export default config;
