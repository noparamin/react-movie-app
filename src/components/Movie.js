import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";
//링크를 클릭해서 다른 페이지로 넘어갈 때 Link를 사용하면 새로고침하지 않고 넘어가진다.

function Movie({id, coverImg, title, summary, genres}) {
    return (
    <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link> 
        </h2>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul>
            {genres.map(g => <li key={g}>{g}</li>)}
        </ul>
  </div>
  );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;