import { useState,useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import useDebounce from "../Customhook/useDebouncing";
import "./SearchBar.css";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const debouncedInput = useDebounce(input, 300);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  useEffect(() => {
    if (debouncedInput.trim() !== "") {
      fetchData(debouncedInput);
    } else {
      setResults([]);
    }
  }, [debouncedInput]);

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
