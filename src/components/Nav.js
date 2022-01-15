import style from "./Nav.module.css";

function Nav() {

    return (
        <nav>
            <div className={style.header}>
                <div className={style.section}>
                    <div className={style.logo}>
                        <a href="#">NETLEX</a>
                    </div>
                    <div className={style.nav}>
                        <ul>
                            <li><a href={`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`}>High Rating</a></li>
                            <li><a href={`https://yts.mx/api/v2/list_movies.json?genres=action`}>Action</a></li>
                            <li><a href={`https://yts.mx/api/v2/list_movies.json?genres=fantasy`}>Fantasy</a></li>
                            <li><a href={`https://yts.mx/api/v2/list_movies.json?genres=sci-fi`}>Sci-Fi</a></li> 
                        </ul>
                    </div>
                    <div className={style.sns}>
                        <ul>
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