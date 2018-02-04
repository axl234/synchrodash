import uglify from 'rollup-plugin-uglify';
import copy from 'rollup-plugin-copy';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

const server = {
  input: 'src/server.js',
  output: {
    file: 'build/server.js',
    format: 'cjs',
  },
  plugins: [
    commonjs(),
    copy({
      'src/template.html': 'build/index.html',
    }),
    uglify(),
  ],
  watch: {
    include: 'src/**',
  },
};

const client = {
  input: 'src/client.js',
  output: {
    file: 'build/assets/client.js',
    format: 'iife',
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    globals(),
    builtins(),
    uglify(),
  ],
};

export default [
  server,
  client,
];
