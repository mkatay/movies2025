import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { getDetailsData } from '../utils';
import { useQuery } from 'react-query';
import { MyCarousel } from './MyCarousel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const MyModal=({id,type,open,setOpen})=>{
    const urlDetails=`https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
    //const urlVideos=`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`;
     
    const {isLoading,isError,error,data}=useQuery({queryKey:['details',urlDetails], queryFn:getDetailsData})
    data & console.log(data);
    

  return (
    <div>
     
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data && data.original_title}
           
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data && data.overview}
          </Typography>
            <MyCarousel id={id} type={type}/>
        </Box>
     
      </Modal>
    </div>
  );
}
