import React from "react";
import icon from  '../../delete.png';
import "./Tour.scss";

const Tour = () => {
  return (
    <article className="tour">
      <div className="img-container">
        <img
          src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="laptop"
        />
        <img src={icon} alt="deleteIcon" />
        
      </div>
    </article>
  );
};

export default Tour;
