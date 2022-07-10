import { Text, CSSObject } from "@mantine/core";
import litTypography from "../../theme/litTypography";
import LitTypography, { ScreenType, SizeVariants, TypographyVariants } from "../../theme/litTypography";
import { linearGradients } from "../../theme/theme";

type LitTextProps = {
  size?: SizeVariants;
  typographyVariant?: TypographyVariants;
  screenType?: ScreenType;
  transformType?: "capitalize" | "uppercase" | "lowercase" | "none";
  gradientType?: "primary" | "secondary" | "accent";
  componentType?: "block" | "inline";
  children?: JSX.Element | string;
};

export const LitText = (props: LitTextProps) => {

  const gradient = props?.gradientType ? linearGradients[props?.gradientType] : undefined;
  const componentType = props?.componentType  == "block" ? "div" : "span";
  const variantType = props.gradientType ? "gradient" : "text";

  let cssProps = getCSSProps(props.typographyVariant, props?.size, props.screenType);

  return (
    <Text gradient={gradient} component={componentType} sx={cssProps} variant={variantType}  >
      {props.children}
    </Text>
  );
};

const getCSSProps = (typographyVariant: TypographyVariants = "text", size: SizeVariants = "md", screenType: ScreenType = "desktop"): CSSObject => {
  return litTypography[screenType][typographyVariant][size];
};
