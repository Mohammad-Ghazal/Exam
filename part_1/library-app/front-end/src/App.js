import { Router } from "express";
import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <h1>HELLO WORLD</h1>

          <Route url="/library/create_book">
            <div>
              <input>title</input>
                <input>author</input>
                <input>pages</input>
                <input>publisher</input>
                <input>published_at</input>
              <button>submit</button>
            </div>
          </Route>
        </div>
      </Router>
    );
  }
}
