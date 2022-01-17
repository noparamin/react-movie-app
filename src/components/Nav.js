import style from "./Nav.module.css";
import {Link} from "react-router-dom";
import home_logo from "../img/netflix_logo_icon.png";
import instagram_logo from "../img/instagram_logo.png";
import twitter_logo from "../img/twitter_logo.png";

function Nav() {
    return (
        <nav>
            <div className={style.header}>
                <div className={style.section}>
                    <div className={style.logo}>
                        <a className={style.a} href="/"><img src={home_logo} alt="홈 바로가기" width="40" height="40"></img></a>
                    </div>
                    <div className={style.nav}>
                        <ul className={style.ul}>
                            <li className={style.a}><Link to={`/page/romance`} style={{color: "#e7f5fe", fontWeight: "bold"}}>Romance</Link></li>
                            <li className={style.a}><Link to={`/page/action`} style={{color: "#e7f5fe", fontWeight: "bold"}}>Action</Link></li>
                            <li className={style.a}><Link to={`/page/fantasy`} style={{color: "#e7f5fe", fontWeight: "bold"}}>Fantasy</Link></li>
                            <li className={style.a}><Link to={`/page/sci-fi`} style={{color: "#e7f5fe", fontWeight: "bold"}}>Sci-Fi</Link></li> 
                        </ul>
                    </div>
                    <div className={style.sns}>
                        <ul className={style.ul}>
                            <li><a href="https://www.instagram.com/"><img src={instagram_logo} alt="인스타그램 바로가기" width="25" height="25"></img></a></li>
                            <li><a href="https://www.twitter.com/"><img src={twitter_logo} alt="트위터 바로가기" width="25" height="25"></img></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        
    );
}

export default Nav;