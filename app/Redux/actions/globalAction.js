export const setLanguageAndCache = (lang, cache, styles) => {
  return {
    type: 'SET_LANG_&_CACHE',
    lang: lang,
    cache: cache,
    styles: styles,
  };
};

export const setUser = data => {
  return {
    type: 'SET_USER',
    user: data,
  };
};
