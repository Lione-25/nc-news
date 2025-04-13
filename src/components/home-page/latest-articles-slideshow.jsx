import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchArticles } from "../../api";

function LatestArticlesSlideshow({ setIsLoading }) {
  const [latestArticles, setLatestArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentArticle, setCurrentArticle] = useState({});
  const [isPaused, setIsPaused] = useState(false);
  const slideshowRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    fetchArticles({ sort_by: "created_at", order: "desc", limit: 5 }).then(
      ([articles]) => {
        setLatestArticles(articles);
        setCurrentArticle(articles[currentIndex]);
        setIsLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    if (latestArticles.length) {
      setCurrentArticle(latestArticles[currentIndex]);
    }
  }, [currentIndex]);

  // Auto-advance
  useEffect(() => {
    if (isPaused || latestArticles.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % latestArticles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, latestArticles.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? latestArticles.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % latestArticles.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) handlePrev(); // swipe right
    else if (deltaX < -50) handleNext(); // swipe left
    touchStartX.current = null;
  };

  return (
    <div
      className="latest-articles-slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={slideshowRef}
    >
      <h2>Latest articles</h2>
      <Link
        to={`/articles/${currentArticle.article_id}`}
        className="slide"
        title={
          currentArticle.title +
          ", author: " +
          currentArticle.author +
          ", topic: " +
          currentArticle.topic
        }
      >
        <img
          src={currentArticle.article_img_url}
          alt={currentArticle.title}
          className="slide-image"
        />
        <h3 className="slide-title">{currentArticle.title}</h3>
      </Link>

      <div className="slide-controls">
        <button onClick={handlePrev}>◀</button>
        <button onClick={handleNext}>▶</button>
      </div>

      <div className="slide-dots">
        {latestArticles.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          >
            •
          </span>
        ))}
      </div>
    </div>
  );
}

export default LatestArticlesSlideshow;
