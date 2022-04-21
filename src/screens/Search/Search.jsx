import React, { useState } from "react";

import useData from "../../store/DataContext";

import { Card } from "../../components/Card/Card";

import ReactPaginate from "react-paginate";

import HogwartsEmblem from "../../assets/images/hogwarts-emblem.png";

const Search = () => {
  const { data } = useData();
  const dataLength = data?.length;

  const [pageNumber, setPageNumber] = useState(0);

  const charactersPerPage = 4;
  const pagesVisited = pageNumber * charactersPerPage;

  // display the result of sliced characters

  const displayCharacters = data
    ?.slice(pagesVisited, pagesVisited + charactersPerPage)
    .map((character, index) => <Card key={index} search={character} />);

  // display the number of pages

  const pageCount = Math.ceil(dataLength / charactersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <main>
      {data ? (
        <>
          <div className="characters-pagination-container">
            {displayCharacters}
          </div>
          {dataLength > 4 && (
            <ReactPaginate
              previousLabel={<span className="arrow-left">&#8678;</span>}
              nextLabel={<span className="arrow-right">&#8680;</span>}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pagination-btns"}
              previousLinkClassName={"previous-btn"}
              nextLinkClassName={"next-btn"}
              disabledClassName={"pagination-disabled"}
              activeClassName={"pagination-active"}
            />
          )}
        </>
      ) : (
        <div className="welcome-container">
          <h1>Welcome to Harry Potter Search</h1>
          <h2>The website to search a character from Harry Potter</h2>
          <h3>and find the infos you were looking for and much more</h3>
          <div className="welcome-image">
            <img src={HogwartsEmblem} alt="hogwarts emblem harry potter" />
          </div>
        </div>
      )}
    </main>
  );
};

export default Search;
