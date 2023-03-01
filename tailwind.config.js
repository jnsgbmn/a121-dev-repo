/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {
      fontFamily: {
        h1: ["Play fair Display"],
        p: ["Halyard"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
