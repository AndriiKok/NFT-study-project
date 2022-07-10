import { Button } from "@mantine/core";
import { Text } from "@mantine/core";
import React from "react";

export const LitButtonTesting = () => {
  return (
    <div>
      <Text>LitButtonTesting</Text>
      <Button color="label">
      Random colour
    </Button>
      <Button variant="gradient" gradient={{ from: "#0038F5", to: "#9F03FF", deg: 114.44 }}>
        Some Button
      </Button>      <Button variant="gradient" gradient={{ from: "#FF9C00", to: "#FFDB03", deg: 118.08 }}>
        Some Button
      </Button>
    </div>
  );
};
