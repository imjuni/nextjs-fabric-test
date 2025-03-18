import { defineRecipe } from '@pandacss/dev';

export const h1Recipe = defineRecipe({
  className: 'h1',
  description: 'h1 클래스 recipe',
  base: {
    display: 'flex',
    boxSizing: 'border-box',
  },
  variants: {
    box: {
      plain: {
        fontSize: '2rem',
        color: 'primary-fron',
        marginBottom: '1rem',
      },
    },
  },
  defaultVariants: {
    box: 'plain',
  },
});
