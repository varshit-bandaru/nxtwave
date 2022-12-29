import styled from "@emotion/styled";
import { Typography, Box, Grid } from "@mui/material";
export const BigBox = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#F5F5F5",
}));

export const Typographys = styled(Typography)(({ theme }) => ({
  fontFamily: "HK Grotesk",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "24px",

  color: "#171F46",
}));
export const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: "HK Grotesk",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#171F46",
}));
export const Linker = styled(Typography)(({ theme }) => ({
  fontFamily: "HK Grotesk",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "24px",
  color: "#0B69FF",
}));
export const Description = styled(Typography)(({ theme }) => ({
  fontFamily: "HK Grotesk",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "24px",
  color: "#7E858E",
}));

export const TextBox = styled(Box)(({ theme }) => ({
  fontSize: "1%",
  width: "100%",
}));
export const BoxWidth = { minWidth: 360 };
export const GridPaddingOfcard = { padding: "24px" };
export const CardImageDivstyle = {
  width: "44px",
  height: "44px",
  border: "1px solid #D7DFE9",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const CardImagestyle = { width: "24px", height: "20.39px" };
