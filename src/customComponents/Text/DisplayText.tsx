import { TextProps, Text } from '@mantine/core';

interface DisplayTextProps extends TextProps<"div">{

    displayType?: "regular" | "bold";

}

export const DisplayText = (props: DisplayTextProps) => {
    let fontSize, lineHeight, letterSpacing;
    const fontWeight = props.displayType === "regular" ? 400 : 700;

    // Calculating the Text Size on the basis of the size prop
    switch (props.size) {

        case "sm":
            fontSize = "32px";
            lineHeight = "36px";
            letterSpacing = "1px";
            break;
        case "md":
            fontSize = "48px";
            lineHeight = "52px";
            letterSpacing = "1px";
            break;
        case "lg":
            fontSize = "64px";
            lineHeight = "68px";
            letterSpacing = "1px";
            break;
        default:
            fontSize = "48px";
            lineHeight = "52px";
            letterSpacing = "1px";
            break;

    }

    return <Text {...props}  sx={{ fontSize, fontWeight, lineHeight, letterSpacing }} variant="text" />

}
