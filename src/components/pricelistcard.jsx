import React from "react";
import Info from "./priceinfo";

function Card(props) {
    return (
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          
        </div>
        <div className="bottom">
          <Info priceInfo={props.längd} />
          <Info priceInfo={props.ålder} />
          <Info priceInfo={props.antal} />
          <Info priceInfo={props.övrigt} />
          <Info priceInfo={props.pris} />
          <Info priceInfo={props.plats} />
        </div>
      </div>
    );
  }
  
  export default Card;