import { useContext, useState } from "react";
import { UserAccount } from "../../contexts/user-account";
import ArticlesByTopic from "./articles-by-topic";
import LatestArticlesSlideshow from "./latest-articles-slideshow";
import LoadingOverlay from "../loading-overlay";

function HomePage() {
  const [slideshowIsLoading, setSlideshowIsLoading] = useState(true);
  const [topicsAreLoading, setTopicsAreLoading] = useState(true);
  return (
    <>
      {(slideshowIsLoading || topicsAreLoading) && <LoadingOverlay />}
      <LatestArticlesSlideshow setIsLoading={setSlideshowIsLoading} />
      <ArticlesByTopic setIsLoading={setTopicsAreLoading} />
    </>
  );
}
export default HomePage;
