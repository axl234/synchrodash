// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import uglify from 'rollup-plugin-uglify';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs'
	},
	plugins: [
		// resolve(), // tells Rollup how to find date-fns in node_modules
		// commonjs(), // converts date-fns to ES modules
		// production && uglify() // minify, but only in production
	]
};
