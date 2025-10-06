import * as React from 'react';
import Chip from '@mui/material/Chip';
import { MdDone } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { useState } from 'react';
import { Box } from '@mui/material';

export const SingleChip=({id,name,selectedGenres,setSelectedGenres})=> {
    const [isSelected,setIsSelected]=useState(false)

    const handleClick=()=>{
        setIsSelected(!isSelected)
        if(selectedGenres.indexOf(id)==-1){
            setSelectedGenres(prev=>[...prev,id])
        }else{
            setSelectedGenres(prev=>prev.filter(item=>item!=id))
        }
    }
  return (
  <Box sx={{p:1}}>
     <Chip 
        icon={isSelected ? <MdDone size='25'/> : <MdOutlineRadioButtonUnchecked size='25'/>} 
        label={name}
        clickable
        onClick={handleClick}
        color='info'
        sx={{p:1}}
      />
  </Box>
     
      
   
  );
}
