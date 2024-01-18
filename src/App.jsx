import {MainPage} from "./pages/MainPage/MainPage";
import { PlayFooter } from "./components/Track/PlayFooter/PlayFooter";
import style from "./global.module.scss";

export const App=()=>(
<div className={style.wrapper}>
  <MainPage/>
  <PlayFooter/>
</div>)


