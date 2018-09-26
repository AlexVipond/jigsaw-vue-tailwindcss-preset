# Alex Vipond's Jigsaw/Vue/TailwindCSS Preset

This code collection provides opinionated scaffolding to satisfy basic needs of static marketing sites.

## Core tooling
- [Jigsaw](https://jigsaw.tighten.co)
- [Vue.js](https://vuejs.org)
- [TailwindCSS](https://tailwindcss.com)
- [PurgeCSS](https://www.purgecss.com/) via [spatie/laravel-mix-purgecss](https://github.com/spatie/laravel-mix-purgecss)

## Utility classes
- TailwindCSS defaults
- Custom TailwindCSS utilities for text shadows, transitions, rotations, translations, and text color inheritance
- Button component class, with modifiers for size and hover behavior

## Vue components
- Modal background
- Dropdown menu
- Info tooltip
- Contact form
- Language setter
- Value proposition
- Primary and secondary calls to action

## How to use

First:
```
git clone https://github.com/AlexVipond/jigsaw-vue-tailwindcss-preset.git [dirname]
```

Then:
```
composer require tightenco/jigsaw
```

Then:
```
npm install
```

Then:
```
npm run dev
```

If you're using [Laravel Valet](https://laravel.com/docs/5.7/valet), your site will be live at `[dirname].test`.


## Deploy to [Netlify](https://netlify.com)

Deploy command is `./vendor/bin/jigsaw build production`

Deploy directoy is `build_production`

Add one environment variable, `PHP_VERSION` with the value set to `7.2`.
