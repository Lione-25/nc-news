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
    <>
      <h3>
        <form>
          <label htmlFor="sort-by">Sorted:</label>

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
          <label htmlFor="order" />
          <select
            name="order"
            id="order"
            value={order}
            onChange={handleSelectOrder}
          >
            <option value="asc">Asc ↑</option>
            <option value="desc">Desc ↓</option>
          </select>
        </form>
      </h3>
    </>
  );
}
export default SortOptions;
