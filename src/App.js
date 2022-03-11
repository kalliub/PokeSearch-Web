import bg from "./assets/bg.png";
import "./App.css";
import { useState } from "react";
import PokemonInfo from "./components/PokemonInfo";
import SearchBar from "./components/SearchBar";
import { Fade } from "react-reveal";

function App() {
  const [pokemonInfo, setPokemonInfo] = useState({});

  return (
    <div className="App">
      <div>
        <img
          alt="bakcground"
          src={bg}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            objectFit: "contain",
          }}
        />
        <Fade>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              minHeight: "100vh",
            }}
          >
            <h1 className="slim-title">Search a Pokémon!</h1>
            <SearchBar
              onSubmitInfo={(info) => {
                setPokemonInfo({});
                setTimeout(() => {
                  setPokemonInfo(info);
                }, 10);
              }}
            />
            <Fade when={Object.keys(pokemonInfo).length > 0} mountOnEnter>
              <div
                style={{
                  background: "#333333CC",
                  margin: "50px 5vw",
                  padding: "20px 20px",
                  alignSelf: "center",
                  borderRadius: 20,
                }}
              >
                <PokemonInfo info={pokemonInfo} />
              </div>
            </Fade>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default App;
