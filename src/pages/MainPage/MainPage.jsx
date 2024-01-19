import { useState } from "react";
import tracks from "../../assets/tracks";
import style from "./MainPage.module.scss";
import {Track} from "../../components/Track/Track";
import { Input } from "@mui/material";

const search = (query)=>{
    if(!query){
        return tracks;
    }
    const lowerCaseQuery = query.toLowerCase();

    return tracks.filter((track)=>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)) 
}  

 export const MainPage =()=>{
    const [trackSearch,setTrackSearch] = useState(tracks);

    const handleChange=(event)=>{
        setTrackSearch(search(event.target.value));
    }

    return (
        <div className={style.search}>
           <img className={style.imgFlag} src={"./img-flag/flag-of-ukraine.avif"}/>
           <Input className={style.input} 
                placeholder="Шукати трек"
                onChange={handleChange}/>
                            
         <div className={style.list}>
          {trackSearch.map((track)=>(
            <div key={track.id}>
                <Track {...track}/>
            </div>
          ))}
         </div>
        </div>
    )
}

 