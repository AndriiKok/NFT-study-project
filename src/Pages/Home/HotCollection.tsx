import { Box, Grid, Group, SimpleGrid } from "@mantine/core";
import { LitText } from "../../customComponents/Text/LitText";
import { litColors } from "../../theme/theme";
import { Image } from "@mantine/core";
import { LitButton } from "../../customComponents/Buttons/LitButton";

export const HotCollection = () => {
  return (
    <>
      <Grid.Col
        span={4}
        style={{
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
        mt="85px"
      >
        <LitText color={litColors.titleActive} screenType="mobile" typographyVariant="display-bold" size="sm">
          <Image sx={{ display: "inline-block" }} src="Icons/StarIcon.png" width="20px" height="20px" mr="6px" alt="Fire Icon" />
          Hot Collection
        </LitText>
      </Grid.Col>
      <Grid.Col my="25px">
        <SimpleGrid cols={2}>
          <Image sx={{ display: "inline-block" }} src="NFT/Collection1.png" alt="Collection 1" />
          <Image sx={{ display: "inline-block" }} src="NFT/Collection2.png" alt="Collection 2" />
          <Image sx={{ display: "inline-block" }} src="NFT/Collection3.png" alt="Collection 3" />
          <Image sx={{ display: "inline-block" }} src="NFT/Collection4.png" alt="Collection 4" />
        </SimpleGrid>
      </Grid.Col>
      <Group sx={{ justifyContent: "space-between", flex: "1" }}>
        <LitText typographyVariant="link" screenType="mobile" size="lg" color={litColors.titleActive}>
          Water and sunflower
        </LitText>
        <Box sx={{ border: "1px solid #DCDCDC", borderRadius: "34px" }} p="5px 8px 2px 8px">
          <LitText component="span" typographyVariant="link" screenType="mobile" size="md" color={litColors.titleActive}>
            30 items
          </LitText>
        </Box>
      </Group>
      <LitButton fullWidth={true} variant={"secondary"} size="large">
        <LitText screenType="mobile" align="center" typographyVariant="link" size="lg" color={litColors.titleActive}>
          View more collection
        </LitText>
      </LitButton>
    </>
  );
};
