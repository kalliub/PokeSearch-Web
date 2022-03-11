import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { getPokemon } from "../api";
import { Oval } from "react-loader-spinner";
import { Magnifier } from "../assets/Magnifier.js";
import Fade from "react-reveal";

const SearchBar = ({ onSubmitInfo }) => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const submitSearch = async () => {
    setWarningMessage("");
    setLoading(true);

    const [infoJson, infoRes] = await getPokemon({
      name: searchText,
    }).catch((res) => {
      setWarningMessage(
        "Unfortunately there was a server error. Try again later."
      );
      setLoading(false);
      return false;
    });

    if (infoRes.status === 404) {
      setWarningMessage(`Pokémon "${searchText}" was not found!`);
    } else if (infoRes.ok) {
      onSubmitInfo(await infoJson);
    }
    setLoading(false);
  };

  const disableSubmit = () => {
    return searchText.length === 0 || loading === true;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        margin: "10px 0px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          transform: "scale(120%)",
        }}
      >
        <TextInput
          placeholder="Pikachu"
          width="15vw"
          onTextChange={(text) => setSearchText(text)}
          onEnterPress={disableSubmit() ? false : submitSearch}
        />
        <Button
          style={{ marginLeft: 20, width: 40 }}
          onClick={() => {
            if (loading) return false;
            submitSearch();
          }}
          disabled={disableSubmit()}
        >
          {loading ? (
            <Oval height={20} color="black" secondaryColor="" />
          ) : (
            <Magnifier color={disableSubmit() ? "grey" : "black"} />
          )}
        </Button>
      </div>
      {warningMessage && (
        <Fade>
          <div
            style={{
              background: "#d43131",
              borderRadius: 5,
              marginTop: 20,
              width: "100%",
              padding: 5,
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "0.8em",
              }}
            >
              {warningMessage}
            </span>
          </div>
        </Fade>
      )}
    </div>
  );
};

export default SearchBar;
