import style from "./Nav.module.css";
import {Link} from "react-router-dom";
import {useState} from "react";
import home_logo from "../img/netflix_logo_icon.png";

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
                            <li className={style.a}><Link to={`/page/Romance`}>Romance</Link></li>
                            <li className={style.a}><Link to={`/page/Action`}>Action</Link></li>
                            <li className={style.a}><Link to={`/page/Fantasy`}>Fantasy</Link></li>
                            <li className={style.a}><Link to={`/page/Sci-Fi`}>Sci-Fi</Link></li>
                        </ul>
                    </div>
                    <div className={style.sns}>
                        <ul className={style.ul}>
                            <li>a</li>
                            <li>b</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        
    );
}

export default Nav;