/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all relevant project files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default font for body
        heading: ['Roboto', 'sans-serif'], // Font for headings
      },
      fontSize: {
        sm: '0.875rem', // Small text
        base: '1rem', // Base text size
        lg: '1.125rem', // Large text
        xl: '1.25rem', // Extra large
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      colors: {
        primary: '#1DA1F2', // Example primary color
        secondary: '#14171A', // Example secondary color
        accent: '#FFAD1F', // Accent color
        success: '#28a745', // Success color for notifications or buttons
        warning: '#ffc107', // Warning color
        danger: '#dc3545', // Error or danger color
      },
      spacing: {
        72: '18rem', // Custom spacing utility
        84: '21rem',
      },
      borderRadius: {
        xl: '1.25rem', // Custom border radius
      },
    },
    screens: {
      '2xl': '1440px', // Custom breakpoint for larger screens
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Plugin for blog and rich text
    require('@tailwindcss/forms'), // Plugin for form elements
  ],
};
