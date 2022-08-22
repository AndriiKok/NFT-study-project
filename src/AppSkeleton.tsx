import {
  useMantineTheme,
  AppShell,
  Navbar,
  MediaQuery,
  Text,
  Aside,
  Footer,
  Header,
  Burger,
  Box,
  Stack,
  Badge,
  Button,
  Avatar,
  Chip,
} from "@mantine/core";
import React, { useState } from "react";
import { LitButton } from "./customComponents/Buttons/LitButton";
import { LitText } from "./customComponents/Text/LitText";
import { HomeIndex } from "./Pages/Home/HomeIndex";
import { litColors } from "./theme/theme";
import { Routes, Route, Link } from "react-router-dom";
import { LitTextLink } from "./customComponents/Badges";
import {
  ChartPie,
  CurrencyBitcoin,
  CurrencyEthereum,
  Star,
} from "tabler-icons-react";
import { DetailIndex } from "./Pages/Detail/DetailIndex";
import { PlaceBidModal } from "./Pages/Modals/PlaceBidModal";
import { ConnectWalletModal } from "./Pages/Modals/ConnectWalletModal";
import { DiscoverCreatorIndex } from "./Pages/DiscoverCreator/DiscoverCreatorIndex";
import { LitToken } from "./customComponents/LitToken";
import { UserProfileIndex } from "./Pages/UserProfile/UserProfileIndex";

export const AppSkeleton = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : litColors.offWhite,
          /* THis needs to be corrected ( due to below css the application is not looking good on large screen ) */
          paddingLeft: 0,
          paddingRight: "0 !important",
          paddingTop: "calc(var(--mantine-header-height))",
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          sx={{ justifyContent: "space-around" }}
        >
          <Stack spacing="xl" align="center">
            <LitText
              component="a"
              screenType="desktop"
              size="sm"
              typographyVariant="display-bold"
              href="https://google.com"
            >
              About OpenArt
            </LitText>
            <LitText
              component="a"
              screenType="desktop"
              size="sm"
              typographyVariant="display-bold"
              href="https://google.com"
            >
              Blog
            </LitText>
            <LitText
              component="a"
              screenType="desktop"
              size="sm"
              typographyVariant="display-bold"
              href="https://google.com"
            >
              Help
            </LitText>
            <LitText
              component="a"
              screenType="desktop"
              size="sm"
              typographyVariant="display-bold"
              href="https://google.com"
            >
              Contact
            </LitText>
          </Stack>
          <LitButton fullWidth={true} variant="primary" size="large">
            <LitText
              color="white"
              typographyVariant="link"
              screenType="mobile"
              size="lg"
            >
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
      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route
          path="/test"
          element={
            <>
              <Box
                sx={{
                  backgroundColor: litColors.bg,
                  height: "300px",
                  padding: "30px",
                }}
              >
                <Chip.Group
                  position="center"
                  multiple={false}
                  defaultValue={"react"}
                >
                  <LitToken value="react">react</LitToken>
                  <LitToken value="angular">angular</LitToken>
                </Chip.Group>
              </Box>
            </>
          }
        />
        <Route path="/detail" element={<DetailIndex />} />
        <Route path="/discover" element={<DiscoverCreatorIndex />} />
        <Route
          path="/user-profile"
          element={
            <UserProfileIndex
              bgImageUrl="Creators/HabeshawBg.png"
              mainImageUrl="Creators/HabeshawMain.png"
              userName="Gift Habeshaw"
              userId="52fs5ge5g45sov45a"
              noFollowing="150"
              noFollowers="2024"
              description="Trevor Jackson is a multi-disciplinary artist exploring analog + digital realms since 1988. Collaborators inc Apple, BMW, Comme Des Garçons, ICA, NTS, Sonos,  Stone Island, Tate Modern + Warp."
              membershipDuration="2021"
            />
          }
        />
      </Routes>
    </AppShell>
  );
};
