/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions & import('@ianvs/prettier-plugin-sort-imports').PluginConfig } */
const config = {
  useTabs: false,
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(react-dom/(.*)$)|^(react-dom$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^~/types/(.*)$|^~/types$',
    '^~/config/(.*)$',
    '^~/lib/(.*)$',
    '^~/hooks/(.*)$',
    '^~/components/ui/(.*)$',
    '^~/components/(.*)$',
    '^~/features/(.*)$',
    '^~/assets/(.*)$',
    '',
    '^[./]',
  ],
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
};

export default config;
