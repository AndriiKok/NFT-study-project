import { createStyles, Switch } from '@mantine/core'
import React from 'react'

const createSwitchStyle = createStyles((theme) => ({

    input:{
        "&:checked":{
            background: theme.fn.gradient(theme.other.litGradients.accent)
        }
    }

}));


export const LitSwitch = () => {

    const {classes} = createSwitchStyle();

  return (
    <Switch
    label="I agree to sell my privacy"
    classNames={classes}
  />
  )
}
