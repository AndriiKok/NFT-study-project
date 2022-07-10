import { CSSObject } from "@mantine/core";

export type TypographyVariants = "text" | "link" | "display-regular" | "display-bold";
export type SizeVariants = "lg" | "md" | "sm" | "xs";
export type ScreenType = "desktop" | "mobile";

type LitTypography = {
  lg: CSSObject,
  md: CSSObject
  sm: CSSObject
  xs?: CSSObject
}

const desktopTypography : {[key in TypographyVariants] : LitTypography} = {

  "display-regular": {
    lg: {
      fontSize: "64px",
      lineHeight: "68px",
      letterSpacing: "1px",
      fontWeight: 400,
    },
    md: {
      fontSize: "48px",
      lineHeight: "52px",
      letterSpacing: "1px",
      fontWeight: 400,
    },
    sm: {
      fontSize: "32px",
      lineHeight: "36px",
      letterSpacing: "1px",
      fontWeight: 400,
    },
  },
  "display-bold": {
    lg: {
      fontSize: "64px",
      lineHeight: "68px",
      letterSpacing: "1px",
      fontWeight: 700,
    },
    md: {
      fontSize: "48px",
      lineHeight: "52px",
      letterSpacing: "1px",
      fontWeight: 700,
    },
    sm: {
      fontSize: "32px",
      lineHeight: "36px",
      letterSpacing: "1px",
      fontWeight: 700,
    },
  },
  "text": {
    lg: {
      fontSize: "24px",
      lineHeight: "36px",
      letterSpacing: "0.75px",
      fontWeight: 400,
    },
    md: {
      fontSize: "18px",
      lineHeight: "26px",
      letterSpacing: "0.75px",
      fontWeight: 400,
    },
    sm: {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.75px",
      fontWeight: 500
    },
    xs: {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.75px",
      fontWeight: 500
    }
  },
  "link": {
    lg: {
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "0.75px",
      fontWeight: 400,
    },
    md: {
      fontSize: "18px",
      lineHeight: "28px",
      letterSpacing: "0.75px",
      fontWeight: 700,
    },
    sm: {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.75px",
      fontWeight: 700,
    },
    xs: {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.75px",
      fontWeight: 700,
    }
  }
};

const mobileTypography = {

  "display-regular": {
    lg: {
      fontSize: "40px",
      lineHeight: "48px",
      letterSpacing: "1px",
      fontWeight: 400,
    },
    md: {
      fontSize: "32px",
      lineHeight: "36px",
      letterSpacing: "1px",
      fontWeight: 400,
    },
    sm: {
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "1px",
      fontWeight: 400,
    },
  },
  "display-bold": {
    lg: {
      fontSize: "40px",
      lineHeight: "48px",
      letterSpacing: "1px",
      fontWeight: 700,
    },
    md: {
      fontSize: "32px",
      lineHeight: "36px",
      letterSpacing: "1px",
      fontWeight: 700,
    },
    sm: {
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "1px",
      fontWeight: 700,
    },
  },
  "text": {
    lg: {
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0.75px",
      fontWeight: 400,
    },
    md: {
      fontSize: "16px",
      lineHeight: "22px",
      letterSpacing: "0.75px",
      fontWeight: 400,
    },
    sm: {
      fontSize: "14px",
      lineHeight: "20x",
      letterSpacing: "0.75px",
      fontWeight: 400,
    },
    xs: {
      fontSize: "13px",
      lineHeight: "20px",
      letterSpacing: "0.75px",
      fontWeight: 500
    }
  },
  "link": {
    lg: {
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0.75px",
      fontWeight: 700,
    },
    md: {
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "0.75px",
      fontWeight: 500
    },
    sm: {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.75px",
      fontWeight: 700,
    },
    xs: {
      fontSize: "13px",
      lineHeight: "20px",
      letterSpacing: "0.75px",
      fontWeight: 700,
    }
  }
};

const litTypography : {[key in ScreenType] : any} = {
  "desktop" : desktopTypography,
  "mobile" : mobileTypography
}

export default litTypography;