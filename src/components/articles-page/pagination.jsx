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
        <div className="pagination-header">
          <p>
            Display{" "}
            <PageSizeOptions
              setQueryParams={setQueryParams}
              totalCount={totalCount}
            />{" "}
            per page
          </p>
        </div>

        <div className="pagination-controls bold-btn">
          <a href={href}>
            <button
              disabled={queryParams.p <= 1}
              onClick={() => {
                changePage(-1);
              }}
            >
              ⬅ Prev
            </button>
          </a>

          <p className="pagination-info">
            Page <strong>{queryParams.p}</strong> of{" "}
            <strong>{totalPages}</strong>
          </p>

          <a href={href}>
            <button
              disabled={queryParams.p >= totalPages}
              onClick={() => {
                changePage(1);
              }}
            >
              Next ➡
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Pagination;
