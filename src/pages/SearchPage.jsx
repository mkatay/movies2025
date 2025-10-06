import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { useRef } from 'react';
import { useState } from 'react';
import { IoSearchCircleOutline } from 'react-icons/io5';
import { Alert, Button, CircularProgress, Grid, Tab, Tabs, TextField } from '@mui/material';
import { useQuery } from 'react-query';
import { getSearchedData } from '../utils';
import { MyCard } from '../components/MyCard';

export const SearchPage = () => {
  const [page, setPage] = useState(1)
  const [value, setValue] = React.useState(0);
  const [txt,setTxt]=useState('')
  const inputRef=useRef()
  const {isLoading,isError,error,data}=useQuery({
      queryKey:['searchedData',value==0?'movie':'tv',page,txt], 
      queryFn:getSearchedData,enabled:!!txt})
console.log(txt,data);

  return (
      <PageLayout title="Search page" page={page} setPage={setPage}>
        
        <div style={{ display: "flex", margin: "auto",maxWidth:'300px',justifyContent: "center"}}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            inputRef={inputRef}
            sx={{backgroundColor:'white'}}
          />
          <Button variant="outlined" style={{ color:'white' }} onClick={()=>setTxt(inputRef.current.value?.trim())}>
            <IoSearchCircleOutline size={40} />
          </Button>
        </div>
        <div >
        <Tabs value={value} indicatorColor="primary" textColor="primary" centered 
            onChange={(event,newValue)=>setValue(newValue)} 
            
        >
            <Tab  label="Movies" />
            <Tab  label="TV Series" />
        </Tabs>
        </div>
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


