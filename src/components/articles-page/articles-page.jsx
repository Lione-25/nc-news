import { useState, useEffect } from "react";
import ArticlesList from "./articles-list";
import NavPath from "./nav-path";
import Pagination from "./pagination";
import SortOptions from "./sort-options";
import { fetchArticles } from "../../api";

function ArticlesPage() {
  const [queryParams, setQueryParams] = useState({});
  const [articlesInfo, setArticlesInfo] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchArticles(queryParams).then(([articlesInfo, totalCount]) => {
      setArticlesInfo(articlesInfo);
      setTotalCount(totalCount);
    });
  }, [queryParams]);

  return (
    <>
      <NavPath />
      <h1 id="articles">Articles</h1>
      <SortOptions setQueryParams={setQueryParams} />
      <ArticlesList articlesInfo={articlesInfo} />
      <Pagination
        setQueryParams={setQueryParams}
        queryParams={queryParams}
        totalCount={totalCount}
      />
    </>
  );
}
export default ArticlesPage;
