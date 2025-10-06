import axios from 'axios'
const base_url="https://api.themoviedb.org/3/discover/"
const urlGenre=`https://api.themoviedb.org/3/genre/`
const urlSearch=`https://api.themoviedb.org/3/search/`


export const getData=async ({queryKey})=>{
    console.log('TMDB key:', import.meta.env.VITE_TMDB_API_KEY);

    console.log('page:',queryKey[2]);
    let url=base_url+queryKey[1]+'?api_key='+import.meta.env.VITE_TMDB_API_KEY+'&page='+queryKey[2]

    //ha van filter, más lesz az url:
    if(queryKey[3].length!=0)
        url+='&with_genres='+queryKey[3].join(',')
    console.log(url);
    const resp=await axios.get(url)
    return resp.data
}

export const getGenresData=async ({queryKey})=>{
    console.log('page:',queryKey[2]);
    const url=urlGenre+queryKey[1]+'/list?api_key='+import.meta.env.VITE_TMDB_API_KEY
    console.log(url);
    const resp=await axios.get(url)
    return resp.data
}

export const getSearchedData=async ({queryKey})=>{
    console.log('page:',queryKey[2]);
    let url=urlSearch+queryKey[1]+'?api_key='+import.meta.env.VITE_TMDB_API_KEY+'&page='+queryKey[2]+'&query='+queryKey[3]
    console.log(url);
    const resp=await axios.get(url)
    return resp.data
}


export const img_300='https://image.tmdb.org/t/p/w300';
export const img_500='https://image.tmdb.org/t/p/w500';  
export const noImage='https://www.movienewz.com/img/films/poster-holder.jpg'