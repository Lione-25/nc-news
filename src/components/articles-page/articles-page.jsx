import { useState, useEffect } from "react";
import ArticlesList from "./articles-list";
import NavPath from "./nav-path";
import Pagination from "./pagination";
import SortOptions from "./sort-options";
import { fetchArticles } from "../../api";
import { useSearchParams } from "react-router-dom";
import SelectTopic from "../article-page/select-topic";

function ArticlesPage() {
  const [queryParams, setQueryParams] = useState({});
  const [articlesInfo, setArticlesInfo] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [topic, setTopic] = useState("");

  useEffect(() => {
    setTopic(searchParams.get("topic"));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles({ ...queryParams, topic })
      .then(([articlesInfo, totalCount]) => {
        setIsLoading(false);
        setArticlesInfo(articlesInfo);
        setTotalCount(totalCount);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [queryParams, topic]);

  return (
    <>
      <NavPath topic={topic} />
      <h1 id="articles">{topic ? topic : "Articles"}</h1>
      <SortOptions setQueryParams={setQueryParams} />
      <SelectTopic
        topic={topic}
        setTopic={setTopic}
        setSearchParams={setSearchParams}
      />
      <ArticlesList
        articlesInfo={articlesInfo}
        isLoading={isLoading}
        isError={isError}
        setTopic={setTopic}
        setSearchParams={setSearchParams}
      />
      <Pagination
        setQueryParams={setQueryParams}
        queryParams={queryParams}
        totalCount={totalCount}
      />
    </>
  );
}
export default ArticlesPage;
