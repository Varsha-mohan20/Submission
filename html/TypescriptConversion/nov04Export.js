export default class sampleJavascript {

  // ==========================
  // Iterator Examples
  // ==========================
  demoIterator() {
    try {
      console.log("=== Iterator Example ===");

      console.log([... "abcd"]);

      let it = [1, 2, 3][Symbol.iterator]();
      console.log(it.next());
      console.log(it.next());
      console.log(it.next());
      console.log(it.next());

      console.log([...['a', 'b', 'c'].keys()]);
      console.log([...['a', 'b', 'c'].values()]);
      console.log(Array.from(['a', 'b', 'c'].entries()));

      let arrayLike = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', length: 4 };
      console.log("Array.from(arrayLike):", Array.from(arrayLike));
    } catch (err) {
      console.error("Error in demoIterator:", err.message);
    }
  }

  // ==========================
  // Map Example
  // ==========================
  demoMap() {
    try {
      console.log("=== Map Example ===");

      let m = new Map([... 'abcd'].map(x => [x, x + x]));
      console.log("Map entries:", JSON.stringify([...m]));
      console.log("Keys:", JSON.stringify([...m.keys()]));
      console.log("Values:", JSON.stringify([...m.values()]));
      console.log("Entries:", JSON.stringify([...m.entries()]));
    } catch (err) {
      console.error("Error in demoMap:", err.message);
    }
  }

  // ==========================
  // Generators
  // ==========================
  *genFour() {
    try {
      yield 1;
      yield 2;
      yield 3;
      return 4;
    } catch (err) {
      console.error("Error in genFour:", err.message);
    }
  }

  *flatten(arr) {
    try {
      for (let x of arr) {
        if (x instanceof Array) {
          yield* this.flatten(x);
        } else {
          yield x;
        }
      }
    } catch (err) {
      console.error("Error in flatten:", err.message);
    }
  }

  // ==========================
  // Destructuring Example
  // ==========================
  demoDestructure() {
    try {
      console.log("=== Destructuring Example ===");

      let a = { x: 1, y: 2 };
      let { x, y: z } = a;
      console.log("x:", x);
      console.log("z:", z);

      let b = { x: 1, y: 2 };
      let { x: first, y: second } = b;
      console.log("first:", first);
      console.log("second:", second);
    } catch (err) {
      console.error("Error in demoDestructure:", err.message);
    }
  }

  // ==========================
  // Reverse Function
  // ==========================
  reverse([x, ...y]) {
    try {
      return y.length > 0 ? [...this.reverse(y), x] : [x];
    } catch (err) {
      console.error("Error in reverse:", err.message);
      return [];
    }
  }

  // ==========================
  // Closures
  // ==========================
  demoLetClosure() {
    try {
      console.log("=== Closure using let ===");
      let vals = [];
      for (let x = 0; x < 4; x++) {
        vals.push(() => x);
      }
      console.log(vals.map(fn => fn()));
    } catch (err) {
      console.error("Error in demoLetClosure:", err.message);
    }
  }

  demoVarClosure() {
    try {
      console.log("=== Closure using var ===");
      var xvals = [];
      for (var x = 0; x < 4; x++) {
        xvals.push(() => x);
      }
      console.log(xvals.map(fn => fn()));
    } catch (err) {
      console.error("Error in demoVarClosure:", err.message);
    }
  }

  // ==========================
  // Class Example
  // ==========================
  demoClasses() {
    try {
      console.log("=== Class Example (Jedi & Sith) ===");

      class Jedi {
        constructor() {
          this.forceIsDark = false;
        }
        toString() {
          return (this.forceIsDark ? 'Join' : 'Fear is the path to') + ' the dark side';
        }
      }

      class Sith extends Jedi {
        constructor() {
          super();
          this.forceIsDark = true;
        }
      }

      let yoda = new Jedi("Yoda");
      let darth = new Sith("Darth Vader");

      console.log(yoda.toString());
      console.log(darth.toString());
      console.log("Jedi instanceof Sith:", Jedi instanceof Sith);
    } catch (err) {
      console.error("Error in demoClasses:", err.message);
    }
  }

  // ==========================
  // Async vs Sync Example
  // ==========================
  async demoAsync() {
    try {
      console.log("=== Async Version ===");

      const ratings = [5, 4, 5];
      let sum = 0;
      const asyncSumFunction = async (a, b) => a + b;

      ratings.forEach(async (rating) => {
        sum = await asyncSumFunction(sum, rating);
      });

      console.log("Async version output:", sum);
    } catch (err) {
      console.error("Error in demoAsync:", err.message);
    }
  }

  demoWithoutAsync() {
    try {
      console.log("=== Sync Version ===");

      const ratings = [5, 4, 5];
      let sum = 0;
      const syncSumFunction = (a, b) => a + b;

      ratings.forEach((rating) => {
        sum = syncSumFunction(sum, rating);
      });

      console.log("Sync version output:", sum);
    } catch (err) {
      console.error("Error in demoWithoutAsync:", err.message);
    }
  }


  // ==========================
  // Custom Generator Iterator
  // ==========================
  *gen(n) {
    try {
      for (let i = 0; i < n; i++) {
        yield i * 2;
      }
    } catch (err) {
      console.error("Error in gen:", err.message);
    }
  }

  // ==========================
  // Squares Generator Example
  // ==========================
  *squares(n) {
    try {
      for (let i = 1; i < n; i++) {
        yield Math.pow(i, 2);
      }
    } catch (err) {
      console.error("Error in squares:", err.message);
    }
  }

  demoSquares() {
    try {
      console.log("=== Squares Generator ===");
      console.log("Squares:", [...this.squares(10)]);
      console.log("Reversed Squares:", this.reverse([...this.squares(10)]));
    } catch (err) {
      console.error("Error in demoSquares:", err.message);
    }
  }
}
