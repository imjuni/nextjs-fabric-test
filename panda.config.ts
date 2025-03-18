import { defineConfig } from '@pandacss/dev';
import { divRecipe } from './src/styled-recipes/div';
import { h1Recipe } from './src/styled-recipes/h1';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/app/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#0FEE0F' },
          secondary: { value: '#EE0F0F' },
          primaryFont: { value: '#333' },
        },
        // fonts: {
        //   body: { value: 'system-ui, sans-serif' },
        // },
      },
      recipes: {
        div: divRecipe,
        h1: h1Recipe,
      },
    },
  },

  // The output directory for your css system
  outdir: 'src/styled-system',
});
