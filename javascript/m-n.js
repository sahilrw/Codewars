// Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.
// The input m will always be smaller than or equal to n (e.g., m <= n)
// Example
// m = 2
// n = 4

// result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)]

// my solution
function generatePairs(m, n) {
  const results = []
  
  for (let i = m; i <= n; i++){
    for (let j = i; j <= n; j++){
      results.push([i, j])
    }
  }
  
  results.sort((a, b) => {
    return a[0] - b[0] || a[1] - b [1]
  })
  
  return results;
}