let mix = require('laravel-mix');
let tailwind = require('tailwindcss');
let build = require('./tasks/build.js');
require('laravel-mix-purgecss');


// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

// mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');
mix.webpackConfig({
  plugins: [
    build.jigsaw,
    // build.browserSync(),
    build.watch([
      'source/**/*.md',
      'source/**/*.php',
      '!source/**/_tmp/*',
      'source/_assets/*.css',
      'source/_assets/*.js',
      'source/_assets/*.vue'
    ]),
  ]
});

mix.js('source/_assets/js/main.js', 'js')
    .postCss('source/_assets/css/main.css', 'css')
    .options({
      processCssUrls: false,
      postCss: [
        tailwind('./tailwind.js')
      ]
    })
    .purgeCss({
      folders: ['source'],
    })
    .version();
