import { Link } from "react-router";
import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <p>Page not found</p>
      <p id="big-404">404</p>
      <Link to={"/"}>Go back</Link>
    </NotFoundContainer>
  );
};

export default NotFound;

const NotFoundContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  p {
    font-size: 18px;
    z-index: 3;
  }

  a {
    padding: 4px;
    color: red;
    text-decoration: underline;
  }

  a:hover {
    font-weight: bold;
  }

  #big-404 {
    font-weight: bold;
    font-size: 300px;
    position: absolute;
    bottom: -30%;
    right: -8%;
    color: #000;
    opacity: 0.1;
    z-index: -1;
  }
`;
