const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addData(this.rootTree, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }

      return node;
    }

  }

  has(data) {
    return isHas(this.rootTree, data);

    function isHas(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return isHas(node.left, data);
      } else {
        return isHas(node.right, data);
      }
    }
  }

  find(data) {
    return getNode(this.rootTree, data);

    function getNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return getNode(node.left, data);
      } else {
        return getNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);

        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);

        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;

          return node;
        }

        if (!node.right) {
          node = node.left;

          return node;
        }

        let maxLeft = node.left;

        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }

        node.data = maxLeft.data;
        node.left = removeNode(node.left, maxLeft.data)

        return node;
      }

    }
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};

const bst = new BinarySearchTree();

bst.add(19);
bst.add(26);
bst.add(15);
bst.add(33);
bst.add(22);
bst.add(13);
bst.add(14);


console.log(bst.find(26));
bst.remove(26);
console.log(bst.root())