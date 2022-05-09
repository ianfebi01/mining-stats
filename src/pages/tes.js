import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Posts() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getJembot();
  }, []);

  const getJembot = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setAPIData(response.data);
  };
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        className="button"
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <div itemsPerRow={3} style={{ marginTop: 20 }}>
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return (
                <div>
                  <div>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                  </div>
                </div>
              );
            })
          : APIData.map((item) => {
              return (
                <div>
                  <div>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
