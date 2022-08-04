import React, { useState } from "react";
import "./App.scss";
import datas from "./datas.json";

const App = () => {
  const [searched, setSearched] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    let words = e.target.value;
    setSearched(words);
    console.log(words);
  };

  return (
    <>
      <h1>Search</h1>

      <input
        type="text"
        value={searched}
        placeholder="search..."
        className="search_input"
        onChange={handleChange}
        role="search"
      />

      <div role='list'>
        {datas
          .filter((val) => {
            if (searched === "") {
              return val;
            } else if (
              val.first_name.toLowerCase().includes(searched.toLowerCase())
            ) {
              return val;
            }
          })
          .map((value, key) => {
            return (
              <p key={key} className="user" role="listitem">
                {value.first_name} - {value.email}
              </p>
            );
          })}
      </div>
    </>
  );
};

export default App;
