import PropTypes from "prop-types";
import style from "./DetailedMovie.module.css";

function DetailedMovie({coverImg, title, rating, runtime, description}) {
    return (
    <div>
        <div className={style.box}>
            <div>
                <img src={coverImg} alt={title} />
            </div>
            <div className={style.text}>
                <h2>{title}</h2>
                <h3>
                    Rating: {rating} / 10
                </h3>
                <h3>
                    Running time: {runtime} min
                </h3>
                <h4>{description}</h4>
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
    description: PropTypes.string.isRequired
};

export default DetailedMovie;