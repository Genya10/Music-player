import { useContext } from "react";
import { AudioContext } from "../../context/AudioContext";
import style from "./track.module.scss";
import { IconButton } from "@mui/material";
import { PlayArrow,Pause } from "@mui/icons-material";
import formattingTime from "../../utils/formattingTime";
import cn from "classnames";

export const Track =(track)=>{
    const {id,src,preview,title,artists,duration} = track;
    const {toggleAudio,currentTrack,isPlaying} = useContext(AudioContext);
    const isCurrentTrack = currentTrack.id === track.id;
    const formatToMin = formattingTime(duration);

  return <div 
      className={cn(style.track, isCurrentTrack && style.playing)}>
    <IconButton onClick={()=>toggleAudio(track)}>
      {isCurrentTrack && isPlaying ? <Pause/> : <PlayArrow/>}
    </IconButton>
    <img className={style.preview} src={preview} alt=""/>
    <div className={style.credits}>
        <b>{title}</b>
        <p>{artists}</p>
    </div>
    <p>{formatToMin}</p>
  </div>
}

