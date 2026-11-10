import 'styled-components';
import { theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    typography: typeof theme.typography;
    spacing: typeof theme.spacing;
    borderRadius: typeof theme.borderRadius;
    shadows: typeof theme.shadows;
    transitions: typeof theme.transitions;
    breakpoints: typeof theme.breakpoints;
  }
}
