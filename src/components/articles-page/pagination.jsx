import { useEffect, useState } from "react";
import PageSizeOptions from "./page-size-options";

function Pagination({ setQueryParams, queryParams, totalCount }) {
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    setTotalPages(Math.ceil(totalCount / (queryParams.limit || 10)));
  }, [totalCount, queryParams.limit]);

  const changePage = (value) => {
    setQueryParams((currParams) => {
      const currPage = currParams.p || 1;
      return { ...currParams, p: currPage + value };
    });
  };
  return (
    <>
      <p>
        display{" "}
        <PageSizeOptions
          setQueryParams={setQueryParams}
          totalCount={totalCount}
        />{" "}
        per page
      </p>
      <div className="pagination">
        <a href="#articles">
          <button
            disabled={queryParams.p <= 1 || queryParams.p === undefined}
            onClick={() => {
              changePage(-1);
            }}
          >
            Previous Page
          </button>
        </a>
        <div>
          <p>
            - page {queryParams.p || 1} of {totalPages} -
          </p>
          <a href="#">
            <button>Back to Top</button>
          </a>
        </div>

        <a href="#articles">
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
    </>
  );
}
export default Pagination;
