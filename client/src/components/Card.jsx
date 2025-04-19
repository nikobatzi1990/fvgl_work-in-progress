import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function Card(props) {
  const { title, developer, year, genre, imageUrl } = props;
  return (
    <div className="card">
      {imageUrl ? (
        <img src={imageUrl} alt="video game" className="card-img-top" />
      ) : (
        <img
          src="https://res.cloudinary.com/dp2pjsbnz/image/upload/v1745035806/27002_ss0dyb.jpg"
          alt="default"
          className="card-img-top"
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{developer}</p>
        <p className="card-text">{year}</p>
        <p className="card-text">{genre}</p>
        <div
          className="btn-group d-flex"
          role="group"
          aria-label="delete and edit buttons"
        >
          <DeleteButton />
          <EditButton />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  developer: PropTypes.string,
  year: PropTypes.number.isRequired,
  genre: PropTypes.string,
  imageUrl: PropTypes.string,
};

Card.defaultProps = {
  developer: "",
  genre: "",
  imageUrl: "",
};

export default Card;
