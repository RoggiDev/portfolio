export const getLocale = () => {
  return window.location.pathname.startsWith("/es") ? "es" : "en";
};

export const getTranslations = async () => {
  const locale = getLocale();

  return await import(`../data/locales/${locale}.js`);
};
