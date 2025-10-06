import { Chip, Stack } from '@mui/material';
import React from 'react'

import { getGenresData } from '../utils';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { SingleChip } from './SingleChip';

export const Genres = ({type,selectedGenres,setSelectedGenres}) => {
   
    const {isLoading,isError,error,data}=useQuery({queryKey:['genres',type], queryFn:getGenresData})
    data & console.log(data);
  console.log(selectedGenres);
    
  return (
      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
        {data && data.genres.map(obj=>
              <SingleChip key={obj.id} {...obj} 
                    selectedGenres={selectedGenres} 
                    setSelectedGenres={setSelectedGenres}/>)}
            
      </Stack>
  )
}

