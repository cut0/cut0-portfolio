import { style } from "@vanilla-extract/css";
import { fontSize, text } from "../../features/styles/theme";

export const Header = style({
  padding: "16px",
  "@media": {
    "screen and (min-width: 768px)": {
      padding: "32px",
    },
  },
});

export const JumpLink = style({
  color: text.notice,
  fontWeight: "bold",
  display: "inline-flex",
  alignItems: "center",
});

export const JumpLinkTitle = style({
  fontWeight: "bold",
  marginLeft: "8px",
});

export const MainContainer = style({
  maxWidth: "1024px",
  margin: "0 auto",
  padding: "0 16px 32px 16px",
  display: "grid",
  gap: "32px",
});

export const IntroContainer = style({
  display: "grid",
  gap: "16px",
  justifyContent: "center",
});

export const IntroTitle = style({
  textAlign: "center",
});

export const CardListContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
  gap: "16px",
});

export const CardContainer = style({
  display: "block",
  color: text.default,
  boxShadow: "9px 9px 16px #252130,-9px -9px 16px #332d40",
  borderRadius: "16px",
  padding: "24px",
  selectors: {
    "&:focus": {
      boxShadow: "inset 9px 9px 16px #252130,inset -9px -9px 16px #332d40",
    },
    "&:hover": {
      boxShadow: "inset 9px 9px 16px #252130,inset -9px -9px 16px #332d40",
    },
  },
});

export const CardTitle = style({
  paddingBottom: "8px",
  color: text.notice,
  fontWeight: "bold",
  fontSize: fontSize.s5,
});
