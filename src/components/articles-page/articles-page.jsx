import { useState, useEffect } from "react";
import ArticlesList from "./articles-list";
import NavPath from "./nav-path";
import Pagination from "./pagination";
import SortOptions from "./sort-options";
import { fetchArticles } from "../../api";

function ArticlesPage() {
  const [queryParams, setQueryParams] = useState({});
  const [articlesInfo, setArticlesInfo] = useState([]);

  useEffect(() => {
    fetchArticles(queryParams).then((articlesInfo) => {
      setArticlesInfo(articlesInfo);
    });
  }, [queryParams]);

  return (
    <>
      <NavPath />
      <h1>Articles</h1>
      <SortOptions setQueryParams={setQueryParams} />
      <ArticlesList articlesInfo={articlesInfo} />
      <Pagination />
    </>
  );
}
export default ArticlesPage;
