import Tab from '@mui/material/Tab';

import styled from "@emotion/styled";
export const Tabstyle = styled(Tab)(({colorchange}) => {
    console.log(colorchange)
    return({
    height:"40px",
    width:"200px",
    fontFamily: 'HK Grotesk',
fontStyle: "normal",
fontWeight: "600",
fontSize: "14px",
lineHeight: "24px",
fontColor:"#171F46",
    backgroundColor:"#D7DFE9",
    border: "1px solid #D7DFE9",
   
  })});