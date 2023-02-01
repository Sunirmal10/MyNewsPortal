import React, { useContext } from "react";
import FilteredNews from "./FilteredNews";
import SearchNews from "./SearchNews";
import { ValueContext } from "./context";

function News() {
  const { Filtered, Searched } = useContext(ValueContext);
  console.log("filtered", Filtered);
  console.log("searched", Searched);

  return (
    <div style={{ width: "46rem", left: "18.5rem" }}>
      {Filtered ? (
        <FilteredNews />
      ) : Searched ? (
        <SearchNews />
      ) : (
        <p style={{ textAlign: "center", color: "gray", padding: "10px" }}>
          {" "}
          Welcome here! Search your query topics using the search bar, or try
          advanced searching. Happy news reading!
        </p>
      )}
    </div>
  );
}

export default News;
