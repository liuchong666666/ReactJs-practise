/*
 * @Author: lc
 * @Date: 2019-08-28 09:44:42
 * @Description:
 */

/*
//类型注解
// TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以。
// function sayHello(p: string) {
//   return 'hello,' + p;
// }
// let user = [1, 2, 3];
// console.log(sayHello(user));
//Argument of type 'number[]' is not assignable to parameter of type 'string'.

//接口
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter(person: Person) {
//   return 'hi, ' + person.firstName + ' ' + person.lastName;
// }
// let user = {
//   firstName: 'jane',
//   lastName: 'user',
// };
// console.log(greeter(user));

//类
// class Student {
//   fullName: string;
//   constructor(public firstName, public middleInitial, public lastName) {
//     this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
//   }
// }

// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter(person: Person) {
//   return 'hi, ' + person.firstName + ' ' + person.lastName;
// }
// let user = new Student('ja', 'm.', 'user');
// console.log(user);
// console.log(greeter(user));

//JavaScript的类型分为两种：原始数据类型和对象类型
//原始数据类型：布尔值，数值，字符串，null，undefined以及ES6中的新类型symbol

//布尔值
let isDone: boolean = false;

// 注意，使用构造函数Boolean创造的对象不是布尔值：
// let createByNewBoolean: boolean = new Boolean(1);
// error TS2322: Type 'Boolean' is not assignable to type 'boolean'.
// 后面约定，注释中标出了编译报错的代码片段，表示编译未通过

//事实上 new Boolean()返回的是一个 Boolean对象：
// let createByNewBoolean: Boolean = new Boolean(1);

//直接调用Boolean也可以返回一个boolean类型：
// let createByNewBoolean: boolean = Boolean(1);

//在TypeScript中，boolean是JavaScript中的基本类型，而Boolean是JavaScript中的构造函数，
// 其他基本类型（除了null和undefined）一样

//数值
// 使用number定义数值类型：
let a: number = 6;
let b: number = 0xf00d; //Es6中二进制表示法
let c: number = 0b1010; //Es6中八进制表示法
let d: number = 0o744; //Es6中八进制表示法
let f: number = NaN;
let g: number = Infinity;

//字符串
let myName: string = 'tom';
let myAge: number = 25;

//模板字符串
let sentence: string = `
hello,my name is ${myName}.
i'll be ${myAge + 1} years old next month.
`.trim(); //replace(/\s+/g, ' ')
console.log(sentence);

//空值
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，
//可以用 void 表示没有任何返回值的函数：
function alertName(): void {
  console.log('my name is tom');
}
// 声明一个 void 类型的变量没有什么用，
// 因为你只能将它赋值为 undefined 和 null：
let unsable: void = undefined;
// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
let u: undefined = undefined;
let n: null = null;

//undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

//这样不会报错
// let num: number = undefined;//虽然有红波浪，可是能编译，没错误
//这样也不会报错

let uu: undefined;
let num: number = uu;
console.log(num);

let nn: number = 4;
let mm: number = nn;
console.log(mm);
*/

/*
//任意值
//任意值（Any）用来表示允许赋值为任意类型

// 什么是任意值类型
// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;//error//Type '7' is not assignable to type 'string'.

//但如果是any类型，则允许被赋值为任意类型
let a: any = 'seven';
a = 7;

//任意值的属性和方法
let anyThing: any = 'hello';
console.log(typeof anyThing); //string
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
//也允许调用任何方法：
anyThing.setName('ja');
anyThing.setName('ja').sayHello();
anyThing.myName.setFirstName('cat');

//未声明类型的变量
//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
// let something;
// something = 'a';
// something = 7;
// something.setName('tom');
//等价于
let something: any;
something = 'seven';
something = 7;

something.setName('Tom');
*/

/*
// 类型推论
//如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
//什么是类型推论
// 以下代码虽然没有指定类型，但是会在编译的时候报错：
let a = 'b';
a = 7;
// 事实上，它等价于：
let mFavoriteNumber: string = 'seven';
mFavoriteNumber = 7;
//ypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
*/

/*
//联合类型
//联合类型（Union Types）表示取值可以为多种类型中的一种。
let aa: string | number;
aa = 'bb';
aa = 7;
//aa = true;//error TS2322: Type 'boolean' is not assignable to type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.

// 访问联合类型的属性或方法
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，
// 我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(something: string | number): number {
  return something.length;
  ////  error TS2339: Property 'length' does not exist on type 'string | number'.
  //   Property 'length' does not exist on type 'number'.
}

//上例中，length 不是 string 和 number 的共有属性，所以会报错。

//访问 string 和 number 的共有属性是没问题的：
function getString(something: string | number): string {
  return something.toString();
}
//联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let aaa: string | number;
aaa = 7;
console.log(aaa.toString());
aaa = 'bbb';
console.log(aaa.length);

*/

