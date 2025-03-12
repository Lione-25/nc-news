import { useState } from "react";

function SortOptions({ setQueryParams }) {
  const [order, setOrder] = useState("desc");

  const handleSelectSortBy = ({ target: { value } }) => {
    setQueryParams((currParams) => {
      return { ...currParams, sort_by: value, order };
    });
  };

  function handleSelectOrder({ target: { value } }) {
    setOrder(value);
    setQueryParams((currParams) => {
      return { ...currParams, order: value };
    });
  }

  return (
    <div className="sort-options">
      <form>
        <div>
          <label htmlFor="sort-by">Sort By:</label>
          <select name="sort-by" id="sort-by" onChange={handleSelectSortBy}>
            <option value="created_at">
              {order === "desc" ? "Latest" : "Oldest"}
            </option>
            <option value="votes">
              {order === "desc" ? "Most" : "Least"} Votes
            </option>
            <option value="title">
              Title {order === "desc" ? "Z-A" : "A-Z"}
            </option>
            <option value="author">
              Author {order === "desc" ? "Z-A" : "A-Z"}
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="order">Order:</label>
          <select
            name="order"
            id="order"
            value={order}
            onChange={handleSelectOrder}
          >
            <option value="asc">Asc ↑</option>
            <option value="desc">Desc ↓</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SortOptions;
