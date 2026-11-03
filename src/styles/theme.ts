export const theme = {
  colors: {
    // Primary - Neon Cyan
    primary: {
      50: '#e0f7ff',
      100: '#b3ecff',
      200: '#80dfff',
      300: '#4dd2ff',
      400: '#1ac5ff',
      500: '#00b8ff',
      600: '#0096e6',
      700: '#0078cc',
      800: '#005eb3',
      900: '#004a99',
    },
    // Secondary - Neon Purple
    secondary: {
      50: '#f5e6ff',
      100: '#e8b3ff',
      200: '#d680ff',
      300: '#c34dff',
      400: '#b01aff',
      500: '#9d00ff',
      600: '#7d00cc',
      700: '#6100a3',
      800: '#4a007a',
      900: '#380059',
    },
    // Accent - Neon Pink
    accent: {
      50: '#ffe6f2',
      100: '#ffb3d6',
      200: '#ff80b8',
      300: '#ff4d9e',
      400: '#ff1a84',
      500: '#ff0069',
      600: '#cc0054',
      700: '#a30042',
      800: '#7a0033',
      900: '#590027',
    },
    // Backgrounds
    background: {
      primary: '#0a0a0f',
      secondary: '#12121a',
      tertiary: '#1a1a24',
      glass: 'rgba(255, 255, 255, 0.05)',
      glassHover: 'rgba(255, 255, 255, 0.1)',
    },
    // Text
    text: {
      primary: '#ffffff',
      secondary: '#a0a0b0',
      tertiary: '#606070',
    },
    // Gradients
    gradient: {
      primary: 'linear-gradient(135deg, #00b8ff 0%, #9d00ff 100%)',
      secondary: 'linear-gradient(135deg, #ff0069 0%, #00b8ff 100%)',
      dark: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)',
    },
  },
  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(0, 184, 255, 0.3)',
    glowPurple: '0 0 20px rgba(157, 0, 255, 0.3)',
    glowPink: '0 0 20px rgba(255, 0, 105, 0.3)',
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

export type Theme = typeof theme;
