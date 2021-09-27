import React from "react";
import { useHistory, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ReactPlayer from "react-player";

function Description({ movies }) {
  const history = useHistory();
  const { ID } = useParams();
  const film = movies.find((el) => el.id === Number(ID));

  return (
    <div className="description-container">
      <h1> {film.name}</h1>

      <div className="movie-des">
        <div className="movie-name">
          <img
            src={film.posterurl}
            alt=""
            style={{ width: 150, height: 220 }}
          />
        </div>
        <div className="movie-p">
          <p>{film.description}</p>
          <div className="str">
            <ReactStars value={film.rating} edit={false} />
          </div>
        </div>
      </div>
      <div className="movie-link">
        <h2> Check The Trailer</h2>
        <ReactPlayer
          className="video"
          width="870px"
          height="480px"
          controls
          url={film.trailer}
        />
      </div>
      <button className="btn btn-dark bouton" onClick={() => history.goBack()}>
        <i className="fa fa-angle-double-left"> Back </i>
      </button>
    </div>
  );
}

export default Description;
