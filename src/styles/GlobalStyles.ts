import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary-500: ${theme.colors.primary[500]};
    --color-secondary-500: ${theme.colors.secondary[500]};
    --color-accent-500: ${theme.colors.accent[500]};
    --color-bg-primary: ${theme.colors.background.primary};
    --color-bg-secondary: ${theme.colors.background.secondary};
    --color-bg-tertiary: ${theme.colors.background.tertiary};
    --color-text-primary: ${theme.colors.text.primary};
    --color-text-secondary: ${theme.colors.text.secondary};
    --gradient-primary: ${theme.colors.gradient.primary};
    --gradient-secondary: ${theme.colors.gradient.secondary};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    line-height: ${theme.typography.lineHeight.normal};
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background.primary};
    min-height: 100vh;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.typography.fontWeight.semibold};
    line-height: ${theme.typography.lineHeight.tight};
    margin-bottom: ${theme.spacing.md};
  }

  h1 { font-size: ${theme.typography.fontSize['5xl']}; }
  h2 { font-size: ${theme.typography.fontSize['4xl']}; }
  h3 { font-size: ${theme.typography.fontSize['3xl']}; }
  h4 { font-size: ${theme.typography.fontSize['2xl']}; }

  p {
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.text.secondary};
  }

  a {
    color: ${theme.colors.primary[500]};
    text-decoration: none;
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.primary[400]};
    }
  }

  img, picture {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, button, textarea, select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  ul, ol {
    list-style: none;
  }

  :focus-visible {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 2px;
  }

  ::selection {
    background-color: ${theme.colors.primary[500]};
    color: ${theme.colors.background.primary};
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary[500]};
    border-radius: ${theme.borderRadius.full};

    &:hover {
      background: ${theme.colors.primary[400]};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .skip-link {
    position: absolute;
    top: -100%;
    left: 0;
    background: ${theme.colors.primary[500]};
    color: ${theme.colors.background.primary};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    z-index: 9999;
    transition: top ${theme.transitions.normal};

    &:focus {
      top: 0;
    }
  }

  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.lg};

    @media (min-width: ${theme.breakpoints.md}) {
      padding: 0 ${theme.spacing.xl};
    }
  }

  .glass {
    background: ${theme.colors.background.glass};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .gradient-text {
    background: ${theme.colors.gradient.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glow {
    box-shadow: ${theme.shadows.glow};
  }

  .glow-purple {
    box-shadow: ${theme.shadows.glowPurple};
  }

  .glow-pink {
    box-shadow: ${theme.shadows.glowPink};
  }
`;
