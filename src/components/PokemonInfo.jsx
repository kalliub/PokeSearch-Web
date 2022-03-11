import React from "react";
import PokemonDetail from "./PokemonDetail";

const PokemonInfo = ({ info }) => {
  return (
    <>
      <h1
        style={{
          fontFamily: "VT323",
          color: "white",
          fontSize: "3em",
          margin: "10px 0px",
        }}
      >
        {String(info.name).toUpperCase()}
      </h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            width: 150,
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={info?.sprites.front_default} alt="sprite" height={150} />
        </div>

        <div style={{ marginLeft: 20 }}>
          <PokemonDetail title="General Info">
            <li type="none">
              <b>Type</b>:{" "}
              {info.types.map(({ type }, index) => {
                return `${index !== 0 ? ", " : ""}${type.name.toUpperCase()}`;
              })}
            </li>
            <li type="none">
              <b>Weight</b>: {info.weight / 10} kgs
            </li>
            <li type="none">
              <b>Height</b>: {info.height / 10} m
            </li>
            <li type="none">
              <b>Base Experience</b>: {info.base_experience} XP
            </li>
          </PokemonDetail>

          <PokemonDetail title="Abilities">
            {info.abilities.map(({ ability }) => (
              <b>
                <li type="none">
                  {String(ability.name).charAt(0).toUpperCase()}
                  {String(ability.name).slice(1)}
                </li>
              </b>
            ))}
          </PokemonDetail>

          <PokemonDetail title="Held Items">
            {info.held_items.length === 0 && "No items"}
            {info.held_items.map((item) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 5,
                }}
              >
                <img
                  src={item.sprites.default}
                  alt="item"
                  style={{ transform: "scale(110%)", marginRight: 10 }}
                />
                <>
                  <li type="none">
                    {String(item.name).charAt(0).toUpperCase()}
                    {String(item.name).slice(1)}
                  </li>
                </>
              </div>
            ))}
          </PokemonDetail>
        </div>
      </div>
    </>
  );
};

export default PokemonInfo;
