import { ActionIcon, Avatar, Box, Group, Paper, Stack } from "@mantine/core";
import { Image } from "@mantine/core";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";
import { Heart } from "tabler-icons-react";
import litTypography from "../../theme/litTypography";
import { LitButton } from "../../customComponents/Buttons/LitButton";

/*
altText
ImageSrc
Createor / 
online Status
*/
interface NFTItemPropTypes {
  isSold: boolean;
  reservePriceEth?: string;
  reservePriceDollar?: string;
  soldPrice?: string;
}

export const NFTItem = (props: NFTItemPropTypes) => {
  const getBidPlaceELement = (reservePriceEth: string = "0", reservePriceDollar: string = "0") => {
    return (
      <>
        <LitText mt="20px" color={litColors.titleActive} size="md" screenType="mobile" typographyVariant="text">
          Reserve Price{" "}
          <LitText component="span" size="sm" color={litColors.titleActive} screenType="mobile" typographyVariant="display-bold">
            {reservePriceEth}
          </LitText>{" "}
          <LitText component="span" typographyVariant="link" screenType="mobile" size="md" color={litColors.placeholder}>
            ${reservePriceDollar}{" "}
          </LitText>
        </LitText>
        <LitButton mt="15px" variant="primary" size="large" fullWidth={true}  ><LitText screenType="mobile" typographyVariant="link" size="lg" color={litColors.offWhite}>Place a bid</LitText></LitButton>
        <LitButton mt="15px" variant="secondary" size="large" fullWidth={true}><LitText screenType="mobile" typographyVariant="link" size="lg" color={litColors.titleActive}>View artwork</LitText></LitButton>
      </>
    );
  };

  return (
    <>
      <Paper p="md" radius="lg" sx={{ filter: "drop-shadow(0px 10px 24px rgba(0, 0, 0, 0.08))" }}>
        <Image src="SilentWave.png" alt="Silent Wave Image" />
        <LitText mt="12px" color={litColors.titleActive} screenType="mobile" typographyVariant="display-bold" size="sm">
          Silent Wave
        </LitText>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Profile firstName="Pawel" lastName="Czerwinski" status="ONLINE" imgUrl="" designation="Creator" />
          <ActionIcon variant="transparent">
            <Heart size={24} strokeWidth={2} color={litColors.placeholder} style={{ alignSelf: "center" }} />
          </ActionIcon>
        </div>
      </Paper>
      {props.isSold ? "" : getBidPlaceELement(props.reservePriceEth, props.reservePriceDollar)}
    </>
  );
};

interface ProfilePropType {
  firstName: string;
  lastName: string;
  status: "ONLINE" | "OFFLINE";
  designation: string;
  imgUrl: string;
}

export const Profile = (props: ProfilePropType) => {
  const statusCircleColor = { ONLINE: litColors.success, OFFLINE: litColors.placeholder }[props.status];

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div style={{ position: "relative" }}>
        <Avatar src="profileImg.png" alt="Creator Name" radius="xl" />
        <div
          style={{
            width: "12px",
            height: "12px",
            backgroundColor: statusCircleColor,
            top: 0,
            position: "absolute",
            left: "30px",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <div>
        <LitText screenType="desktop" typographyVariant="link" size="md" color={litColors.body}>
          {props.firstName + props.lastName}
        </LitText>
        <LitText mt={"-5px"} screenType="desktop" size="xs" variant="text" color={litColors.label}>
          {props.status}
        </LitText>
      </div>
    </div>
  );
};
