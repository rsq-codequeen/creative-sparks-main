module.exports = {
  locales: ['en', 'es'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: 'src/locales/{locale}/messages', // Make sure this path matches where your locale files are
      include: ['src'], // Folder to extract translatable content from
    },
  ],
  format: 'po',
};
