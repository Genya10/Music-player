import tracks from "../../assets/tracks";
import style from "./MainPage.module.scss";

const MainPage =()=>{
    return (
        <div className={style.search}>
            <>Search tracks</>
         <div className={style.list}>
          {tracks.map((track)=>(
            <div>
                {JSON.stringify(track)}
            </div>
          ))}
         </div>
        </div>
    )

 
}


export default MainPage;