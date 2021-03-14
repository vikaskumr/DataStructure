// This is an input class. Do not edit.

/*

Solution 1

We can take out inorder traversal of BST and store in array  and then we will get all the elements of BST in ascending order 
and then we can get inddex at (length of array - k) and that will be output but in this case time complexity will be O(n).

*/

/*
Solution 2(implemented)

We can do reverse inorder traversal i.e. instead left, root, right
we can do right, root , left and in this way we can travel largest 
elements first and we can find the largest element in (h+k) complexity 
where h is the height of the BST.

Why h because we might have to travel till the height of the tree to find 
the kth largest element

*/
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo {

    constructor(numberOfNodesVisited, latestVisitedNodeValue) {
        this.numberOfNodesVisited = numberOfNodesVisited;
        this.latestVisitedNodeValue = latestVisitedNodeValue;
    }

}

function findKthLargestValueInBst(tree, k) {
   
    const treeInfo = new TreeInfo(0, -1);
    reverseInOrderTraverse(tree, k, treeInfo);
    return treeInfo.latestVisitedNodeValue;

}

function reverseInOrderTraverse(node, k, treeInfo) {
    if (node === null || treeInfo.numberOfNodesVisited >= k) return;
    
    /*
     go in the right most subtree and then traverse back 
     to the root and then travel left and keep track of the last visited node 
     and the number if elements traversed.
    */
    reverseInOrderTraverse(node.right, k, treeInfo);
    if (treeInfo.numberOfNodesVisited < k) {
        treeInfo.numberOfNodesVisited++;
        treeInfo.latestVisitedNodeValue = node.value;
        reverseInOrderTraverse(node.left, k, treeInfo);
    }

}

