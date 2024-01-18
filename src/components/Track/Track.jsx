import { useContext } from "react";
import { AudioContext } from "../../context/AudioContext";
import style from "./track.module.scss";
import { IconButton } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import formattingTime from "../../utils/formattingTime";

const Track =(track)=>{
    const {id,src,preview,title,artists,duration} = track;
    const {toggleAudio} = useContext(AudioContext);
    const formatToMin = formattingTime(duration);

  return <div className={style.track}>
    <IconButton onClick={()=>toggleAudio(track)}>
      <PlayArrow/>
    </IconButton>
    <img className={style.preview} src={preview} alt=""/>
    <div className={style.credits}>
        <b>{title}</b>
        <p>{artists}</p>
    </div>
    <p>{formatToMin}</p>
  </div>
}

export default Track;