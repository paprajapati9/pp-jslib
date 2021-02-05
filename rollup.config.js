export default {
    input: "src/index.js",
    output: {
      file: "dist/PPjslib.min.js",
      format: "iife", //cjs for production
      name: "PPjslib",
      extend: true,
      sourceMap: 'inline'
    }
}