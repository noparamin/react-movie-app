import PropTypes from "prop-types";
import style from "./DetailedMovie.module.css";

function DetailedMovie({coverImg, title, rating, runtime}) {
    return (
    <div>
        <div className={style.box}>
            <div>
                <img src={coverImg} alt={title} />
            </div>
            <div className={style.text}>
                <h2>{title}</h2>
                <h3>
                    Rating: {rating}
                </h3>
                <h3>
                    Running time: {runtime} min
                </h3>
            </div>
            
        </div>
        
  </div>
  );
}

DetailedMovie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
};

export default DetailedMovie;