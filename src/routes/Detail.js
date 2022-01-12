import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailedMovie from "../components/DetailedMovie";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();

    }, []);
    console.log(movie);
    return (
    <div>
        {loading ? <h1>Loading...</h1> : 
        <div>
            <DetailedMovie coverImg={movie.medium_cover_image} title={movie.title} rating={movie.rating} runtime={movie.runtime} description={movie.description_full} />
        </div>}
    </div>
    );
}

export default Detail;