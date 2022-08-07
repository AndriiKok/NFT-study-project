import {
  Box,
  createStyles,
  Grid,
  Group,
  Indicator,
  Stack,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import React, { useState } from "react";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";
import { Text } from "@mantine/core";
import { LitTextInput } from "../../customComponents/Inputs/LitTextInput";
import { Search, X } from "tabler-icons-react";
import { LitButton } from "../../customComponents/Buttons/LitButton";
import { FreshNFTItem, OnGoingBidNFTItem, SoldNFTItem } from "./NFTItem";

export const HomeIndex = () => {
  return (
    <>
      <Grid columns={4} mr="0" gutter={0} px="16px">
        <Grid.Col span={4}>
          <LitText
            mb={"4px"}
            align="center"
            screenType="desktop"
            component="div"
            typographyVariant="link"
            size="md"
            color={litColors.label}
          >
            Discover, collect, and sell
          </LitText>
          <LitText
            screenType="desktop"
            align="center"
            component="div"
            typographyVariant="display-bold"
            size="sm"
            color={litColors.titleActive}
          >
            Your Digital Art
          </LitText>
        </Grid.Col>
        <Grid.Col span={4} mt={"25px"}>
          <SearchBar />
        </Grid.Col>
      </Grid>
      <Grid
        sx={{ backgroundColor: litColors.bg }}
        columns={4}
        px="16px"
        pt="25px"
        gutter={0}
      >
        <Grid.Col span={4}>
          <FreshNFTItem
            reservePriceEth="1.50 ETH"
            reservePriceDollar="2,683.7"
            status={"FRESH"}
            nftImgUrl={""}
            isLiked={false}
            creator={{
              firstName: "Pawel",
              lastName: "Czerwinski",
              designation: "Creator",
              status: "ONLINE",
              imgUrl: "asd",
            }}
          />
        </Grid.Col>
        <Grid.Col
          span={4}
          style={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
          mt="85px"
        >
          <LitText
            color={litColors.titleActive}
            screenType="mobile"
            typographyVariant="display-bold"
            size="sm"
          >
            {" "}
            <Box
              style={{
                backgroundColor: litColors.error,
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                display: "inline-block",
              }}
              mr="7px"
            ></Box>
            Live auctions
          </LitText>
          <LitButton variant="subtle" size="medium">
            <LitText
              color={litColors.label}
              screenType="mobile"
              typographyVariant="text"
              size="md"
            >
              View all
            </LitText>
          </LitButton>
        </Grid.Col>
        <Grid.Col
          span={4}
          mt="20px"
          sx={{
            gap: "40px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SoldNFTItem
            soldPrice="2.00 ETH"
            status={"SOLD"}
            nftImgUrl={""}
            isLiked={false}
            creator={{
              firstName: "Pawel",
              lastName: "Czerwinski",
              designation: "Creator",
              status: "ONLINE",
              imgUrl: "asd",
            }}
          />
          <SoldNFTItem
            soldPrice="2.00 ETH"
            status={"SOLD"}
            nftImgUrl={""}
            isLiked={false}
            creator={{
              firstName: "Pawel",
              lastName: "Czerwinski",
              designation: "Creator",
              status: "ONLINE",
              imgUrl: "asd",
            }}
          />
          <SoldNFTItem
            soldPrice="2.00 ETH"
            status={"SOLD"}
            nftImgUrl={""}
            isLiked={false}
            creator={{
              firstName: "Pawel",
              lastName: "Czerwinski",
              designation: "Creator",
              status: "ONLINE",
              imgUrl: "asd",
            }}
          />
          <OnGoingBidNFTItem
            status={"ONGOING-BID"}
            currentBidPrice={"2.00 ETH"}
            EndingIn={"27m 30s"}
            nftImgUrl={""}
            isLiked={false}
            creator={{
              firstName: "Pawel",
              lastName: "Czerwinski",
              designation: "Creator",
              status: "ONLINE",
              imgUrl: "asd",
            }}
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

const createSearchBarStyles = createStyles((theme, focus: boolean) => ({
  input: {
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "22px",
    backgroundColor: litColors.inputBg,
    color: focus ? litColors.titleActive : litColors.placeholder,
  },
  rightSection: {
    marginRight: "8px",
  },
}));

const SearchBar = () => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const { classes } = createSearchBarStyles(value.trim().length > 0 || focused);

  return (
    <Group px="8px">
      <TextInput
        sx={{ flex: 1 }}
        size="md"
        icon={<Search size={16} strokeWidth={2} color={"black"} />}
        placeholder="Search items, collections, and accounts"
        classNames={classes}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        rightSection={
          <UnstyledButton
            sx={{
              display: `${
                value && value?.trim().length >= 0 ? "block" : "none"
              }`,
            }}
            onClick={() => setValue("")}
          >
            <X size={16} strokeWidth={2} color={"black"} />
          </UnstyledButton>
        }
      />
      {value.trim().length > 0 && (
        <LitButton variant={"text"} onClick={() => setValue("")}>
          <LitText screenType="desktop" typographyVariant="link" size="sm">
            Cancel
          </LitText>
        </LitButton>
      )}
    </Group>
  );
};
