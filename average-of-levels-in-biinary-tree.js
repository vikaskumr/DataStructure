/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/*

bfs approach 

*/
var averageOfLevels = function(root) {
    
    let queue = [root];
    let average = [];
    
    while(queue.length) {
        const next = [];
        let sum = 0;
        
        for(let node of queue) {
           
            sum += node.val;
            
            if(node.left) next.push(node.left);
            if(node.right) next.push(node.right);     
        } 
        
     
        average.push(sum/queue.length);
        
        queue = next;
        
    }
    
    return average;
    
    
};
