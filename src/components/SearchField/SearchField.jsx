import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { TextField, Theme } from "@lumx/react";
import { mdiMagnify } from "@lumx/icons";

import axios from "axios";

import useData from "../../store/DataContext";

const SearchField = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchValue, setSearchValue] = useState();
  const location = useLocation();
  const navigation = useNavigate();
  const { updateData, cleanData } = useData();

  // api call to get all characters then filter it with the user search value and dispatch it into data

  const getData = (searchValue) => {
    axios.get(`http://hp-api.herokuapp.com/api/characters/`).then((result) => {
      const sortedData = result.data.filter(
        (character) =>
          character.name.toLowerCase().includes(searchValue) && character.image
      );
      updateData(sortedData);
    });
  };

  // go back to search home page

  const navigateToHome = () => {
    if (location.pathname.includes("profile/")) {
      navigation("/");
    }
  };

  const handleSearchValue = (e) => {
    setSearchValue(e);
  };

  const handleCleanData = () => {
    cleanData();
    setSearchValue("");
    navigateToHome();
  };

  // handle enter key pressed

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      navigateToHome();
      getData(searchValue);
    }
  };

  return (
    <>
      <TextField
        theme={Theme.light}
        placeholder="Search ..."
        icon={mdiMagnify}
        onChange={(e) => handleSearchValue(e)}
        className={activeSearch ? "search-field active-search" : "search-field"}
        onFocus={() => setActiveSearch(true)}
        value={searchValue}
        onKeyPress={(e) => handleKeyPress(e)}
      />

      <button
        className={
          activeSearch
            ? "empty-data-button empty-data-button-active"
            : "empty-data-button"
        }
        onClick={() => handleCleanData()}
      >
        X
      </button>
    </>
  );
};

export default SearchField;
