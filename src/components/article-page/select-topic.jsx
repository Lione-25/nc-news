function SelectTopic({ topic, setTopic, setSearchParams, topicsList }) {
  function handleSelect({ target: { value } }) {
    setTopic(value);
    setSearchParams({ topic: value });
  }
  return (
    <>
      <label htmlFor="topic-options" />
      <select
        id="topic-options"
        onChange={handleSelect}
        value={topic || "all topics"}
      >
        <option value="">all topics</option>
        {topicsList.map((topic) => {
          return (
            <option key={topic} value={topic}>
              {topic}
            </option>
          );
        })}
      </select>
    </>
  );
}
export default SelectTopic;
