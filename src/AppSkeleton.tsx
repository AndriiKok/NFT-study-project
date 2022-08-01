import { useMantineTheme, AppShell, Navbar, MediaQuery,Text, Aside, Footer, Header, Burger, Box, Stack } from '@mantine/core';
import React, { useState } from 'react'
import { LitButton } from './customComponents/Buttons/LitButton';
import { LitText } from './customComponents/Text/LitText';
import { HomeIndex } from './Pages/Home/HomeIndex';
import { litColors } from './theme/theme';

export const AppSkeleton = () => {
    

const theme = useMantineTheme();
const [opened, setOpened] = useState(false);
return (
  <AppShell
    styles={{
      main: {
        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : litColors.offWhite,
      },
    }}
    navbarOffsetBreakpoint="sm"
    asideOffsetBreakpoint="sm"
    navbar={
      <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} sx={{justifyContent: "space-around"}}>

          <Stack spacing="xl" align="center">
            <LitText componentType='link' screenType='desktop' size='sm' typographyVariant='display-bold' href="https://google.com"  >About OpenArt</LitText>
            <LitText componentType='block' screenType='desktop' size='sm' typographyVariant='display-bold' href="https://google.com" >Blog</LitText>
            <LitText componentType='block' screenType='desktop' size='sm' typographyVariant='display-bold' href="https://google.com" >Help</LitText>
            <LitText componentType='block' screenType='desktop' size='sm' typographyVariant='display-bold' href="https://google.com" >Contact</LitText>
          </Stack>
        <LitButton fullWidth={true} variant="primary" size='large' ><LitText color="white" typographyVariant='link'  screenType='mobile' size='lg' >Connect wallet</LitText></LitButton>
      </Navbar>
    }
    aside={
      <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
          <Text>Application sidebar</Text>
        </Aside>
      </MediaQuery>
    }
   
    header={
      <Header height={70} p="md">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: "space-between" }}>
        <Box><img src="OpenArtLogo.svg" alt="" /></Box>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={theme.other.colors.titleActive}
            />
          </MediaQuery>
        </div>
      </Header>
    }
  >
    <HomeIndex/>
  </AppShell>
);
}
