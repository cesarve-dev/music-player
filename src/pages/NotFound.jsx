import { Link } from "react-router";

const NotFound = () => {
  return (
    <>
      <p>Page not found</p>
      <Link to={"/"}>Go back</Link>
    </>
  );
};

export default NotFound;
