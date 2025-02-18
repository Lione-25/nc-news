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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(queryParams).then(([articlesInfo, totalCount]) => {
      setIsLoading(false);
      setArticlesInfo(articlesInfo);
      setTotalCount(totalCount);
    });
  }, [queryParams]);

  return (
    <>
      <NavPath />
      <h1 id="articles">Articles</h1>
      <SortOptions setQueryParams={setQueryParams} />
      <ArticlesList articlesInfo={articlesInfo} isLoading={isLoading} />
      <Pagination
        setQueryParams={setQueryParams}
        queryParams={queryParams}
        totalCount={totalCount}
      />
    </>
  );
}
export default ArticlesPage;
