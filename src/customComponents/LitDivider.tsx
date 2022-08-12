import { Divider } from '@mantine/core'
import React from 'react'
import { litColors } from '../theme/theme';

interface LitDividerProps {
    type :"NORMAL" | "THIN" ;
    padded?: boolean;
    darkMode? : boolean;
    orientation?: 'horizontal' | 'vertical';
}

const sizeMap = {

    "NORMAL" : 8,
    "THIN" : 1,
}


export const LitDivider = (props: LitDividerProps) => {
  return (
   <Divider size={sizeMap[props.type]} color={litColors.line} mx={props.padded ? "6.5%" : "0%"} />
  )
}
