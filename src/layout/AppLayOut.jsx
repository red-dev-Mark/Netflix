import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function AppLayOut() {
  const [keyword, setKeyWord] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    //url을 바꿔주기!
    navigate(`/movies?q=${keyword}`);
    setKeyWord("");
  };

  return (
    <div>
      <Navbar expand="lg" className="px-3 bg-black" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              className="d-inline-block align-top"
              src="https://t3.ftcdn.net/jpg/06/99/77/96/360_F_699779672_Kqt0RShrtb38wnz2PFGs2IknYyOsyhOT.jpg"
              alt="Navbar Logo"
              style={{
                width: "120px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                as={Link}
                to="/"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/movies"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                Movies
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={(e) => searchByKeyword(e)}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyWord(event.target.value)}
              />
              <Button variant="danger" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
