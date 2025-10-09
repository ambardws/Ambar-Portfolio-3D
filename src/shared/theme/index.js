/**
 * Design System Theme Configuration
 * Centralized styling tokens for consistent design
 */

export const theme = {
  colors: {
    primary: "#915eff",
    primaryHover: "#7c4dff",
    secondary: "#aaa6c3",
    tertiary: "#151030",
    white: "#ffffff",
    black: "#000000",
    blackLight: "#100d25",
    textLight: "#dfd9ff",
  },
  
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },
  
  typography: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Fira Code", "monospace"],
    },
    
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
  },
  
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.25rem",
    full: "9999px",
  },
  
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    card: "0px 35px 120px -15px #211e35",
    primary: "0px 20px 20px -15px #915eff",
  },
  
  animation: {
    duration: {
      fast: "0.2s",
      normal: "0.4s",
      slow: "0.6s",
      slower: "1s",
    },
    
    easing: {
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    },
  },
  
  breakpoints: {
    xs: "475px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

export default theme;