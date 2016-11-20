export default class Translator {
  constructor(params) {
    this.lang = params.lang;
    this.keys = params.keys ? params.keys : require(`../../i18n/${this.lang}`);
  }

  t(key) {
    return this.keys[key] ? this.keys[key] : key
  }
}
