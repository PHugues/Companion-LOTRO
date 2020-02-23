module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    },
    electronBuilder: {
      builderOptions: {
        win: {
          icon: './public/favicon.ico'
        }
      }
    }
  }
}
