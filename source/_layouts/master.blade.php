<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id={{ $page->google_analytics_id }}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '{{ $page->google_analytics_id }}');
    </script>

    <title>{{ $page->full_name }}</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- CSP -->

    <!-- <noscript>
        <link rel="stylesheet" href="/css/deferred.css">
    </noscript> -->

    <meta name="description" content="{{ $page->description }}">
    <meta name="keywords" content="{{ $page->keywords }}">
    <meta name="author" content="Alex Vipond and {{ $page->name }}">

    <link rel="shortcut icon" href="assets/media/images/favicon.png">

    <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
  </head>

  <body class="antialiased font-sans bg-primary-700">
    @yield('body')

    @include('_partials.footer')
  </body>
</html>
