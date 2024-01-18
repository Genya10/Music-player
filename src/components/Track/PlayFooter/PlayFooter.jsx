import { useContext,useEffect,useState } from "react";
import { AudioContext } from "../../../context/AudioContext";
import style from "./PlayFooter.module.scss";
import { Slider,IconButton } from "@mui/material";
import { Pause,PlayArrow } from "@mui/icons-material";
import formattingTime from "../../../utils/formattingTime";

export const PlayFooter =()=>{
  const [currentTime,setCurrentTime] = useState(0);
  const {audio, currentTrack, toggleAudio,isPlaying} = useContext(AudioContext);
  const {title,artists,preview, duration} = currentTrack;
  const formatToMin = formattingTime(duration);
  const formatCurrentTime = formattingTime(currentTime);
  const sliderCurrentTime = Math.round((currentTime / duration) * 100);
  const changeCurrentTime=(_,value)=>{
    const time = Math.round((value / 100 * duration));
    setCurrentTime(time);
    audio.currentTime = time;
  }

  useEffect(()=>{
    const timeInterval = setInterval(()=>{
        setCurrentTime(audio.currentTime);
    },1000);
  },[]);

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
             <p>{formatCurrentTime}</p>
             <Slider step={1} min={0} max={100} 
                    value={sliderCurrentTime} onChange={changeCurrentTime}/>
             <p>{formatToMin}</p>
           </div>
        </div>;
}