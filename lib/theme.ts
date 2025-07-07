export const theme = {
  colors: {
    primary: {
      pink: "#FF6691",
      red: "#FF7A7A",
      blue: "#6568FF",
      gold: "#D4AF37",
    },
    gradients: {
      pinkToBlue: "linear-gradient(135deg, #FF6691 0%, #6568FF 100%)",
      redToBlue: "linear-gradient(135deg, #FF7A7A 0%, #6568FF 100%)",
      heroBackground:
        "linear-gradient(135deg, #FF7A7A 0%, #FF6691 50%, #6568FF 100%)",
    },
    background: {
      light: "#ffffff",
      lightGray: "#f8f9fa",
      dark: "#1a1a1a",
      pinkLight: "rgba(255, 102, 145, 0.1)",
      blueLight: "rgba(101, 104, 255, 0.1)",
      gradientLight:
        "linear-gradient(135deg, rgba(255, 102, 145, 0.1) 0%, rgba(101, 104, 255, 0.1) 100%)",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#6b7280",
      white: "#ffffff",
      dark: "#1a1a1a",
      lightGray: "#9ca3af",
      pink: "#FF6691",
      blue: "#6568FF",
    },
    border: {
      light: "#e5e7eb",
      dark: "#374151",
      pink: "#FF6691",
      blue: "#6568FF",
    },
  },
  typography: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "5rem",
    "5xl": "6rem",
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  animation: {
    duration: {
      fast: "0.15s",
      normal: "0.3s",
      slow: "0.5s",
    },
    easing: {
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
} as const;

export type Theme = typeof theme;

// 미디어 쿼리 헬퍼
export const mediaQuery = {
  xs: `@media (min-width: ${theme.breakpoints.xs})`,
  sm: `@media (min-width: ${theme.breakpoints.sm})`,
  md: `@media (min-width: ${theme.breakpoints.md})`,
  lg: `@media (min-width: ${theme.breakpoints.lg})`,
  xl: `@media (min-width: ${theme.breakpoints.xl})`,
  "2xl": `@media (min-width: ${theme.breakpoints["2xl"]})`,
} as const;
