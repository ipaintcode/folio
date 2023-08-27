import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const tags = (tags) =>
  tags.split(",").map((tag) => <span key={uuidv4()}>{tag}</span>);

const Tile = ({ href, heading, subHeading, image }) => (
  <li>
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      onClick={(event) => event.preventDefault()}
    >
      <h3>
        <div>{heading}</div>
        <section>{!!subHeading && tags(subHeading)}</section>
      </h3>
    </a>
    <img src={image} alt={heading} />
  </li>
);

Tile.propsTypes = {
  href: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Tile;
