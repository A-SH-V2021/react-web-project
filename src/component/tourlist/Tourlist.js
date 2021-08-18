import React,{useState} from "react";
import Tour from "../tour/Tour";
import {tourData} from '../../tourData'

import "./Tourlist.scss";

const Tourlist = () => {

  const [data, setData] = useState(tourData)
 
  return (
    <section className='tourlist'>
     {data.map((item)=>{
return <Tour key={item.id} {...item}/>
     })}
    </section>
  );
};

export default Tourlist;
