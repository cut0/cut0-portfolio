import { style } from "@vanilla-extract/css";
import { fontSize, text } from "../../features/styles/theme";

export const MainContainer = style({
  maxWidth: "1024px",
  margin: "0 auto",
  padding: "32px 16px",
  display: "grid",
  gap: "32px",
});

export const TopCardContainer = style({
  boxShadow: "inset 9px 9px 16px #252130,inset -9px -9px 16px #332d40",
  borderRadius: "16px",
  padding: "24px",
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  alignItems: "center",
  gap: "32px",
  "@media": {
    "screen and (min-width: 768px)": {
      gap: "64px",
    },
  },
});

export const TopCardDescriptionContainer = style({
  display: "grid",
  gap: "8px",
  alignItems: "center",
});

export const ProfileImgContainer = style({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  justifySelf: "flex-end",
  "@media": {
    "screen and (min-width: 768px)": {
      width: "150px",
      height: "150px",
    },
  },
});

export const ProfileImg = style({
  borderRadius: "50%",
});

export const CommonCardContainer = style({
  boxShadow: "inset 9px 9px 16px #252130,inset -9px -9px 16px #332d40",
  borderRadius: "16px",
  padding: "24px",
  display: "grid",
  gridTemplateColumns: "1fr",
  "@media": {
    "screen and (min-width: 768px)": {
      padding: "32px",
      gridTemplateColumns: "minmax(auto,196px) 1fr",
    },
  },
});

export const CommonCardTitleContainer = style({
  alignSelf: "center",
  width: "196px",
  fontSize: fontSize.s5,
  paddingBottom: "16px",
  "@media": {
    "screen and (min-width: 768px)": {
      paddingBottom: "0",
    },
  },
});

export const CommonCardDescriptionContainer = style({
  margin: "0",
  paddingLeft: "0",
  position: "relative",
  "@media": {
    "screen and (min-width: 768px)": {
      paddingLeft: "64px",
      "::before": {
        content: "",
        width: "4px",
        height: "100%",
        borderRadius: "4px",
        boxShadow: "inset 2px 2px 2px #403952, inset -2px -2px 2px #18151e",
        position: "absolute",
        left: "0",
      },
    },
  },
});

export const CareerYear = style({
  color: text.notice,
  fontWeight: "bold",
});

export const CareerSummary = style({
  padding: "8px 16px 16px",
});

export const JumpLinkContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: "16px",
});

export const JumpLink = style({
  display: "flex",
  alignItems: "center",
  color: text.notice,
  fontWeight: "bold",
});

export const JumpLinkTitle = style({
  marginRight: "8px",
});
