import style from "./Nav.module.css";

function Nav() {

    return (
        <nav>
            <div>
            <ul className={style.ul}>
                <div className={style.home}>
                    <li className={style.li}><a href="../routes/Home.js">NETFELX</a></li>
                </div>
                
                <li className={style.li}><a href={`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`}>High Rating</a></li>
                <li className={style.li}><a href={`https://yts.mx/api/v2/list_movies.json?genres=action`}>Action</a></li>
                <li className={style.li}><a href={`https://yts.mx/api/v2/list_movies.json?genres=fantasy`}>Fantasy</a></li>
                <li className={style.li}><a href={`https://yts.mx/api/v2/list_movies.json?genres=sci-fi`}>Sci-Fi</a></li>                
            </ul>
            </div>
        </nav>
        
    );
}

export default Nav;