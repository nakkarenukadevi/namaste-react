// const header = React.createElement("h1", {}, "welcom react");
let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child" }, "this is child1 element"),
  React.createElement("h2", { id: "child2" }, "this is child2 element"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
