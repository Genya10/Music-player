import { useContext,useEffect,useState } from "react";
import { AudioContext } from "../../../context/AudioContext";
import { Slider} from "@mui/material";
import formattingTime from "../../../utils/formattingTime";

export const TimeControl =()=>{
    const {audio,currentTrack} = useContext(AudioContext);
    const {duration} = currentTrack;
    const [currentTime,setCurrentTime] = useState(0);
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
    }, 1000);
    //return clearInterval(timeInterval);   
  }, []);

 return  (  
    <>
      <p>{formatCurrentTime}</p>
      <Slider 
         step={1} min={0} max={100} 
         value={sliderCurrentTime} 
         onChange={changeCurrentTime}/>
    </>);
}