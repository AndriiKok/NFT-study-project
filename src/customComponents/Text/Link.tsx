import { TextProps, Text } from '@mantine/core';

export const Link = (props: TextProps<"a">) => {

    let fontSize = "18px", fontWeight = 500, lineHeight = "28px", letterSpacing = "0.75px";

    // Calculating the Text Size on the basis of the size prop
    switch (props.size) {
        case "xs":
            fontSize = "14px";
            fontWeight = 700;
            lineHeight = "20px";
            letterSpacing = "0.75px";
            break;
        case "sm":
            fontSize = "16px";
            fontWeight = 700;
            lineHeight = "24px";
            letterSpacing = "0.01em";
            break;
        case "md":
            fontSize = "18px";
            fontWeight = 700;
            lineHeight = "28px";
            letterSpacing = "0.75px";
            break;
        case "lg":
            fontSize = "24px";
            fontWeight = 500;
            lineHeight = "32px";
            letterSpacing = "0.75px";
            break;
        default:
            fontSize = "18px";
            fontWeight = 700;
            lineHeight = "28px";
            letterSpacing = "0.75px";
            break;

    }

    return <Text {...props} component="a" sx={{ fontSize, fontWeight, lineHeight, letterSpacing }} variant="link" />

}