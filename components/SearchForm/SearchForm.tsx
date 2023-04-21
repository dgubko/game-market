import React from "react";
import Router from "next/router";

export const SearchForm = () => {
  const [search, setSearch] = React.useState<string>("");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  React.useEffect(() => {
    Router.push({
      query: { search: search.toLowerCase() },
    });
  }, [search]);

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search a game..."
      value={search}
      onChange={handleChange}
    />
  );
};
