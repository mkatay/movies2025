import { Alert, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { useQuery } from 'react-query'
import { getData, img_300, img_500 } from '../utils'
import { MyCard } from '../components/MyCard'
import { useState } from 'react'

export const Movies = () => {
  const [page, setPage] = useState(1)
  const [selectedGenres,setSelectedGenres]=useState([])/*kategóriák azonosítói amit a felhasználó kiválaszt */
  const {isLoading,isError,error,data}=useQuery({queryKey:['movies','movie',page,selectedGenres], queryFn:getData})
data & console.log(data);

  return (
     <PageLayout title="Movies" setPage={setPage} page={page} type='movie' 
        selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}>
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

