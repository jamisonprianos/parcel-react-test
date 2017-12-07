const printf = require('sprintf-js').vsprintf;

const languages = {
  default: require('../../lang/en-US.js'),
  en: require('../../lang/en-US.js'),
  es: require('../../lang/es.js')
};

const getTemplateString = (collection, keys) => {
  if (typeof collection === 'string') {
    return collection;
  }
  if (keys.length === 0) {
    return undefined;
  }
  const key = keys.shift();
  if (collection[key]) {
    return getTemplateString(collection[key], keys);
  }
  return undefined;
};

module.exports = language => (entry, ...rest) => {
  const currentLanguageData = languages[language] || languages.default;
  const templateString = getTemplateString(currentLanguageData, entry.split('.')) || getTemplateString(languages.default, entry.split('.'));
  return printf(templateString, rest);
};
