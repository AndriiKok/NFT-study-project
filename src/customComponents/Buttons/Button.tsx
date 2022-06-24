import { Button, ButtonProps, createStyles } from "@mantine/core";
import React from "react";

interface LitButtonProps extends ButtonProps<"button"> {
  variantType?: string;
}

const createButtonStyles = createStyles((theme) => ({
  gradientBackground: {
    background: "linear-gradient(114.44deg, #0038F5 0%, #9F03FF 100%)",
  },

  graidentLabel: {
    background: "linear-gradient(114.44deg, #0038F5 0%, #9F03FF 100%)",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  gradientBorder: {
    border: "1px solid transparent",
    borderImage: "linear-gradient(114.44deg, #0038F5 0%, #9F03FF 100%) 1",
    background: "transparent",
  },
}));

export const LitButton = (props: LitButtonProps) => {
  // Add properties as per primary, secondary, Subtle, Text
  const graidentObj = { from: "#0038F5", to: "#9F03FF", deg: 114.44 };

  const { classes } = createButtonStyles();

  switch (props.variantType) {
    case "primary":
      return (
        <Button
          {...props}
          variant="gradient"
          gradient={graidentObj}
          radius="md"
          styles={{
            root: {
              height: "40px",
              padding: "0 30px",
              lineHeight: "24px",
              fontWeight: 700,
              "&:focus" :{
                outline: "3px solid #DCDCDC;"
              },
              "&:disabled":{
                color:"white !important",
                opacity:0.5
              }
            },
          }}
        />
      );
    case "secondary":
      return (
        <Button
          {...props}
          variant="white"
          radius="md"
          styles={{
            root: {
              height: "40px",
              padding: "0 30px",
              lineHeight: "24px",
              fontWeight: 700,
              "&:focus" :{
                background: "#F0F0F0",
                outline:"none"
              },
              "&:disabled":{
                backgroundColor: "#F0F0F0",
                opacity:0.5
              }
            },
          }}
          classNames={{
            label: classes.graidentLabel,
            root: classes.gradientBorder,
          }}
        />
      );
      case "subtle":
      return (
        <Button
          {...props}
          variant="white"
          radius="md"
          styles={{
            root: {
              height: "40px",
              padding: "0 30px",
              lineHeight: "24px",
              fontWeight: 700,
              border: "1px solid #888888",
              "&:focus" :{
                background: "#F0F0F0",
                outline:"none !important",
                border: "1px solid #888888",
              },
              "&:disabled":{
                border: "1px solid #888888 !important",
                backgroundColor: "#FCFCFC",
                opacity:0.5
              }
            },
          }}
          classNames={{
            label: classes.graidentLabel,
          }}
        />
      );
      case "text":
      return (
        <Button
          {...props}
          variant="subtle"
          radius="md"
          styles={{
            root: {
              height: "40px",
              padding: "0 30px",
              lineHeight: "24px",
              fontWeight: 700,
              "&:hover":{
                background: "none"
              },
              "&:focus" :{
                background: "#F8F8F8",
                outline:"none !important",
              },
              "&:disabled":{
                backgroundColor: "#FCFCFC !important",
                opacity:0.5
              }
            },
          }}
          classNames={{
            label: classes.graidentLabel,
          }}
        />
      );
    default:
      return (
        <Button
          {...props}
          variant="gradient"
          gradient={graidentObj}
          radius="md"
          styles={{
            root: {
              height: "40px",
              padding: "0 30px",
              lineHeight: "24px",
              fontWeight: 700,
            },
          }}
        />
      );
  }

  // Removing extra property

};
