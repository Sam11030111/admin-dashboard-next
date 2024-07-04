/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex: {
        5: "5 1 0%",
        4: "4 1 0%",
        3: "3 1 0%",
        2: "2 1 0%",
      },
      backgroundImage: {
        "gradient-to-top": "linear-gradient(to top, #182237, #253352)",
      },
    },
  },
  plugins: [],
};
