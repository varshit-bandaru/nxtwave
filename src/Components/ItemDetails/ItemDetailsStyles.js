import styled from "@emotion/styled";
import { Typography, Box, Grid } from "@mui/material";
export const TextFieldLabels = styled(Typography)(({ theme }) => ({
  fontFamily: "HK Grotesk",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "16px",
  color: "#7E858E",
  paddingBottom: "8px",
}));
export const ItemDetailsEntryPageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "32px",
  lineHeight: "40px",
  color: "#171F46",
}));
export const validate = (name, value) => {
  switch (name) {
    case "item_name":
      if (!value || value.trim() === "") {
        return "Item name is Required";
      } else {
        return "";
      }
    case "item_link":
      if (!value) {
        return "Link is Required";
      } else {
        return "";
      }
    case "item_resource":
      if (!value) {
        return "Resource is Required";
      } else {
        return "";
      }
    case "item_description":
      if (!value) {
        return "Description is Required";
      } else {
        return "";
      }
    default: {
      return "";
    }
  }
};
export const handleUserInput = (e) => {
  setError({
    ...errors,
    [e.target.name]: validate(e.target.name, e.target.value),
  });
  setFields({
    ...fields,
    [e.target.name]: e.target.value,
  });
};
export let textFieldsStlyles = {
  width: "320px",

  "& label.Mui-focused": {
    color: "#AD184C",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#EAEAEA",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "0px",
      borderColor: "#EAEAEA",
    },
    "&:hover fieldset": {
      borderColor: "#EAEAEA",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EAEAEA",
    },

    "& ::placeholder": {
      color: "#231F20",
      opacity: 1,
    },
    "&.MuiInputBase-root": { height: "40px", backgroundColor: "#FFFFFF" },
  },
};
export let linkTextFieldStlyles = {
  width: "320px",

  "& label.Mui-focused": {
    color: "#AD184C",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#EAEAEA",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "0px",
      borderColor: "#EAEAEA",
    },
    "&:hover fieldset": {
      borderColor: "#EAEAEA",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EAEAEA",
    },

    "& ::placeholder": {
      color: "#231F20",
      opacity: 1,
    },
    "&.MuiInputBase-root": {
      height: "40px",
      backgroundColor: "#FFFFFF",
      color: "blue",
    },
  },
};
export let textFieldDescriptionStlyle = {
  width: "320px",

  "& label.Mui-focused": {
    color: "#AD184C",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#EAEAEA",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "0px",
      borderColor: "#EAEAEA",
    },
    "&:hover fieldset": {
      borderColor: "#EAEAEA",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#EAEAEA",
    },

    "& ::placeholder": {
      color: "#231F20",
      opacity: 1,
    },
    "&.MuiInputBase-root": { height: "80px", backgroundColor: "#FFFFFF" },
  },
};
export let TextFieldGridMargin = { marginBottom: "32px" };
export let submitButtonStyle = {
  color: "white",
  width: "93px",
  height: "40px",
  borderRadius: "4px",
  padding: "8px 20px 8px 20px",
  backgroundColor: "#0B69FF",
};
export const MainGrid_AddItemPage = {
  height: "100vh",
  backgroundColor: "#F5F5F5",
};
export const ItemDetailsHeadingandButton = {
  textAlign: "center",
  ...TextFieldGridMargin,
};
export const ErrorMsgColor = { color: "red" };
