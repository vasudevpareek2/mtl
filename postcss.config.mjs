import tailwindNesting from 'tailwindcss/nesting';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const config = {
  plugins: [
    tailwindNesting,
    tailwindcss,
    autoprefixer({
      flexbox: 'no-2009'
    }),
  ],
};

export default config;
