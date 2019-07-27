const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // "n1 n2 n3 n4"
console.log(n1, n3, n5, n6)