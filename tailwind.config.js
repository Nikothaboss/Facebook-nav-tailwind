module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#242526",
        "secondary": "#484a4d",
        "text-color": "#dadce1",
        "border-color": "#474a4d"
      },
      spacing: {
        "15": "60px",
        "border-radius": "8px",
        "1.5": "5px",
        "0.5": "2px",
        "14.5": "58px",
        "75": "300px",
        "45": "45%",
        "50": "50px"

      },
      transitionProperty: {
        "height": "height",
        "background": "background",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
