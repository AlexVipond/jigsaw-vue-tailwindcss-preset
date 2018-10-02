# Alex Vipond's Jigsaw/Vue/TailwindCSS Preset

This code collection provides opinionated scaffolding to satisfy basic needs of static marketing sites.

In my opinion, all marketing sites need:
- Value proposition (statement of the core value you provide)
- Primary call to action (you really want people to do this)
- Secondary call to action (if someone doesn't want to do the other thing, you want them to do this)

Depending on the thing you're marketing, you may also need:
- Contact form
- Email newsletter subscription form
- Photo slideshow
- Blog
- Links to social media
- Event calendar
- Language changer, for multilingual customer bases

And on any modern website, you need:
- Fast loading times
- Responsive design (design that changes based on screen size, to keep things nice-looking and easy-to-use across all devices)
- Security

To get a sense of what this can look like, [check out my demo site](https://awesome-neumann-965856.netlify.com/) (the funky URL comes from free hosting on [Netlify](netlify.com)).

## How to get a website like this

If you're not a developer, feel free to contact me using the form on the [demo site](https://awesome-neumann-965856.netlify.com/) or my [personal website](https://alexvipond.app). I do freelance web design, so let's get in touch!

If you _are_ a developer, or just want to take a crack at DIYing, follow the instructions below.


## How to develop using this preset

Make sure you've installed Composer and NPM, then run these commands in the terminal:

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

If you've installed [Laravel Valet](https://laravel.com/docs/5.7/valet), your site will be live at `[dirname].test`. Otherwise, run `npm run watch` to serve the website and live-update as you change the code.


#### Deploy to [Netlify](https://netlify.com)

Deploy command is `./vendor/bin/jigsaw build production`

Deploy directory is `build_production`

Add one environment variable, `PHP_VERSION`, with the value set to `7.2`.


## Stack

#### Core tooling
- [Jigsaw](https://jigsaw.tighten.co)
- [Vue.js](https://vuejs.org)
- [TailwindCSS](https://tailwindcss.com)
- [PurgeCSS](https://www.purgecss.com/) via [spatie/laravel-mix-purgecss](https://github.com/spatie/laravel-mix-purgecss)

#### CSS utility classes
- TailwindCSS defaults, configured to use numeric color shades and font weights (e.g. `font-600` and `gray-200`)
- Custom TailwindCSS utilities for text shadows, transitions, rotations, translations, and text color inheritance
- Button component class, with modifiers for size and hover behavior


## Useful third party services

- [Formspree](https://formspree.io)
- [Cloudinary](https://cloudinary.com)
- [Unsplash](https://unsplash.com)
- [Netlify](https://netlify.com)
- [NetlifyCMS](https://netlifycms.org)
