import React, { useState, useEffect } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import styles from "../styles/Searchbar.module.css";

function Searchbar({ onQueryChange, category }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onQueryChange(query); // Call the callback function with the query value
    // document.getElementById("search_input").value = "";
    // document.getElementById("search_results").innerHTML =
    //   "Your Search Results for: <strong>" + query + "</strong>";
  };

  return (
    <>
      <InputGroup className="mb-3 w-50 mx-auto">
        <Form.Control
          id="search_input"
          placeholder={`Search for ${
            category === "" ? "all" : category
          } headlines here...`}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <Button
          variant="outline-secondary"
          id="search_button"
          className={styles.searchbutton}
          onClick={handleSearch}
        >
          Search
        </Button>
      </InputGroup>
    </>
  );
}

export default Searchbar;
