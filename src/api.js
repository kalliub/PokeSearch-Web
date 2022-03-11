const baseUrl = "http://localhost:1337";

export const getPokemon = ({ name }) =>
  fetch(`${baseUrl}/api/pokemons/${name}`, {
    method: "GET",
  }).then((res) => [res.json(), res]);
