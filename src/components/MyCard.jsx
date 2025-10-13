import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { img_300, noImage } from '../utils';
import { MyModal } from './MyModal';

export const MyCard=({id,backdrop_path,original_title,release_date,vote_average,original_name,first_air_date})=>{
   const [open, setOpen] = React.useState(false);  
  const voteStyle={
        position:'absolute',
        top:115,right:10,
        width:'30px',
        height:'30px',
        borderRadius:'50%',
        border:'1px solid white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'white',
        backgroundColor:"#141E30",
        fontSize:'0.8rem'
    }
  return (
    <>
    <Card onClick={() => setOpen(true)}
      sx={{ width: 300,position:'relative',background:'#243B55',color:'white' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${backdrop_path ? img_300+'/'+backdrop_path  : noImage}`}
          alt={original_title||original_name}
        />
        <CardContent >
          <Typography gutterBottom variant="h6" component="div">
            {original_title||original_name}
          </Typography>
          <Typography variant="body2" sx={{textAlign:'right'}}>
            {release_date||first_air_date}
          </Typography>
          <Typography sx={voteStyle} >{vote_average.toFixed(1)}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    {open && <MyModal id={id} type='movie' setOpen={setOpen} open={open}/>}
    </>
  );
}
