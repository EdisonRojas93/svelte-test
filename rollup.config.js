import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import autoPreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

const plugins = [
	svelte({
		// enable run-time checks when not in production
		dev: !production,
		// we'll extract any component CSS out into
		// a separate file — better for performance
		customElement: true,
		preprocess: autoPreprocess()
	}),

	// If you have external dependencies installed from
	// npm, you'll most likely need these plugins. In
	// some cases you'll need additional configuration —
	// consult the documentation for details:
	// https://github.com/rollup/rollup-plugin-commonjs
	resolve(),
	commonjs(),

	// Watch the `public` directory and refresh the
	// browser on changes when not in production
	!production && livereload('public'),

	// If we're building for production (npm run build
	// instead of npm run dev), minify
	production && terser()
];

export default [{
  input: 'src/components/Buttons.svelte',
  output: {
		minify: true,
		production: true,
    file: 'public/buttons.min.js',
    format: 'iife'
	},
	plugins
},{
	input: 'src/components/Calculator.svelte',
  output: {
		minify: true,
		production: true,
    file: 'public/calculator.min.js',
    format: 'iife'
	},
	plugins
}];
