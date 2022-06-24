import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonStylesParams, Checkbox, MantineProvider, MantineThemeOverride, Tabs, TabsProps, TabsStylesParams } from '@mantine/core';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';
import { CompA } from './CompA';


const myTheme: MantineThemeOverride = {
  colorScheme: 'light',
  primaryColor: 'blue',
  colors: {
    'blue': [
      "#CBCFE0",
      "#AEB6D6",
      "#909DD1",
      "#7082D1",
      "#4C67D8",
      "#2348E7",
      "#002EF1",
      "#1637C3",
      "#233BA0",
      "#2B3C85",
    ]
  },
  defaultRadius: "sm",
  fontFamily: 'Epilogue, sans-serif',
  fontFamilyMonospace: 'Epilogue, sans-serif',
  fontSizes: { lg: 24, md: 18, sm: 16, xs: 14 },
  headings: {
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: 'bold',
  },
};


function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      variant="unstyled"
      styles={(theme) => ({
        tabControl: {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
          border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]}`,
          fontSize: theme.fontSizes.md,
          padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,

          '&:not(:first-of-type)': {
            borderLeft: 0,
          },

          '&:first-of-type': {
            borderTopLeftRadius: theme.radius.md,
            borderBottomLeftRadius: theme.radius.md,
          },

          '&:last-of-type': {
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

    <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS styles={{

    }}>

      <Button>Hello World !</Button>
      <Checkbox label="I agree to sell my privacy"></Checkbox>
      <Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked label="Checked checkbox" />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />

      <Tabs tabPadding="xl">
        <Tabs.Tab label="Gallery" icon={<Photo size={14} />}></Tabs.Tab>
        <Tabs.Tab label="Messages" icon={<MessageCircle size={14} />}>Messages tab content</Tabs.Tab>
        <Tabs.Tab label="Settings" icon={<Settings size={14} />}>Settings tab content</Tabs.Tab>
      </Tabs>

      <StyledTabs>
        <Tabs.Tab label="Settings" icon={<Settings size={16} />} />
        <Tabs.Tab label="Messages" icon={<MessageCircle size={16} />} />
        <Tabs.Tab label="Gallery" icon={<Photo size={16} />} />
      </StyledTabs>

      <CompA />

    </MantineProvider>
  );
}

export default App;
