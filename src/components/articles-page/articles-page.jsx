import { useState, useEffect } from "react";
import ArticlesList from "./articles-list";
import NavPath from "./nav-path";
import Pagination from "./pagination";
import { fetchArticles, fetchTopics } from "../../api";
import { useSearchParams } from "react-router-dom";
import SelectTopic from "../article-page/select-topic";
import LoadingOverlay from "../loading-overlay";

function ArticlesPage() {
  const [queryParams, setQueryParams] = useState({ p: 1 });
  const [articlesInfo, setArticlesInfo] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const [topic, setTopic] = useState("");

  const [topicsList, setTopicsList] = useState([]);

  const [topicNotFound, setTopicNotFound] = useState(false);

  useEffect(() => {
    fetchTopics().then(({ slugs }) => {
      setTopicsList(slugs);

      const searchedTopic = searchParams.get("topic");
      if (slugs.includes(searchedTopic)) {
        setTopic(searchedTopic);
      } else if (searchedTopic && searchedTopic !== null) {
        setTopicNotFound(true);
      }
    });
  }, []);

  useEffect(() => {
    setIsError(false);
    setTopicNotFound(false);
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
      {isLoading && <LoadingOverlay />}
      <NavPath topic={topic} />
      <div className="articles-title-select-topic-container">
        <h1 id="articles">{topic ? topic : "Articles"}</h1>
        {!topic && (
          <SelectTopic
            topic={topic}
            setTopic={setTopic}
            setSearchParams={setSearchParams}
            topicsList={topicsList}
          />
        )}
      </div>
      {topicNotFound && (
        <div className="error-msg">
          <h2>Oops. The topic you are looking for does not exist.</h2>
          <h3>Please select an existing topic from the dropdown above</h3>
        </div>
      )}
      <a href="#bottom" className="scroll-btn">
        <button>Go to End</button>
      </a>

      <ArticlesList
        articlesInfo={articlesInfo}
        // isLoading={isLoading}
        isError={isError}
        setTopic={setTopic}
        setSearchParams={setSearchParams}
        setQueryParams={setQueryParams}
      />
      <Pagination
        setQueryParams={setQueryParams}
        queryParams={queryParams}
        totalCount={totalCount}
        href="#articles"
      />
      <a href="#" className="scroll-btn bottom-of-pg">
        <button id="bottom">Top</button>
      </a>
    </>
  );
}
export default ArticlesPage;
