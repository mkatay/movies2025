import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { useQuery } from 'react-query';
import { getData } from '../utils';
import { Alert, CircularProgress, Grid } from '@mui/material';
import { MyCard } from '../components/MyCard';
import { useState } from 'react';

export const TVSeries = () => {
    const [page, setPage] = useState(1)
    const [selectedGenres,setSelectedGenres]=useState([])
    const {isLoading,isError,error,data}=useQuery({queryKey:['movies','tv',page,selectedGenres], queryFn:getData})
  data & console.log(data);
  
  return (
      <PageLayout title="TV Series" page={page} setPage={setPage} type='tv'
        selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}
        >
       <Grid container spacing={2} justifyContent="center" sx={{ pt: 4, pb: 10 }}>
              {isError && <Alert severity="error">Error fetching data!!!</Alert>}
              {isLoading &&  <CircularProgress />}
              {data && data.results.map(obj=>
                <MyCard key={obj.id} {...obj}/>
              )}
        </Grid>
    </PageLayout>
  )
}


