@extends('_layouts.master')

@section('body')

<div
  id="app"
  @modal-opened="console.log('here')"
  @modal-closed="totalOpenModals--">

  <portal-target name="modals"></portal-target>

  <nav class="absolute z-30 pin-t pin-l pin-r container mx-auto flex items-center py-4 px-8 text-primary-gray-100">
    <language-changer
      :language="language"
      :languages="languages"
      class="rounded-sm p-1 ml-auto h-8 opacity-70 hover:opacity-100 transition"
      options-bg-color="bg-white"
      options-text-color="text-primary-600"
      options-z-index="z-30"
      option-hover-bg-color="hover:bg-primary-200"
      @set-language="setLanguage">
    </language-changer>
  </nav>

  <header id="landing-page" class="flex relative h-screen min-h-400 flex items-center bg-center bg-no-repeat bg-fixed bg-cover" style="background-image: url({{ $page->landing_page_image }})">
    <div class="absolute z-10 pin-t pin-l w-full h-full bg-true-black-50"></div>

    <div class="relative z-20 container mx-auto px-8 py-16">
      <value-proposition :language="language"></value-proposition>

      <div class="inline-flex flex-col sm:flex-row">
        <button class="mb-6 sm:mb-0 sm:mr-6" type="button" name="button">
          <call-to-action-primary
            class="btn md:btn-lg w-full hover:btn-grow bg-primary tracking-wide font-400 text-primary-100"
            :language="language"
            :first-letter-is-upper-case="true"
            :show-icon-before-message="true"
            :show-icon-after-message="false">
          </call-to-action-primary>
        </button>


        <button type="button" name="button">
          <call-to-action-secondary
            class="btn md:btn-lg w-full hover:btn-grow bg-white text-primary-600"
            :language="language"
            :first-letter-is-upper-case="true"
            :show-icon-before-message="true"
            :show-icon-after-message="false">
          </call-to-action-secondary>
        </button>
      </div>
    </div>
  </header>
</div>

<script src="{{ mix('js/main.js', 'assets/build') }}"></script>

@endsection
