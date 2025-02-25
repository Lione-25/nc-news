import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1>Oops. The page you are looking for does not exist</h1>
      <h2>
        <Link to="/">Return home</Link>
      </h2>
    </>
  );
}
export default PageNotFound;
