import React,{useState} from "react";
import Tour from "../tour/Tour";
import {tourData} from '../../tourData'

import "./Tourlist.scss";

const Tourlist = () => {

  const [data, setData] = useState(tourData)
  console.log(data);
  return (
    <section className='tourlist'>
     {tourData.map((item)=>{
return <Tour key={item.id} {...item}/>
     })}
    </section>
  );
};

export default Tourlist;
