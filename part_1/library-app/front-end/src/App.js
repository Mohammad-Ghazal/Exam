import { Router } from "express";
import React, { Component } from "react";
import "./App.css";
const [title, setTitle] = useState("");
const [auther, setAuthe] = useState("");
const [pages, setPages] = useState(0);
const [publisher, setpublisher] = useState("");
const [published_at, setpublished_at] = useState("");
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
              <div>
                <h1>create_book</h1>
              </div>
              <input onChange="setTitle">title</input>
              <input onChange="setAuther">author</input>
              <input onChange="setPages">pages</input>
              <input onChange="setPublisher">publisher</input>
              <input onChange="setPublished_at">published_at</input>
              <button onClick="submit">submit</button>
            </div>
          </Route>
        </div>
      </Router>
    );
  }
}
