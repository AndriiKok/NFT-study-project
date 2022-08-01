import { Box, createStyles, Grid, Group, Stack, TextInput, UnstyledButton } from '@mantine/core'
import React, { useState } from 'react'
import { LitText } from '../../customComponents/Text/LitText'
import { litColors } from '../../theme/theme'
import { Text } from '@mantine/core';
import { LitTextInput } from '../../customComponents/Inputs/LitTextInput';
import { Search, X } from 'tabler-icons-react';
import { LitButton } from '../../customComponents/Buttons/LitButton';

export const HomeIndex = () => {
    return (
        <>
            <Grid columns={4} mr="0" gutter={0} >

                <Grid.Col span={4} >
                    <Stack align="center">
                        <LitText mb="xs" screenType='desktop' componentType='block' typographyVariant='link' size='md' color={litColors.label} >Discover, collect, and sell</LitText>
                        <LitText screenType='desktop' componentType='block' typographyVariant='display-bold' size='sm' color={litColors.titleActive} >Your Digital Art</LitText>
                    </Stack>
                </Grid.Col>
            </Grid>
            <Grid sx={{ backgroundColor: litColors.bg }} columns={4} mr="0" gutter={0} mt={"20px"}>
                <Grid.Col span={4} >
                    <SearchBar />
                    asdfdaf
                    adsfdasf
                    adfasdf
                    adfadf
                    adfadf
                </Grid.Col>
            </Grid>
        </>
    )
}

const createSearchBarStyles = createStyles((theme, focus: boolean) => ({


    input: {
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "22px",
        backgroundColor: litColors.inputBg,
        color: focus ? litColors.titleActive : litColors.placeholder
    },
    rightSection: {
        marginRight: "8px"
    }

}));


const SearchBar = () => {

    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");
    const { classes } = createSearchBarStyles(value.trim().length > 0 || focused)

    return (

        <Group  >
            <TextInput sx={{ flex: 1 }} size='md' icon={<Search />} placeholder="Search items, collections, and accounts" classNames={classes}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onBlur={() => setFocused(false)}
                onFocus={() => setFocused(true)}
                rightSection={<UnstyledButton sx={{ display: `${value && value?.trim().length >= 0 ? "block" : "none"}` }} onClick={() => setValue("")}>
                    <X size={24} strokeWidth={2} color={"black"} />
                </UnstyledButton>} />
            { (value.trim().length > 0) && <LitButton variant={'text'} onClick={() => setValue("")}  ><LitText screenType='desktop' typographyVariant='link' size='sm' >Cancel</LitText></LitButton>}
        </Group>
    );

}