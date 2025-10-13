import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { getDetailsData, img_300, noImage } from "../utils";

export const MyCarousel=({id,type})=> {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  const urlCredits=`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
   const {isLoading,isError,error,data}=useQuery({queryKey:['details',urlCredits], queryFn:getDetailsData})
      data & console.log(data);
      
  return (
 <div className="slider-container">
    <Slider {...settings}>
        {data && data.cast.map(obj=>
            <div >
               <img className='carousel_img' src={obj.profile_path? img_300+obj.profile_path : noImage} alt={obj?.name}  />
                <b className='carousel_name'>{obj?.name}</b>
            </div>
        )}
      
      
    </Slider>
    </div>
  );
}

