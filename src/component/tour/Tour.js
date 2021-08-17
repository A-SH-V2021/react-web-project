import React, { useState } from "react";
import icon from "../../delete.png";
import iconDown from "../../img/down-arrow.png";
import "./Tour.scss";

const Tour = ({ img, city, name, info }) => {
  const [show, setShow] = useState(false);

  const showInfoHandler = () => {
    setShow(!show);
  };
  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt="laptop" />
        <img src={icon} alt="deleteIcon" className="delete-icon" />
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info
          <img
            src={iconDown}
            alt="iconDown"
            className="iconDown"
            onClick={showInfoHandler}
          />
        </h5>
        {show && <p>{info}</p>}
      </div>
    </article>
  );
};

export default Tour;
