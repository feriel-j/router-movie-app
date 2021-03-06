import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import ReactStars from "react-rating-stars-component";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`description/${movie.id}`}>
        <Card className="cardm">
          <Card.Img
            variant="top"
            src={movie.posterurl}
            style={{ width: 300, height: 400 }}
          />
          <Card.Body className="movie-info">
            <Card.Title>{movie.name}</Card.Title>
            <Card.Text className="description">{movie.description}</Card.Text>
            <ReactStars value={movie.rating} edit={false} />
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
