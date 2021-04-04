import React, { ReactElement } from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";

import { PersonEditor } from "./person-editor";
import { KimrofPersonEditor } from "./kimrof-person-editor";
import { Counter } from "./rules-of-hooks";

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
            <Nav.Link as={NavLink} to="/counter">
              Rules of Hooks
            </Nav.Link>
            <Nav.Link as={NavLink} to="/kimrof-person-editor">
              Kimrof
            </Nav.Link>
            <Nav.Link href="https://formik.org/docs/api/formik" target="formik">
              Formik
            </Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/person-editor">
            <PersonEditor />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/kimrof-person-editor">
            <KimrofPersonEditor />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
