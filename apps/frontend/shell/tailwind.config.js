const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
console.log(__dirname);
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    ...createGlobPatternsForDependencies(join(__dirname, '../customer/')),
    ...createGlobPatternsForDependencies(join(__dirname, '../admin/')),
    ...createGlobPatternsForDependencies(join(__dirname, '../landing/')),
    ...createGlobPatternsForDependencies(join(__dirname, '../supplier/'))
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
