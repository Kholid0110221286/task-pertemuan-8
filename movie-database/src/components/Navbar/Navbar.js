// Import Link dari React Router
import { Link } from "react-router-dom";
import StyledNavbar, { Container } from "./Navbar.styled";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <Container>
      <StyledNavbar>
        <div>
          <h1>Movie App</h1>
        </div>
        <div>
          {/*
           * Membuat Link/Navigasi.
           * Menggunakan Link Component dari React Router
           */}
          <ul className={styled.navbar__list}>
            <li className={styled.navbar__item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styled.navbar__item}>
              <Link to="/movie/create">Add Movie</Link>
            </li>
            <li className={styled.navbar__item}>
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li className={styled.navbar__item}>
              <Link to="/movie/now">Now Playing</Link>
            </li>
            <li className={styled.navbar__item}>
              <Link to="/movie/top">Top Rated</Link>
            </li>
          </ul>
        </div>
      </StyledNavbar>
    </Container>
  );
}

export default Navbar;
