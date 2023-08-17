/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {

    
    extend: {

    

      padding:{
        'mobilePadding': '16px',
        'tabletPadding' : '36px',
        'desktopPadding' : '65px',
      },

    colors:{
      'primary': '#242943',
      'secondary' : '#2A2F4A'
    }
      


    },

  },
  plugins: [],
}
