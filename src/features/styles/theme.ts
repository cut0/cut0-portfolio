export const color = {
  minsk: "#49337D",
  steelGray: "#2C2738",
  tanHide: "#F68C4E",
  white: "#FFFFFF",
  carnation: "#FF515B",
  springGreen: "#23FF95",
} as const;

export const basic = {
  primary: color.minsk,
  error: color.carnation,
  success: color.springGreen,
} as const;

export const background = {
  default: color.steelGray,
  light: color.minsk,
  highLight: color.white,
} as const;

export const text = {
  default: color.white,
  notice: color.tanHide,
} as const;

export const fontSize = {
  s1: "2.5rem",
  s2: "2rem",
  s3: "1.75rem",
  s4: "1.5rem",
  s5: "1.25rem",
  s6: "1rem",
  s7: ".875rem",
} as const;
