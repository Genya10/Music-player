import { useContext } from "react";
import { AudioContext } from "../../../context/AudioContext";
import style from "./PlayFooter.module.scss";
import {IconButton } from "@mui/material";
import { Pause,PlayArrow } from "@mui/icons-material";
import formattingTime from "../../../utils/formattingTime";
import { TimeControl } from "./TimeControl";

export const PlayFooter =()=>{  
    const {currentTrack, toggleAudio,isPlaying} = useContext(AudioContext); 
    const {title,artists,preview, duration} = currentTrack;    
    const formatToMin = formattingTime(duration);

  return <div className={style.playfooter}>
           <img className={style.preview} src={preview} alt=""/>
           <IconButton onClick={()=> toggleAudio(currentTrack)}>
            {isPlaying ? <Pause/> : <PlayArrow/>}
           </IconButton>
           <div className={style.credits}>
             <h3>{title}</h3>
             <b>{artists}</b>
           </div>
           <div className={style.slider}>
            <TimeControl/>
             <p>{formatToMin}</p>
           </div>
        </div>;
}