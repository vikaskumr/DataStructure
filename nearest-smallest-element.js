(function main() {
  
        var res = [-1], stack = [];
    
        let A = [1,2,3,4,5,5,4,3,2,1];
    
        for(var i=1;i<A.length;i++){
            if (A[i] > A[i-1]) {
                res.push(A[i-1]);
                stack.push(A[i-1]);
                // console.log('res', res);
               
            } else {
             
                while(stack.length && stack[stack.length - 1] >= A[i]) {
                    stack.pop();
                }
                console.log('stack', stack);
                console.log('a[i]', A[i]);
                
                if (stack.length) 
                    res.push(stack[stack.length -1]);
                else 
                    res.push(-1);
            }
        }
    
        console.log(res);
        
        return res;

    
}());

//[4, 5, 2, 10, 8]
// [ -1, 4, -1, 2, 2 ]

//1, 2,3,4
 //[-1, 1, 2,3,]   

//8,6,

//  let A = [1,2,3,4,5,5,4,3,2,1];
//output = [
  -1, 1, 2, 3,  4,
   4, 3, 2, 1, -1
]
