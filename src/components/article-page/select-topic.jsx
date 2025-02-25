import { useEffect, useState } from "react";
import { fetchTopics } from "../../api";

function SelectTopic({ topic, setTopic, setSearchParams }) {
  const [topicsList, setTopicsList] = useState([]);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopicsList(topics);
    });
  }, []);

  function handleSelect({ target: { value } }) {
    setTopic(value);
    setSearchParams({ topic: value });
  }
  return (
    <>
      <h3>
        <label htmlFor="topic-options"></label>
      </h3>
      <select id="topic-options" onChange={handleSelect} value={topic}>
        <option value="">all topics</option>
        {topicsList.map((topic) => {
          return (
            <option key={topic.slug} value={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
    </>
  );
}
export default SelectTopic;
