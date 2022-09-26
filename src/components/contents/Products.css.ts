import { style } from "@vanilla-extract/css";
import { background, fontSize, text } from "../../features/styles/theme";

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
});

export const IntroContainer = style({
  display: "grid",
  gap: "16px",
  justifyContent: "center",
});

export const IntroTitle = style({
  textAlign: "center",
});

export const ProductListContainer = style({
  display: "grid",
  gap: "32px",
  paddingTop: "32px",
});

export const ProductCardContainer = style({
  boxShadow: "9px 9px 16px #252130, -9px -9px 16px #332d40;",
  borderRadius: "16px",
  padding: "24px",
  color: text.default,
  display: "flex",
  selectors: {
    "&:focus": {
      boxShadow: "inset 9px 9px 16px #252130,inset -9px -9px 16px #332d40",
    },
    "&:hover": {
      boxShadow: "inset 9px 9px 16px #252130,inset -9px -9px 16px #332d40",
    },
  },
});

export const ProductTitle = style({
  paddingBottom: "8px",
  color: text.notice,
  fontWeight: "bold",
  fontSize: fontSize.s5,
});

export const ProductImgContainer = style({
  width: "100px",
  height: "100px",
  flexShrink: "0",
  marginRight: "24px",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "130px",
      height: "130px",
    },
  },
});

export const ProductImg = style({
  border: "none",
  borderRadius: "8px",
});
