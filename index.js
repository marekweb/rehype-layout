const hastUtilInsert = require("hast-util-insert");
const cloneTree = require("./clone-tree");

function rehypeLayout(options) {
  const layoutTree = options.layout;
  if (typeof layoutTree !== "object") {
    throw new Error("layout should be a HAST tree");
  }
  const containerSelector = options.container || "#body";
  const action = options.action;

  return function rehypeLayoutTransformer(tree) {
    const clonedLayoutTree = cloneTree(layoutTree);
    hastUtilInsert(clonedLayoutTree, containerSelector, tree, action);
    return clonedLayoutTree;
  };
}

module.exports = rehypeLayout;
