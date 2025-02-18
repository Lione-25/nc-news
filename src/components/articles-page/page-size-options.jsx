function PageSizeOptions({ setQueryParams, totalCount }) {
  function handleSelect({ target: { value } }) {
    setQueryParams((currParams) => {
      const newParams = { ...currParams, limit: value };
      const newTotalPages = Math.ceil(totalCount / value);
      if (currParams.p > newTotalPages) {
        newParams.p = newTotalPages;
      }
      return newParams;
    });
  }
  return (
    <>
      <label htmlFor="page-size-options" />
      <select id="page-size-options" onChange={handleSelect}>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  );
}
export default PageSizeOptions;
