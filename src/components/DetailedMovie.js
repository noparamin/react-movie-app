import PropTypes from "prop-types";

function DetailedMovie({coverImg, title, rating, runtime, description}) {
    return (
    <div>
        <img src={coverImg} alt={title} />
        <h2>
            {title}
        </h2>
        <h3>
            Rating: {rating}
        </h3>
        <h3>
            Running time: {runtime} min
        </h3>
        <p>{description}</p>
  </div>
  );
}

DetailedMovie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default DetailedMovie;