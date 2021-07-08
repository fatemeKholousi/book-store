import Button from "@material-ui/core/Button";
import React from 'react';

export const ButtonXIcon=({label,icon,bgColorCode,handleClick})=>{
    return(
    <Button
       onClick={handleClick}
       style={{backgroundColor:`${bgColorCode}`}}
       startIcon={icon}>
       {label}
      
      </Button>
           )}


export const ButtonDefault=({label,bgColorCode,handleClick})=>{
    return(
      <Button
      style={{backgroundColor:`${bgColorCode}`,marginLeft:'9px'}}
      onClick={handleClick}
     >
       {label}
       
           </Button>  
    )
    
}