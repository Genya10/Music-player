import { createContext,useState } from "react";
import tracks from "../assets/tracks";

const audio = new Audio();

export const AudioContext = createContext({});

export const AudioProvider = ({children})=>{
    const [currentTrack,setCurrentTrack] = useState(tracks[0]);
    const [isPlaying,setPlaying] = useState(false);

    const toggleAudio =(track)=>{
        if(currentTrack.id !== track.id){
            setCurrentTrack(track);
            setPlaying(true);
            audio.src = track.src;
            audio.currentTime = 0;
            audio.play();
            return;
        }
      if(isPlaying){
        audio.pause();
        setPlaying(false);
      }else{
        audio.play();
        setPlaying(true);
      }
    }
    const value = {currentTrack,isPlaying,toggleAudio};
    return <AudioContext.Provider value={value}>
              {children}
           </AudioContext.Provider>
}
