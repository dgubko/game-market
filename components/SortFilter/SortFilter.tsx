import React from "react";
import Router from "next/router";

export const SortFilter = () => {
  const [filter, setFilter] = React.useState<string>("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  React.useEffect(() => {
    Router.push({
      query: {
        filter: filter.replace("-reverse", ""),
        reversed: filter.includes("reverse"),
      },
    });
  }, [filter]);

  return (
    <select className="selector-menu" onChange={handleChange} value={filter}>
      <option value="">Sort By</option>
      <option value="rating">Rating: Low to High</option>
      <option value="rating-reverse">Rating: High to Low</option>
      {/* <option value="releaseDate">Release date</option> */}
      <option value="salePrice">Price: Low to High</option>
      <option value="salePrice-reverse">Price: High to Low</option>
      <option value="name">Name: A to Z</option>
      <option value="name-reverse">Name: Z to A</option>
    </select>
  );
};
