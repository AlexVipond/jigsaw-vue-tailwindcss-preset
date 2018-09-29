function computeLanguage (availableLanguages, defaultLanguage) {
  let language = navigator.language
  let foundIndex = availableLanguages.findIndex(lang => lang.code === language)

  if (foundIndex > -1) {
    language = language
  } else if(language.length > 2) {
    language = language.slice(0, 2)
    foundIndex = availableLanguages.findIndex(lang => lang.code === language)

    if(foundIndex > -1) {
      language = language
    } else {
      language = defaultLanguage
    }
  } else if(language.length === 2) {
    foundIndex = availableLanguages.findIndex(lang => lang.code.slice(0, 2) === language)

    if(foundIndex > -1) {
      language = language
    } else {
      language = defaultLanguage
    }
  }

  return language
}

export default computeLanguage
