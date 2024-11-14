// Input: A[] = {1, 5, 10, 20, 30} , B[] = {5, 13, 15, 20}, C[] = {5, 20} 
// Output: 5 20
// Explanation: 5 and 20 are common in all the arrays.

function findCommonElements(A, B, C) {
    return A.filter(value => B.includes(value) && C.includes(value));
  }
  
  // Example usage
  const A = [1, 5, 10, 20, 30];
  const B = [5, 13, 15, 20];
  const C = [5, 20];
  const output = findCommonElements(A, B, C);
  console.log(output); // Output should be [5, 20]
  