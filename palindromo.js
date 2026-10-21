function palindromo(x) {
  // entrada: Un entero positivo x.
  // salida: true si x es palíndromo, false si no.
  // n es el número de dígitos de x.
  const original = x;
  let inv; // declarada sin valor, como en el pizarrón
  const arr = [];

  while (x > 0) {
    const r = x % 10;
    x = Math.floor(x / 10);
    inv = (inv * 10) + r;
  }

  for (let i = 0; i <= n - 1; i++) {
    inv = inv + (arr[i] * 10 ** (n - (i + 1)));
  }

  return original === inv;
}
