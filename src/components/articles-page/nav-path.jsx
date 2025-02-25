function NavPath({ topic }) {
  return (
    <div className="nav-path-container">
      <p id="nav-path">
        <a href="/"> home </a>/<a href="/articles"> articles </a>/
        {topic && <a href={`/articles?topic=${topic}`}> {topic}</a>} {"<"} You
        are here
      </p>
    </div>
  );
}
export default NavPath;