/*
//什么是接口
//在面向对象语言中，接口（Interfaces）是一个很重要的概念，
//它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

interface Person {
  name: string;
  age: number;
}
let tom: Person = {
  name: 'Tom',
  age: 25,
};

// 定义的变量比接口少了一些属性是不允许的：
let tom2: Person = {
  //error TS2322: Type '{ name: string; }' is not assignable to type 'Person'.
  //   Property 'age' is missing in type '{ name: string; }'.
  name: 'Tom',
};
//多一些属性也是不允许的：
let tom3: Person = {
  //error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
  //   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
  name: 'Tom',
  age: 25,
  gender: 'male',
};


//可见，赋值的时候，变量的形状必须和接口的形状保持一致。

// 可选属性
//有时我们希望不要完全匹配一个形状，那么可以用可选属性：
//可选属性的含义是该属性可以不存在。
interface Person {
  name: string;
  age?: number;
}
let tom: Person = {
  name: 'Tom',
};
let tom2: Person = {
  name: 'Tom2',
  age: 25,
};
//这时仍然不允许添加未定义的属性：
let tom3: Person = {
  //// examples/playground/index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
  //   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
  name: 'Tom',
  age: 25,
  gender: 'male',
};
*/

/*
//任意属性
// 有时候我们希望一个接口允许有任意的属性，可以使用如下方式：
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}
let tom: Person = {
  name: 'Tom',
  age: 20,
  gender: 'male',
};
//使用 [propName: string] 定义了任意属性取 string 类型的值。
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
interface Person {
  name: string;
  age?: number;
  [propName: string]: string;
}

let tom2: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};
//上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。
// 另外，在报错信息中可以看出，此时 { name: 'Tom', age: 25, gender: 'male' } 的类型被推断成了 { [x: string]: string | number; name: string; age: number; gender: string; } ，
// 这是联合类型和接口的结合。


// 只读属性
//有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [proName: string]: any;
}
let tom: Person = {
  id: 8989,
  name: 'tom',
  gender: 'male',
};
tom.id = 898; //不能修改，只读//error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
//注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：

let tom2: Person = {
  // error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
  //   Property 'id' is missing in type '{ name: string; gender: string; }'.
  // error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
  name: 'tom',
  gender: 'male',
};
tom2.id = 456;
// 上例中，报错信息有两处，第一处是在对 tom 进行赋值的时候，没有给 id 赋值。
// 第二处是在给 tom.id 赋值的时候，由于它是只读属性，所以报错了。


//数组的类型
// 「类型 + 方括号」表示法
// 最简单的方法是使用「类型 + 方括号」来表示数组：
let fibonacci: number[] = [1, 1, 2, 3, 5];
// 数组的项中不允许出现其他的类型：
let fibonacc: number[] = [1, '1', 2, 3, 5];
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
let fibonac: number[] = [1, 1, 2, 3, 5];
fibonacci.push('8');
//上例中，push 方法只允许传入 number 类型的参数，但是却传了一个 string 类型的参数，所以报错了。


//数组泛型
// 也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组：
let fibona: Array<number> = [1, 1, 2, 3, 5];





// 用接口表示数组
// 接口也可以用来描述数组：
interface NumberArray {
  [index: number]: any;
}
let aaa: NumberArray = [1, 2, 3, 45, 6, 789];

// NumberArray 表示：只要index的类型是 number，那么值的类型必须是 number

//any 在数组中的应用
// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

//类数组
// 类数组（Array-like Object）不是数组类型，比如 arguments：
function sum() {
  let args: number[] = arguments;
}
//事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sum2() {
  let args: IArguments = arguments;
}


*/
/*
//函数声明
// 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：
function sum(x: number, y: number): number {
  return x + y;
}
// 注意，输入多余的（或者少于要求的）参数，是不被允许的：
sum(1, 2, 3); //error TS2346: Supplied parameters do not match any signature of call target
sum(1); //error TS2346: Supplied parameters do not match any signature of call target


// 函数表达式

//如果要我们现在写一个对函数表达式（Function Expression）的定义，可能会写成这样：
let mySum = function(x: number, y: number): number {
  return x + y;
};
// 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，
//而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样：
let mySum2: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
//注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// 在 ES6 中，=> 叫做箭头函数，应用十分广泛，可以参考 ES6 中的箭头函数。

// 用接口定义函数的形状
// 我们也可以使用接口的方式来定义一个函数需要符合的形状：
interface SearchFunc {
  (source: string, substring: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, substring: string) {
  return source.search(substring) !== -1; //search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
};

//可选参数
// 前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？
// 与接口中的可选属性类似，我们用 ? 表示可选的参数：
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}

let aa = buildName('aa', 'bb');
let tom = buildName('cc');

// 需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必须参数了：
function buildName1(firstName?: string, lastName: string) {
  if (firstName) {
    return firstName + ' ' + lastName;
  } else {
    return lastName;
  }
}
let tomcat = buildName1('Tom', 'Cat');
let tom1 = buildName1(undefined, 'Tom');

// index.ts(1,40): error TS1016: A required parameter cannot follow an optional  parameter.

//参数默认值
// 此时就不受「可选参数必须接在必需参数后面」的限制了：
function buildName3(firstName: string = 'Tom', lastName: string) {
  return firstName + ' ' + lastName;
}
let tomcat2 = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');
*/
