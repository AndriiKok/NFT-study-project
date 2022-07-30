import "./App.css";
import { Box, MantineProvider, Tabs, TabsProps } from "@mantine/core";
import myTheme from "./theme/theme";
import { LitText } from "./customComponents/Text/LitText";
import { Text } from "@mantine/core";
import { LitButton } from "./customComponents/Buttons/LitButton";
import { Heart } from 'tabler-icons-react';

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      variant="unstyled"
      styles={(theme) => ({
        tabControl: {
          backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[9],
          border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[4]}`,
          fontSize: theme.fontSizes.md,
          padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,

          "&:not(:first-of-type)": {
            borderLeft: 0,
          },

          "&:first-of-type": {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          "&:last-of-type": {
            borderTopRightRadius: theme.radius.md,
            borderBottomRightRadius: theme.radius.md,
          },
        },

        tabActive: {
          backgroundColor: theme.colors.blue[7],
          borderColor: theme.colors.blue[7],
          color: theme.black,
        },
      })}
      {...props}
    />
  );
}

function App() {
  return (
    <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS styles={{}}>
      <Box p="xs">
        <LitButton variant="secondary" leftIcon={<Heart color="blue" />}>
          <LitText size="md" typographyVariant="link" screenType="mobile" color="blue" >Button</LitText>
        </LitButton>
      </Box>
    </MantineProvider>
  );
}

export default App;
