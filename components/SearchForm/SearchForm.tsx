import React from "react";
import Router from "next/router";

export const SearchForm = () => {
  const [search, setSearch] = React.useState<string>("");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    Router.push({
      query: { search: search.toLowerCase() },
    });
  }, [search]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search a game..."
        value={search}
        onChange={handleChange}
      />
    </form>
  );
};
