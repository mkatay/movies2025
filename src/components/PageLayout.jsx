import { Container, Typography, Box, Pagination } from '@mui/material'
import React from 'react'
import { Genres } from './Genres'

export const PageLayout = ({ title, children,page,setPage,totalPages=10,type,selectedGenres,setSelectedGenres }) => {

  return (
    <Container maxWidth={false}
      sx={{minHeight: '100vh',display: 'flex',flexDirection: 'column',
        background: 'linear-gradient(to right, #141E30, #243B55)',
        color: 'white', pt: '1rem', pb: '60px'  }} // hagyunk helyet a BottomNav miatt
    >
      <Typography variant="h3"align="center"  sx={{fontWeight: 'bold',textTransform: 'uppercase',letterSpacing: 2,
          background: 'linear-gradient(45deg, #ff6b6b, #f8e71c, #4cd137)',
          WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}}
      >
        {title}
      </Typography>
      {title!='Search page' && <Genres type={type} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>}
      <Box >
        {children}
      </Box>
         {/* --- Oldallapozó --- */}
      <Box display="flex" justifyContent="center" pb={2}>
      {page>0 &&  <Pagination
          count={totalPages}
          page={page}
          onChange={(event,value)=>setPage(value)}
          color="info"
          size="large"
          
          />
      }
      </Box>
    </Container>
  )
}
