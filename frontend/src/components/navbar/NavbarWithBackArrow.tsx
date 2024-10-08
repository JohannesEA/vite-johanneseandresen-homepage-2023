import { FaArrowLeft } from "react-icons/fa";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

import "./navbarWithBackArrow.css";

const SimpleNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar className="navbar--arrow" expand="lg">
      <Container fluid>
        <Navbar.Brand className="navbar__brand--arrow">
          <FaArrowLeft
            size={30}
            className="navbar__icon--arrow"
            onClick={() => navigate(-1)}
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default SimpleNavbar;
