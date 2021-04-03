import React, { ReactElement } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "./App.css";

import { PersonEditor } from "./person-editor";

export function App(): ReactElement {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            React Hooks for pros
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/person-editor">
              Person Editor
            </Nav.Link>
            <Nav.Link as={NavLink} to="/kimrof">
              Kimrof
            </Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/person-editor">
            <PersonEditor />
          </Route>
          <Route path="/kimrof">kimrof</Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
