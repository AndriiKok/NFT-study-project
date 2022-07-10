import "./App.css";
import {
  MantineProvider,
  Tabs,
  TabsProps,
} from "@mantine/core";
import { LitButtonTesting } from "./customComponents/Buttons/LitButtonTesting";
import myTheme from "./theme";

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      variant="unstyled"
      styles={(theme) => ({
        tabControl: {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[4]
          }`,
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
    <MantineProvider
      theme={myTheme}
      withGlobalStyles
      withNormalizeCSS
      styles={{}}
    >
      {/* <Button>Hello World !</Button>
      <Checkbox label="I agree to sell my privacy"></Checkbox>
      <Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked label="Checked checkbox" />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked label="Disabled checked checkbox" />
      <Checkbox
        disabled
        indeterminate
        label="Disabled indeterminate checkbox"
      />

      <Tabs tabPadding="xl">
        <Tabs.Tab label="Gallery" icon={<Photo size={14} />}></Tabs.Tab>
        <Tabs.Tab label="Messages" icon={<MessageCircle size={14} />}>
          Messages tab content
        </Tabs.Tab>
        <Tabs.Tab label="Settings" icon={<Settings size={14} />}>
          Settings tab content
        </Tabs.Tab>
      </Tabs>

      <StyledTabs>
        <Tabs.Tab label="Settings" icon={<Settings size={16} />} />
        <Tabs.Tab label="Messages" icon={<MessageCircle size={16} />} />
        <Tabs.Tab label="Gallery" icon={<Photo size={16} />} />
      </StyledTabs>

      <ButtonTesting /> */}

      <LitButtonTesting />
    </MantineProvider>
  );
}

export default App;
