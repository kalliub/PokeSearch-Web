import React from "react";

const PokemonDetail = ({ title, ...props }) => {
  return (
    <div style={{}}>
      <h3
        className="slim-title"
        style={{
          margin: 0,
          borderBottom: "1px solid white",
          paddingRight: 200,
        }}
      >
        {title}
      </h3>
      <ul
        style={{
          textAlign: "left",
          color: "white",
          paddingLeft: 20,
          lineHeight: 1.75,
          margin: "5px 5px 20px",
        }}
      >
        {props.children}
      </ul>
    </div>
  );
};

export default PokemonDetail;
