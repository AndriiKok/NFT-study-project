import { Avatar } from "@mantine/core";
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
