import React from "react";
import PropTypes from "prop-types";
import "./card.css";
import Image from "next/image";
import image from "../public/images/womenintech.png";

const Card = ({ header, text, link }) => {
  return (
    <article className="card" role="region" aria-label="Card Content">
      <div className="custom-row">
        <div className>
          <Image
            src={image}
            alt="Card photo"
            width={200}
            height={200}
            className="custom-img"
          />
        </div>
        <div>
          <div className="card-body">
            <h1 className="card-title">{header}</h1>
            <p className="card-text">{text}</p>
            <a href={link}>Read More</a>
          </div>
        </div>
      </div>
    </article>
  );
};

Card.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};
export default Card;
