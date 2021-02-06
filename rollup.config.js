import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import postcss from 'rollup-plugin-postcss'

export default {
    input: "src/index.js",
    output: {
      file: "dist/PPjslib.min.js",
      format: "iife", //cjs for production
      name: "PPjslib",
      extend: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
      }),
      postcss({
        plugins: [
          require("cssnano")({
            preset: "default"
          })
        ],
        extract: true
      }),
      uglify.uglify()
    ]
}