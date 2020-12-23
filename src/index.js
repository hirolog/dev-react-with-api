import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import Post from "./Post";
import { posts } from "./posts";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="main">
      <Post posts={posts} />
    </div>
  </React.StrictMode>,
  rootElement
);
