import React from "react";
import data from "./data.json";
import { useState } from "react";

import "./App.scss";

export default function App() {
  const [posts, setPosts] = useState(data);
  console.log(data);

  return (
    <div className="container">
      <div className="blog">
        <div>
          <h1>Blog</h1>
        </div>
        <div>
          {posts.map((post) => {
            return (
              <div>
                <h2>{post.title}</h2>
                <ul>
                    <li>{post.date}</li>
                    <li className="name">{post.name}</li>
                </ul>
                <p>{post.body}</p>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
