// export function add(a,b){
//     return a+b;
// }
// export const PI = 3.14159;
export function add(a: number, b: number): number {
    return a + b;
  }
  
  export const PI: number = 3.14159;

// // Function: Reverse an array using recursion
// export function reverse<T>([x, ...y]: T[]): T[] {
//   return y.length > 0 ? [...reverse(y), x] : [x];
// }
// console.log(reverse([1, 2, 3, 4, 5, 6]));

// // Destructuring example
// const [, , ...y]: number[] = [1, 2, 3, 4, 5];
// console.log(y);

// // Generator function: yields squares
// export function* squares(n: number): Generator<number> {
//   for (let i = 1; i < n; i++) {
//     yield Math.pow(i, 2);
//   }
// }
// console.log([...squares(6)]);
// console.log("Int: ", [...squares(5)]);
