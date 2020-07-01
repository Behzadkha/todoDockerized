import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../Login/Login.js';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Signup from '../Signup/Signup.js';

import TodoList from '../components/todos-list.component';
import EditTodo from '../components/edit-todo.component';
import CreateTodo from '../components/create-todo.component';
export default class Navbarr extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/">To-Do List</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="/create">Create+</Nav.Link>
                            </Nav>
                            <Nav>
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                            <Nav.Link eventKey={2} href="/login">
                                Login
                            </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <Switch>
                    <Route path="/" exact component={TodoList} />
                    <Route path="/edit/:id" component={EditTodo} />
                    <Route path="/create" component={CreateTodo} />
                    <Route path="/login"> 
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
