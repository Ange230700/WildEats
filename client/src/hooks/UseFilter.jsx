import { useState, useEffect } from "react";

const UseFilter = (initialRestaurants) => {
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(initialRestaurants);
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    types: [],
    prices: [],
    notes: [],
  });

  useEffect(() => {
    let result = initialRestaurants;

    if (searchText) {
      result = result.filter((restaurant) =>
        restaurant.restaurantName
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    }

    if (filters.types.length > 0) {
      result = result.filter((restaurant) =>
        filters.types.includes(restaurant.category)
      );
    }

    if (filters.prices.length > 0) {
      result = result.filter((restaurant) =>
        filters.prices.includes(restaurant.price)
      );
    }

    if (filters.notes.length > 0) {
      result = result.filter((restaurant) =>
        filters.notes.includes(restaurant.note)
      );
    }

    setFilteredRestaurants(result);
  }, [searchText, filters, initialRestaurants]);

  const handleSearch = (text) => setSearchText(text);

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;

    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };

      if (checked) {
        newFilters[name].push(value);
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }

      return newFilters;
    });
  };

  return {
    filteredRestaurants,
    handleSearch,
    handleFilterChange,
  };
};

export default UseFilter;
