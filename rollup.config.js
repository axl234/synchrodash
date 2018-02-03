// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import uglify from 'rollup-plugin-uglify';
import copy from 'rollup-plugin-copy';

// const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    file: 'build/bundle.js',
    format: 'cjs',
  },
  plugins: [
    // resolve(), // tells Rollup how to find date-fns in node_modules
    // commonjs(), // converts date-fns to ES modules
    // production && uglify() // minify, but only in production
    copy({
      'src/template.html': 'build/index.html',
    }),
  ],
  watch: {
    include: 'src/**',
  },
};
