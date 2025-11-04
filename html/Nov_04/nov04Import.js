import sampleJavascript from './nov04Export.js';

const jsDemo = new sampleJavascript();

console.log("======== NOV 04 EXAMPLES ========");

jsDemo.demoIterator();
jsDemo.demoMap();
console.log("Generator genFour:", [...jsDemo.genFour()]);
console.log("Flatten Example:", [...jsDemo.flatten([1, 2, [3, 4]])]);
jsDemo.demoDestructure();
console.log("Reverse Example:", jsDemo.reverse([1, 2, 3, 4, 5, 6]));
jsDemo.demoLetClosure();
jsDemo.demoVarClosure();
jsDemo.demoClasses();
jsDemo.demoAsync();
jsDemo.demoWithoutAsync();
console.log("Custom Generator gen(5):", [...jsDemo.gen(5)]);
jsDemo.demoSquares();
