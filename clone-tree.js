const unistUtilMap = require("unist-util-map");

function cloneTree(tree) {
  return unistUtilMap(tree, function (node) {
    return node;
  });
}

module.exports = cloneTree;
