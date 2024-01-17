import tracks from "../../assets/tracks";
import style from "./MainPage.module.scss";
import Track from "../../components/Track/Track";

const MainPage =()=>{
    return (
        <div className={style.search}>
            <>Search tracks</>
         <div className={style.list}>
          {tracks.map((track)=>(
            <div key={track.id}>
                <Track {...track}/>
            </div>
          ))}
         </div>
        </div>
    )

 
}


export default MainPage;