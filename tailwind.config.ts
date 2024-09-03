import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/{app,pages,components,styles}/**/**.{js,ts,jsx,tsx,mdx,css,scss}"
  ],
  theme: {
  },
  plugins: [],
};
export default config;
