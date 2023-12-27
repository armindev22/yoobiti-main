/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
    },
    extend: {
      colors: {
        primary: {
          5: '#246CDA',
          10: '#EEF2F8',
          20: '#0B2041',
        },
        secondary: {
          10: '#365687',
          20: '#DBE1ED',
          30: '#101A28',
        },
        tertiary: {
          1: "#E7FFF3",
          10: "#4085DC",
          20: "#ECF3FB",
          30: "#132842",
          40: "#B7A92D",
          50: "#F9F6D7",
          60: "#887D20",
          70: "#198953",
          80: "#D3F7E6",
          90: "#0F5232",
        },
        text: {
          10: "#CCCCCC",
          20: "#AEAEAE",
          30: "#1E1E1E",
          40: "#B4B4B4",
          50: "#F0F3FD",
        },
        error: {
          10: "#FF4444",
          20: "#FFEDED",
          30: "#490E0E",
        },
        surface: {
          10: "#FAFAFA",
          20: "#F5F5F5",
          30: "#EEEEEE",
          40: "#ECEAEA",
        },
        stroke: {
          10: "#F4F4F4",
          20: "#EFEFEF",
          30: "#E9E9E9",
          40: "#E2E0E0",
          50: "#DFDFDF",
        },

      },
      fontSize: {
        h1: '56px',
        h2: '48px',
        h3: '42px',
        h4: '32px',
        h5: '28px',
        h6: '24px',
        h7: '20px',
        h8: '18px',
        h9: '16px',
        h10: '14px',
        h11: '12px',
        h12: '10px'
      },
      borderRadius: {
        10: '10px',
      }
    },
  },
  plugins: [],
}

