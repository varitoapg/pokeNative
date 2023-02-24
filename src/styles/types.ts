export interface Color {
  base: string;
  darkest?: string;
  light?: string;
  lightest?: string;
}

export interface ThemeColour {
  primary: Color;
  secondary: Color;
  whites: Color;
  errors: Color;
  successColor: Color;
}

export interface FontSizes {
  display: number;
  headline: number;
  title: number;
  body: number;
}

export interface FontWeights {
  regular: string;
  bold: string;
}

export interface ThemeFonts {
  sizes: FontSizes;
  weights: FontWeights;
}
