/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'itim': ['"Itim"', 'cursive'],
      'Julius': ['Julius Sans One', 'sans-serif'],
      'josefin': ['Josefin Slab', 'serif'],
    },
    extend: {
      colors: {
        minhaCor: "#160202",
        marromAlaranjado: "#984137",
        marromEscurado: "#4A201A"
      },

      backgroundImage: {
        'barcoFundo': "url('/barcoFundo.png')",
      }
    },
  },
  plugins: [],
}