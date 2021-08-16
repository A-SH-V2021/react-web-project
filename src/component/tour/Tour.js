import React from "react";
import icon from "../../delete.png";
import iconDown from "../../img/down-arrow.png";
import "./Tour.scss";

const Tour = () => {
  return (
    <article className="tour">
      <div className="img-container">
        <img
          src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="laptop"
        />
        <img src={icon} alt="deleteIcon" className="delete-icon" />
      </div>
      <div className="tour-info">
        <h3>picture</h3>
        <h4>name</h4>
        <h5>info
          <img src={iconDown} alt="iconDown" className='iconDown'/>
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
          consequuntur.
        </p>
      </div>
    </article>
  );
};

export default Tour;
