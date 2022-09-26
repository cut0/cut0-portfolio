import { globalStyle } from "@vanilla-extract/css";
import { background, fontSize, text } from "./theme";

globalStyle("html", {
  fontSize: "16px",
  textSizeAdjust: "100%",
  color: text.default,
  backgroundColor: background.default,
});

globalStyle("body", {
  fontFamily: "sans-serif",
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("li", {
  listStyleType: "none",
});

globalStyle("p", {
  fontSize: fontSize.s7,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: fontSize.s6,
    },
  },
});

globalStyle("span", {
  fontSize: fontSize.s7,
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: fontSize.s6,
    },
  },
});
