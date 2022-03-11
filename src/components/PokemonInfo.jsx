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
            {info.abilities.map((ab) => (
              <b>
                <li type="none">
                  {String(ab.ability.name).charAt(0).toUpperCase()}
                  {String(ab.ability.name).slice(1)}
                </li>
              </b>
            ))}
          </PokemonDetail>
        </div>
      </div>
    </>
  );
};

export default PokemonInfo;
