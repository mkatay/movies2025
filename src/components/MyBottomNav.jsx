 import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { MdMovie } from "react-icons/md";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router';

export const MyBottomNav=()=> {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate()

  const handleChange=(event,newValue)=>{
    setValue(newValue)
    console.log(newValue);
    if(newValue==0) navigate('/')
    if(newValue==1) navigate('/tvseries')
    if(newValue==2) navigate('/search')
  }

  return (
    <Box sx={{ width:'100%',position:'fixed',bottom:0 }}>
      <BottomNavigation 
        showLabels 
        value={value} 
        onChange={handleChange}
        sx={{bgcolor: 'rgba(20,30,48,0.9)', color: 'white'}}
      >
        <BottomNavigationAction label="Movies" icon={<MdMovie />} sx={{ color: "white" }} />
        <BottomNavigationAction label="TVSeries" icon={<MdOutlineLiveTv />} sx={{ color: "white" }} />
        <BottomNavigationAction label="Search" icon={<FaSearch />} sx={{ color: "white" }} />
      </BottomNavigation>
    </Box>
  );
}
