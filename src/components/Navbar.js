import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Navbar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar className="bar" variant="dark">
        <div className="form">
          <div className="nav">
            <div className="nav_link">
              <Nav.Link className="link" href="#Film">
                Film
              </Nav.Link>
              <Nav.Link className="link" href="#Series">
                Series
              </Nav.Link>
              <Nav.Link className="link" href="#tvshow">
                TV-Show
              </Nav.Link>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
