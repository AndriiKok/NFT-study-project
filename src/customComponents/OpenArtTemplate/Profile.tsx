import { Avatar, Indicator } from "@mantine/core";
import { litColors } from "../../theme/theme";
import { LitText } from "../Text/LitText";

export interface ProfileProps {
  firstName: string;
  lastName: string;
  status: "ONLINE" | "OFFLINE";
  designation: string;
  imgUrl: string;
}

export const Profile = (props: ProfileProps) => {
  const statusCircleColor = {
    ONLINE: litColors.success,
    OFFLINE: litColors.placeholder,
  }[props.status];

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Indicator size={8} color={statusCircleColor} position="top-end" offset={2} sx={{top: "25%"}}>
        <Avatar src="profileImg.svg" alt="Creator Name" radius="xl" />
      </Indicator>
      <div>
        <LitText
          screenType="desktop"
          typographyVariant="link"
          size="md"
          color={litColors.body}
        >
          {props.firstName + " " + props.lastName}
        </LitText>
        <LitText
          mt={"-5px"}
          screenType="desktop"
          size="xs"
          variant="text"
          color={litColors.label}
        >
          {props.designation}
        </LitText>
      </div>
    </div>
  );
};
