import { useState, useEffect } from "react";

const useFetchData = (url, value, setResult) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });

        setResult(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const delayTimer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(delayTimer);
  }, [url, value, setResult]);
};

export default useFetchData;
