console.log("***************************************************");
console.log("Loop scoping and fresh iterations");

let vals: (() => number)[] = [];

try {
  for (var x = 0; x < 4; x++) {
    vals.push(() => x);
  }
  console.log("Using vars: " + vals.map(fn => fn()));

  vals = [];
  for (let x = 0; x < 4; x++) {
    vals.push(() => x);
  }
  console.log("Using lets: " + vals.map(fn => fn()));
} catch (err) {
  console.error("Error in loop scoping: ", err);
}

console.log("***************************************************");
console.log("Object Consts");

const obj: { par: number; par2?: number } = { par: 3 };
console.log(obj);

try {

  const objTest = obj;
  throw new Error("Cannot reassign a const object");
} catch (err) {
  console.log("Error when trying setting obj to value");
}

obj.par = 12;
console.log("Even though obj is constant, we can change value", obj);

Object.freeze(obj);
try {
  obj.par = 15;
} catch (err) {
  console.error("Error modifying frozen object", err);
}
console.log("Frozen object: ", obj);

Object.seal(obj);
try {
  obj.par2 = 15;
} catch (err) {
  console.error("Error modifying sealed object", err);
}
console.log("Sealed object: ", obj);

function demoFreezeSeal(o: any) {
  "use strict";
  try {
    Object.freeze(o);
    o.par = 15;
    Object.seal(o);
    o.par2 = 15;
  } catch (err) {
    throw new Error("Strict mode error modifying sealed object");
  }
}

try {
  demoFreezeSeal(obj);
} catch (err) {
  console.error(err);
}

console.log("***************************************************");
console.log("String Templates");
const myname = "Seshagiri Sriram";
console.log(`Using String Templates: ${myname}`);

console.log("***************************************************");
console.log("Enhanced Object Literals and fns inside Object Literals");

const quadEq: { x: number; y: number }[] = [];
for (let x = 1; x <= 20; x++) {
  quadEq.push({ x, y: 2 * x * x - 5 * x + 3 });
}
const foo = {
  f(x: number) {
    return x + 1;
  },
};
console.log("foo.f(4) -> ", foo.f(4));
console.log(quadEq);

console.log("***************************************************");
console.log("My Fav Subject --> overriding and overloading");

class A {
  toString(): string {
    return "In Class A";
  }
}

class B extends A {
  toString(): string {
    return "In class B with call to super: " + super.toString();
  }
}

const BObj = new B();
console.log(BObj.toString());
console.log("BOBJ --> ", Object.getPrototypeOf(BObj));
console.log("***************************************************");

console.log("Symbols");

const js_obj = {
  name: "Sriram",
  age: 60,
  salary: 100,
  [Symbol.toPrimitive](hint: string) {
    if (hint === "number") return this.age;
    return JSON.stringify(this);
  },
};

console.log("STRING: " + `${js_obj}`);
console.log("DEFAULT:", js_obj + "");
console.log("NUMBER:", +js_obj);

console.log("***************************************************");
console.log("Classes and Inheritance");

class Jedi {
  forceIsDark = false;
  jediname: string;

  constructor(str: string) {
    this.jediname = str;
  }

  get name() {
    return this.jediname;
  }

  set name(str: string) {
    this.jediname = str;
  }

  toString() {
    return this.forceIsDark
      ? `${this.jediname}: Join the dark side`
      : `${this.jediname}: Fear is the path to the dark side`;
  }
}

class Sith extends Jedi {
  constructor(str: string) {
    super(str);
    this.forceIsDark = true;
  }
}

const yoda = new Jedi("Yoda");
const darth = new Sith("Darth Vader");

console.log(yoda.toString());
console.log(darth.toString());
console.log(darth.name, "is a Sith?", darth instanceof Sith);
console.log(yoda.name, "is a Jedi?", yoda instanceof Jedi);

console.log("***************************************************");
console.log("Arrays & Iterators");

const Arrays = ["a", "b", "c"];
console.log("for...of:");
for (const i of Arrays) console.log(i);

console.log("forEach:");
Arrays.forEach(x => console.log(x));

const ratings = [5, 4, 5];
let sums = 0;
const syncSum = (a: number, b: number) => a + b;

ratings.forEach(r => (sums = syncSum(sums, r)));
console.log("Sum:", sums);

console.log([...Array.from("abcd")]);
console.log("***************************************************");

console.log("Generators");
function* genFour() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const four = genFour();
let result = four.next();
while (!result.done) {
  console.log(result.value);
  result = four.next();
}
console.log("Final return value:", result.value);

console.log("***************************************************");
console.log("Arrow Functions");

const funReverse = ([x, ...y]: any[]): any[] =>
  y.length > 0 ? [...funReverse(y), x] : [x];
console.log(funReverse([1, 2, 3, 4, 5, 6]));

function* squares(n: number) {
  for (let i = 1; i < n; i++) yield Math.pow(i, 2);
}

console.log([...squares(6)]);
console.log("Reverse of a number:", funReverse(("57" as any).split("")));

console.log("***************************************************");
console.log("End of demo");
