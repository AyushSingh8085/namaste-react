import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello, I am h1 tag"),
    React.createElement("h2", { id: "heading" }, "Hello, I am h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading", class: "heading" },
  "Hello world!"
);

console.log(heading); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

root.render(parent);
