import React from "react";

const Cards = (props) => {
  return (
    <div style={{ margin: "20px 20px 20px 20px" }}>
      <div>
        <img
          src={props.image}
          alt=""
          style={{ 
            width: "300px",
            height: "500px"
           }}
        />
      </div>

      <div style={{ width: 300 }}>
        <h3>{props.title}</h3>
        <p>
          {props.desc}
        </p>

        <span><b>{props.price}</b>$</span>
      </div>
    </div>
  );
};

export default Cards;
