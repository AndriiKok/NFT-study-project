import { useMantineTheme, AppShell, Navbar, MediaQuery, Text, Aside, Footer, Header, Burger, Box, Stack, Badge, Button, Avatar } from "@mantine/core";
import React, { useState } from "react";
import { LitButton } from "./customComponents/Buttons/LitButton";
import { LitText } from "./customComponents/Text/LitText";
import { HomeIndex } from "./Pages/Home/HomeIndex";
import { litColors } from "./theme/theme";
import { Routes, Route, Link } from "react-router-dom";
import { LitTextLink } from "./customComponents/Badges";
import { ChartPie, CurrencyBitcoin, CurrencyEthereum, Star } from "tabler-icons-react";
import { DetailIndex } from "./Pages/Detail/DetailIndex";

export const AppSkeleton = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : litColors.offWhite,
          /* THis needs to be corrected ( due to below css the application is not looking good on large screen ) */
          paddingLeft: 0,
          paddingRight: "0 !important",
          paddingTop:"calc(var(--mantine-header-height))"
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} sx={{ justifyContent: "space-around" }}>
          <Stack spacing="xl" align="center">
            <LitText component="a" screenType="desktop" size="sm" typographyVariant="display-bold" href="https://google.com">
              About OpenArt
            </LitText>
            <LitText component="a" screenType="desktop" size="sm" typographyVariant="display-bold" href="https://google.com">
              Blog
            </LitText>
            <LitText component="a" screenType="desktop" size="sm" typographyVariant="display-bold" href="https://google.com">
              Help
            </LitText>
            <LitText component="a" screenType="desktop" size="sm" typographyVariant="display-bold" href="https://google.com">
              Contact
            </LitText>
          </Stack>
          <LitButton fullWidth={true} variant="primary" size="large">
            <LitText color="white" typographyVariant="link" screenType="mobile" size="lg">
              Connect wallet
            </LitText>
          </LitButton>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <img src="OpenArtLogo.svg" alt="" />
            </Box>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" color={theme.other.colors.titleActive} />
            </MediaQuery>
          </div>
        </Header>
      }
    >
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route
          path="/test"
          element={
            <>
              <Box sx={{ backgroundColor: litColors.bg, height: "300px", padding: "30px" }}>
                <Stack spacing={16}>
                  <LitTextLink leftIcon={<CurrencyBitcoin size={30} strokeWidth={2} color={litColors.body} />} text="View on Etherscan" />
                  <LitTextLink leftIcon={<Star size={30} strokeWidth={2} color={litColors.body} />} text="View on IPFS" />
                  <LitTextLink leftIcon={<ChartPie size={30} strokeWidth={2} color={litColors.body} />} text="View IPFS Metadata" />
                </Stack>
              </Box>
            </>
          }
        />
        <Route path="/detail" element={<DetailIndex/>} />
      </Routes>
    </AppShell>
  );
};
