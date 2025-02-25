import { useEffect, useState } from "react";
import PageSizeOptions from "./page-size-options";

function Pagination({ setQueryParams, queryParams, totalCount, href }) {
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    setTotalPages(Math.ceil(totalCount / (queryParams.limit || 10)));
  }, [totalCount, queryParams.limit]);

  const changePage = (value) => {
    setQueryParams((currParams) => {
      const currPage = currParams.p;
      return { ...currParams, p: currPage + value };
    });
  };
  return (
    <>
      <div className="pagination">
        <p>
          display{" "}
          <PageSizeOptions
            setQueryParams={setQueryParams}
            totalCount={totalCount}
          />{" "}
          per page
        </p>
        <div className="pagination-buttons">
          <a href={href}>
            <button
              disabled={queryParams.p <= 1}
              onClick={() => {
                changePage(-1);
              }}
            >
              Previous Page
            </button>
          </a>

          <p>
            - page {queryParams.p} of {totalPages} -
          </p>

          <a href={href}>
            <button
              disabled={queryParams.p >= totalPages}
              onClick={() => {
                changePage(1);
              }}
            >
              Next Page
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Pagination;
