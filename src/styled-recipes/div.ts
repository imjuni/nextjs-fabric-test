import { defineRecipe } from '@pandacss/dev';

export const divRecipe = defineRecipe({
  className: 'div',
  description: 'div 클래스 recipe',
  base: {
    display: 'flex',
    boxSizing: 'border-box',
  },
  variants: {
    box: {
      coloring: { color: '#333' },
    },
  },
  defaultVariants: {
    box: 'coloring',
  },
});
