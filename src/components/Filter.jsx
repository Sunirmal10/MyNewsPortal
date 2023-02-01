import React, { useContext } from "react";
import { language, countryCodes, topics, sorting } from "./Array";
import { ValueContext } from "./context";
import "./input.css";
import "./filter.css";
import * as Gr from "react-icons/gr";

function PageA() {
  const {
    show,
    coun,
    select,
    topicx,
    sort,
    handleChange,
    handleCon,
    handleSort,
    handleTop,
    handleKey,
    handleSubmit,
  } = useContext(ValueContext);

  return (
    <div className="filter" style={show ? { left: "0" } : { left: "-20rem" }}>
      <p className="keysugg">
        Tips (for search and advanced search):
        <br />
        1. Search for any person or company name using double quotes (for
        example, "Charles Babbage")
        <br />
        2. Use AND, OR boolean operators (for example, lion OR tiger)
      </p>
      <strong>ADVANCED SEARCH:</strong>
      <p className="req">
        <span style={{ color: "red" }}>*</span>reqiured
      </p>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">
          <strong>Publisher language:</strong>
          <select
            className="input"
            value={select}
            onChange={(e) => handleChange(e)}
          >
            {language.map((x, i) => (
              <option>{x}</option>
            ))}
          </select>
        </label>

        <br />

        <label htmlFor="">
          <strong>
            Publisher country:<span style={{ color: "red" }}>*</span>
          </strong>
          <select
            className="input"
            value={coun.name}
            onChange={(e) => handleCon(e)}
          >
            {countryCodes.map((x) => (
              <option value={x.code}>{x.name}</option>
            ))}
          </select>
        </label>

        <br />

        <label htmlFor="">
          <strong>
            Topics:<span style={{ color: "red" }}>*</span>
          </strong>
          <select
            className="input"
            value={topicx}
            onChange={(e) => handleTop(e)}
          >
            {topics.map((x) => (
              <option>{x}</option>
            ))}
          </select>
        </label>

        <br />

        <label htmlFor="">
          <strong>
            Sort by:<span style={{ color: "red" }}>*</span>
          </strong>
          <select
            className="input"
            value={sort}
            name="sort"
            onChange={handleSort}
          >
            {sorting.map((x) => (
              <option>{x}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          <strong>
            Enter Keywords:<span style={{ color: "red" }}>*</span>
          </strong>
          <input
            className="input"
            type="text"
            placeholder="Enter Keywords"
            onChange={(e) => handleKey(e)}
          />
        </label>
        <br />
        <div className="btngrp">
          <input type="submit" className="btn" value="SUBMIT" />
          <input type="reset" className="btn" value="RESET" />
        </div>
      </form>
    </div>
  );
}

export default PageA;
