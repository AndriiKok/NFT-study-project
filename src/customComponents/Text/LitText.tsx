import { Text, CSSObject, MantineColor } from "@mantine/core";
import litTypography from "../../theme/litTypography";
import LitTypography, { ScreenType, SizeVariants, TypographyVariants } from "../../theme/litTypography";
import { linearGradients } from "../../theme/theme";
import { DefaultProps } from '@mantine/styles';

interface LitTextProps extends DefaultProps{
  size?: SizeVariants;
  typographyVariant?: TypographyVariants;
  screenType?: ScreenType;
  transformType?: "capitalize" | "uppercase" | "lowercase" | "none";
  gradientType?: "primary" | "secondary" | "accent";
  componentType?: "block" | "inline" | "link";
  color?: MantineColor;
  children?: JSX.Element | string;
  href?: string;
};

export const LitText = (props: LitTextProps) => {

  const gradient = props?.gradientType ? linearGradients[props?.gradientType] : undefined;
  const componentType  = props.componentType ? {"block": "div", "inline" : "span", "link" : "a"}[props?.componentType] : "span";
  const variantType = props.gradientType ? "gradient" : "text";

  let cssProps = getCSSProps(props.typographyVariant, props?.size, props.screenType);


  return (
    <Text gradient={gradient} href={props.href} component={componentType as any} sx={cssProps} color={props.color} variant={variantType}  >
      {props.children}
    </Text>
  );
};

const getCSSProps = (typographyVariant: TypographyVariants = "text", size: SizeVariants = "md", screenType: ScreenType = "desktop"): CSSObject => {
  return litTypography[screenType][typographyVariant][size];
};
/*
TODO : 
- Need to support alignment in the LitText


*/