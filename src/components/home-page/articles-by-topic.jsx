import { useEffect, useState } from "react";
import { fetchTopics } from "../../api";
import { Link } from "react-router-dom";

function ArticlesByTopic({ setIsLoading }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then(({ topics }) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="articles-by-topic-section">
      <div className="topics-header">
        <h2>Browse by Topic</h2>
        <Link to="/articles" className="view-all-link">
          View All Articles →
        </Link>
      </div>

      <div className="topics-grid">
        {topics.map(({ slug, description }) => (
          <Link
            to={`/articles?topic=${slug}`}
            key={slug}
            className="topic-card"
          >
            <h3>{slug}</h3>
            <p>{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ArticlesByTopic;
