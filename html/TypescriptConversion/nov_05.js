var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
console.log("***************************************************");
console.log("Loop scoping and fresh iterations");
var vals = [];
try {
    for (var x = 0; x < 4; x++) {
        vals.push(function () { return x; });
    }
    console.log("Using vars: " + vals.map(function (fn) { return fn(); }));
    vals = [];
    var _loop_1 = function (x_1) {
        vals.push(function () { return x_1; });
    };
    for (var x_1 = 0; x_1 < 4; x_1++) {
        _loop_1(x_1);
    }
    console.log("Using lets: " + vals.map(function (fn) { return fn(); }));
}
catch (err) {
    console.error("Error in loop scoping: ", err);
}
console.log("***************************************************");
console.log("Object Consts");
var obj = { par: 3 };
console.log(obj);
try {
    // @ts-expect-error: Trying to reassign a const
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var objTest = obj;
    throw new Error("Cannot reassign a const object");
}
catch (err) {
    console.log("Error when trying setting obj to value");
}
obj.par = 12;
console.log("Even though obj is constant, we can change value", obj);
Object.freeze(obj);
try {
    obj.par = 15;
}
catch (err) {
    console.error("Error modifying frozen object", err);
}
console.log("Frozen object: ", obj);
Object.seal(obj);
try {
    obj.par2 = 15;
}
catch (err) {
    console.error("Error modifying sealed object", err);
}
console.log("Sealed object: ", obj);
function demoFreezeSeal(o) {
    "use strict";
    try {
        Object.freeze(o);
        o.par = 15;
        Object.seal(o);
        o.par2 = 15;
    }
    catch (err) {
        throw new Error("Strict mode error modifying sealed object");
    }
}
try {
    demoFreezeSeal(obj);
}
catch (err) {
    console.error(err);
}
console.log("***************************************************");
console.log("String Templates");
var myname = "Seshagiri Sriram";
console.log("Using String Templates: ".concat(myname));
console.log("***************************************************");
console.log("Enhanced Object Literals and fns inside Object Literals");
var quadEq = [];
for (var x_2 = 1; x_2 <= 20; x_2++) {
    quadEq.push({ x: x_2, y: 2 * x_2 * x_2 - 5 * x_2 + 3 });
}
var foo = {
    f: function (x) {
        return x + 1;
    },
};
console.log("foo.f(4) -> ", foo.f(4));
console.log(quadEq);
console.log("***************************************************");
console.log("My Fav Subject --> overriding and overloading");
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.toString = function () {
        return "In Class A";
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.toString = function () {
        return "In class B with call to super: " + _super.prototype.toString.call(this);
    };
    return B;
}(A));
var BObj = new B();
console.log(BObj.toString());
console.log("BOBJ --> ", Object.getPrototypeOf(BObj));
console.log("***************************************************");
console.log("Symbols");
var js_obj = (_a = {
        name: "Sriram",
        age: 60,
        salary: 100
    },
    _a[Symbol.toPrimitive] = function (hint) {
        if (hint === "number")
            return this.age;
        return JSON.stringify(this);
    },
    _a);
console.log("STRING: " + "".concat(js_obj));
console.log("DEFAULT:", js_obj + "");
console.log("NUMBER:", +js_obj);
console.log("***************************************************");
console.log("Classes and Inheritance");
var Jedi = /** @class */ (function () {
    function Jedi(str) {
        this.forceIsDark = false;
        this.jediname = str;
    }
    Object.defineProperty(Jedi.prototype, "name", {
        get: function () {
            return this.jediname;
        },
        set: function (str) {
            this.jediname = str;
        },
        enumerable: false,
        configurable: true
    });
    Jedi.prototype.toString = function () {
        return this.forceIsDark
            ? "".concat(this.jediname, ": Join the dark side")
            : "".concat(this.jediname, ": Fear is the path to the dark side");
    };
    return Jedi;
}());
var Sith = /** @class */ (function (_super) {
    __extends(Sith, _super);
    function Sith(str) {
        var _this = _super.call(this, str) || this;
        _this.forceIsDark = true;
        return _this;
    }
    return Sith;
}(Jedi));
var yoda = new Jedi("Yoda");
var darth = new Sith("Darth Vader");
console.log(yoda.toString());
console.log(darth.toString());
console.log(darth.name, "is a Sith?", darth instanceof Sith);
console.log(yoda.name, "is a Jedi?", yoda instanceof Jedi);
console.log("***************************************************");
console.log("Arrays & Iterators");
var arr = ["a", "b", "c"];
console.log("for...of:");
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log(i);
}
console.log("forEach:");
arr.forEach(function (x) { return console.log(x); });
var ratings = [5, 4, 5];
var sum = 0;
var syncSum = function (a, b) { return a + b; };
ratings.forEach(function (r) { return (sum = syncSum(sum, r)); });
console.log("Sum:", sum);
console.log(__spreadArray([], Array.from("abcd"), true));
console.log("***************************************************");
console.log("Generators");
function genFour() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [4 /*yield*/, 3];
            case 3:
                _a.sent();
                return [2 /*return*/, 4];
        }
    });
}
var four = genFour();
var result = four.next();
while (!result.done) {
    console.log(result.value);
    result = four.next();
}
console.log("Final return value:", result.value);
console.log("***************************************************");
console.log("Arrow Functions");
var reverse = function (_a) {
    var x = _a[0], y = _a.slice(1);
    return y.length > 0 ? __spreadArray(__spreadArray([], reverse(y), true), [x], false) : [x];
};
console.log(reverse([1, 2, 3, 4, 5, 6]));
function squares(n) {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 1;
                _a.label = 1;
            case 1:
                if (!(i < n)) return [3 /*break*/, 4];
                return [4 /*yield*/, Math.pow(i, 2)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}
console.log(__spreadArray([], squares(6), true));
console.log("Reverse of a number:", reverse("57".split("")));
console.log("***************************************************");
console.log("End of demo");
