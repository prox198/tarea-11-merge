function merge(A, B, n, m) {
  // input: A y B arreglos ordenados
  // output: arreglo ordenado
  let i = 0; // índice de A
  let j = 0; // índice de B
  let k = 0; // índice de C

  const C = new Array(n + m); // C ← [0..n+m-1]

  while (i < n && j < m && k <= n + m - 1) {
    if (A[i] < B[j]) {
      C[k] = A[i];
      i++;
    } else {
      C[k] = B[j];
      j++;
    }
    k++;
  }

  return C;
}
