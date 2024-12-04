const minify = require('@node-minify/core')
//const babelMinify = require('@node-minify/babel-minify')
const uglifyJS = require('@node-minify/uglify-js')
const cleanCSS = require('@node-minify/clean-css')

/*minify({
  compressor: babelMinify,
  input: '../index.js',
  output: '../index.js',
  callback: function(err, min) {
    if (!err) {
      console.log('babelMinify done')
    }
  }
})*/

minify({
    compressor: uglifyJS,
    input: '../index.js',
    output: '../index.js',
    options: {
      warnings: true,
      mangle: {
        toplevel: true
      },
      compress: {
        toplevel: true
      }
    },
    callback: function(err, min) {
      if (!err) {
        console.log('uglifyJS done (index.js)')
      }
    }
})

minify({
  compressor: uglifyJS,
  input: '../scripts/urlscriptloader.js',
  output: '../scripts/min/usl.js',
  options: {
    warnings: true,
    mangle: {
      toplevel: true
    },
    compress: {
      toplevel: true
    }
  },
  callback: function(err, min) {
    if (!err) {
      console.log('uglifyJS done (usl.js)')
    }
  }
})

minify({
  compressor: cleanCSS,
  input: '../index.css',
  output: '../index.min.css',
  options: {
    advanced: true,
    aggressiveMerging: true
  },
  callback: function(err, min) {
    if (!err) {
      console.log('cleanCSS done (index.css)')
    }
  }
})

setTimeout(()=>{},2000)