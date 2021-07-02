import Button from "@material-ui/core/Button";
import React from 'react';

export const ButtonXIcon=({label,icon,bgColorCode})=>{
    return(<Button

      style={{backgroundColor:`${bgColorCode}`}}
       startIcon={icon}>
       {label}
    </Button>
    )
    
}
export const ButtonDefault=({label,bgColorCode})=>{
    return(
      <Button
      style={{backgroundColor:`${bgColorCode}`,marginLeft:'9px'}}
     >
       {label}
    </Button>  
    )
    
}