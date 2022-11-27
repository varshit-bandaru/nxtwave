import styled from "@emotion/styled";
import { Typography , Box, Grid } from "@mui/material";
  export const BigBox = styled(Box)(({theme }) => ({
   width:"100%",
    backgroundColor:"#F5F5F5" 
  })
  )

  export const Typographys =styled(Typography)(({theme }) => ({
    fontFamily: 'HK Grotesk',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
  
    color: "#171F46",
   })
   )
   export const Subtitle=styled(Typography)(({theme }) => ({
    fontFamily: 'HK Grotesk',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#171F46", })
    )
    export const Linker=styled(Typography)(({theme }) => ({
      fontFamily: 'HK Grotesk',
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "24px",
      color: "#0B69FF", })
      )
      export const Description=styled(Typography)(({theme }) => ({
        fontFamily: 'HK Grotesk',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "24px",
        color: "#7E858E", })
        )
  



export const TextBox =styled(Box)(({theme }) => ({
   fontSize:"1%",
   width:"100%",
  })
  )

 
   
export const Typography1 =styled(Typography)(({theme }) => ({
fontStyle: "normal",
fontWeight:"600",
fontSize: "16px",
lineHeight: "140%",
"@media (max-width: 900px)": {
    fontSize:"15px",
    whiteSpace:"nowrap", 
    alignItems:"center", 
},   
   })
   )
   
   export const BorderBox =styled(Grid)(({theme }) => ({  
  "@media (max-width: 900px)": {
      display:"flex",
      flexDirection:"row",
      flexWrap: "nowrap",
      fontSize:"12px",
      width:"auto",
      alignItems: "center",
      },
    })
    )
    
   export const MarBox =styled(Box)(({theme }) => ({
    width:"100%",
  })
  )

export const TypographyFirst =styled(Typography)(({theme }) => ({
    width:"100%",
    fontSize:"16px",
   })
   )

   export const TypographyText =styled(Typography)(({theme }) => ({
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight:"150%",
    "@media (max-width: 900px)": {
     width:"100%",
    },
   })
   )
   
    export const BorderGrid =styled(Grid)(({theme }) => ({
        borderRight:"2px solid rgba(235,235,235,0.9)",
        padding:"1%",
        "&:last-child":{border:"none"},
        marginBottom:"1%",
        marginTop:"2%",
        "@media (max-width: 900px)": {
            borderBottom:"2px solid rgba(235,235,235,0.9)",
           
            marginLeft:"20px",
             borderRight:"none",
             padding:"4%",
          },        
       })
       )