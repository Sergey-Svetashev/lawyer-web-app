/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    container: false,
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        "white-0.7": "rgba(255, 255, 255, .7)",
        aubergine: "rgb(46, 9, 24)",
      },
      boxShadow: {
        "shadow-light": "box-shadow: 0 0 10px rgba(255, 255, 255, 0.5)",
        "shadow-white": "box-shadow: 5px 5px 15px rgba(255, 255, 255, 0.5)",
        "shadow-inset-white": "box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.5), inset 0 0 5px #fff",
        "shadow-black-0.5": "box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5)",
        "shadow-aubergine": "box-shadow: 0 0 2px rgb(46, 9, 24)",
      },
	  borderColor: {
		aubergine: "rgb(46, 9, 24)",
	  }
    },
  },
  plugins: [],
};
