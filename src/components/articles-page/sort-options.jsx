function SortOptions({ setQueryParams }) {
  const handleSelect = ({ target: { value } }) => {
    const order = value === "title" || value === "author" ? "asc" : "desc";

    setQueryParams((currParams) => {
      return { ...currParams, sort_by: value, order };
    });
  };

  return (
    <>
      <h3>
        <label htmlFor="sortBy">Sorted: </label>

        <select name="sortBy" id="sortBy" onChange={handleSelect}>
          <option value="created_at">Latest</option>
          <option value="votes">Most Votes</option>
          <option value="title">Title A-Z</option>
          <option value="author">Author A-Z</option>
        </select>
      </h3>
    </>
  );
}
export default SortOptions;
