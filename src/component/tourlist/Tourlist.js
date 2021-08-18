import React, { useState } from "react";
import Tour from "../tour/Tour";
import { useGlobalContext } from "../../context/context";

import "./Tourlist.scss";

const Tourlist = () => {
  const { ...state } = useGlobalContext();

  return (
    <>
      {state.data.length > 0 ? (
        <section className="tourlist">
          {state.data.map((item) => {
            return <Tour key={item.id} {...item} />;
          })}
        </section>
      ) : (
        <p className="noItem">no items for show</p>
      )}
    </>
  );
};

export default Tourlist;
