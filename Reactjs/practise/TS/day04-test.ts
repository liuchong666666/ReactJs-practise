/*
 * @Author: lc
 * @Date: 2019-09-02 09:37:23
 * @Description:
 */
/*
let obj: Array<object> = [{ d: 12 }];
// let obj2: object = { a: [123], b: [2415] };//这个一般很少用，用interface
let obj2 = { a: [123], b: [2415] };
let aa = obj[0];

console.log(obj2.a[0]);

for (let vv in obj2) {
  console.log(vv);
}

interface Person {
  name: string;
  age?: number;
  readonly id: number;
}
let students: Person = {
  name: 'lc',
  id: 123,
  age: 18,
};

console.log(students.name + ',' + students.id + ',' + students.age);

//函数：
function num(x: number, y: number): number {
  return x + y;
}
let num1: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
//用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function(source: string, subString: string) {
  return source.search(subString) !== -1;
};
//可选参数
function Sum(x: number, y?: number): number {
  if (y) {
    return x + y;
  } else {
    return x;
  }
}

console.log(Sum(1, undefined));

//参数默认值
function Sum1(x: number = 2, y?: number): number {
  if (y) {
    return x + y;
  } else {
    return x;
  }
}
console.log(Sum1(undefined));
//剩余参数
function push(array: any[], ...items: number[]) {
  items.forEach(item => array.push(item));
}
let a = [1, '2'];
push(a, 1, 2, 3, 4, 56);
console.log(a);

//重载
function reverse1(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  } else {
    return x
      .split('')
      .reverse()
      .join('');
  }
}
//然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  } else {
    return x
      .split('')
      .reverse()
      .join('');
  }
}
*/

/*
import { getName, Foo, color, number } from './day04-test-test';
let a = getName();
console.log(a);
console.log(color);
console.log(Foo.name);
console.log(number);
*/

/*
//枚举
//自动赋值
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Days['Sun'] === 0); //true
console.log(Days[0] === 'Sun'); //true



//手动赋值
enum Days {
  Sun = 7,
  Mon = 1,
  Tue, //2  从手动赋值结束的数开始递增，可能会覆盖所以尽量不要覆盖
  Wed, //3
  Thu, //4
  Fri, //5
  Sat, //6
}

console.log(Days['Sun'] === 7); // true
console.log(Days['Mon'] === 1); // true
console.log(Days['Tue'] === 2); // true
console.log(Days['Sat'] === 6); // true

// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1：
enum Days {
  Sun = 7,
  Mon = 1.5,
  Tue, //2.5
  Wed, //3.5
  Thu, //4.5
  Fri, //5.5
  Sat, //6.5
}

console.log(Days['Sun'] === 7); // true
console.log(Days['Mon'] === 1.5); // true
console.log(Days['Tue'] === 2.5); // true
console.log(Days['Sat'] === 6.5); // true


// 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）。
// 前面我们所举的例子都是常数项，一个典型的计算所得项的例子：
enum Color {
  Red,
  Green,
  Blue = 'blue'.length, //4
}
// 上面的例子中，"blue".length 就是一个计算所得项。
console.log(Color.Blue); //4


// 如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：
enum Color {
  Red = 'red'.length,
  Green, //这里应该被手动赋值，否则报错
  Blue,
}

*/
/*
//常数枚举
//常数枚举是使用 const enum 定义的枚举类型：
const enum Directions1 {
  Up = 3,
  Down, //4
  Left, //5
  Right, //6
}
console.log(Directions1.Left);

let directions1 = [
  Directions1.Up,
  Directions1.Down,
  Directions1.Left,
  Directions1.Right,
];
// 上例的编译结果是
// var directions1 = [0 , 1 , 2 , 3 ];

//包含了计算成员，则会在编译阶段报错：
// const enum Color {
//   Red,
//   Green,
//   Blue = 'blue'.length,//error
// }

// 外部枚举
// 外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型：

declare enum Directions {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];
// 上例的编译结果是：
// var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];


*/

/*
// 同时使用 declare 和 const 也是可以的：
declare const enum Directions {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];
// 上例的编译结果是
// var directions1 = [0 , 1 , 2 , 3 ];



*/

/*


// 静态方法
// 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：
class Animal {
  static isAnimal(a: any) {
    return a instanceof Animal;
  }
}

let a = new Animal();
Animal.isAnimal(a); // true
a.isAnimal(a); // TypeError: a.isAnimal is not a function,//直接用类来调用



*/

/*



//public private 和 protected
// TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

class Animal {
  public name: any;
  public constructor(name: string) {
    this.name = name;
  }
}
let a = new Animal('jack');
console.log(a.name);



*/

/*



// 使用 private 修饰的属性或方法，在子类中也是不允许访问的：
class Animal {
  private name: any;
  public constructor(name: any) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name: any) {
    super(name);
    console.log(this.name); //error:Property 'name' is private and only accessible within class 'Animal'.
  }
}


*/

/*


// 而如果是用 protected 修饰，则允许在子类中访问：
class Animal {
  protected name: any;
  public constructor(name: any) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name: any) {
    super(name);
    console.log(this.name);
  }
}


*/

/*
//什么是抽象类？
// 首先，抽象类是不允许被实例化的：
abstract class Animal {
  public name: any;
  public constructor(name: any) {
    this.name = name;
  }
  public abstract sayHi(): any;
}
let a = new Animal('jack'); //error TS2511: Cannot create an instance of the abstract class 'Animal'.


*/
/*


//其次，抽象类中的抽象方法必须被子类实现：
abstract class Animal {
  public name: any;
  public constructor(name: any) {
    this.name = name;
  }
  public abstract sayHi(): any;
}
class Cat extends Animal {
  public eat() {
    console.log(`${this.name} is eating`);
  }
}
//error TS2515: Non-abstract class 'Cat' does not implement inherited abstract member 'sayHi' from class 'Animal'
let cat = new Cat('tom');


*/

/*


// 下面是一个正确使用抽象类的例子：
abstract class Animal {
  public name: any;
  public constructor(name: any) {
    this.name = name;
  }
  public abstract sayHi(): any;
}

class Cat extends Animal {
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`);
  }
}

let cat = new Cat('Tom');


class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `my name is ${this.name}`;
  }
}
let a: Animal = new Animal('ja');
console.log(a.sayHi()); // My name is Jack
*/
/*




//extends是继承父类，只要那个类不是声明为final或者那个类定义为abstract的就能继承
//但implements可以实现多个接口，用逗号分开就行了 比如 ：class A extends B implements C,D,E


//类实现接口
// 一个类可以实现多个接口：
interface Alarm {
  alert(): void;
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

class Car implements Alarm, Light {
  alert() {
    console.log('Car alert');
  }
  lightOn() {
    console.log('Car light on');
  }
  lightOff() {
    console.log('Car light off');
  }
}

*/

/*
// 接口继承接口
// 接口与接口之间可以是继承关系：
interface Alarm {
  alert(): void;
}

interface LightableAlarm extends Alarm {
  lightOn(): void;
  lightOff(): void;
}

class Car implements LightableAlarm {
  alert() {
    console.log('Car alert');
  }
  lightOn() {
    console.log('Car light on');
  }
  lightOff() {
    console.log('Car light off');
  }
}

let a: Alarm = {
  alert() {
    console.log('alert');
  },
};
*/

//接口继承类
class point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
interface pointed extends point {
  z: number;
}

let po: pointed = { x: 1, y: 2, z: 3 };

function createArray(length: number, value: any): Array<any> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

let c = createArray(3, 'x'); // ['x', 'x', 'x']
console.log(c);

//---------------------------------------------------------------
interface Person {
  name: string;
  age: number;
}
interface Iprops<T> {
  list: Array<T>;
}
let a: Iprops<Person> = {
  list: [
    //Person传啥，就按其Person相应的格式写//Array<T>; 数组，T对象   [{}]
    {
      name: 'st',
      age: 23,
    },
  ],
};

//
interface Goods {
  id: number;
  age: number;
}
let b: Iprops<Goods> = {
  list: [
    {
      id: 123,
      age: 33,
    },
  ],
};

console.log(a.list);
console.log(b.list);
/*
//-----------------react 伪代码 示例泛型的应用-----------------------------------
interface IProps {
  name: string;
  age: number;
}
interface Istate {
  width: string;
  height: number;
}
class Person extends React.Component<IProps, IState> {
  //在react中  第一个IProps是父组件传的值 //第二个IState是自身组件的状态
  constructor(props) {
    super(props);
    this.state = {
      width: '100',
      height: 100,
    };
  }
  render() {
    return <div></div>;
  }
}
<Person name="asd", age = 123 />//这样写有个好处，如果父组件没传相应的值就会报错


interface Component<T, U> {}
*/
function createArray1<T>(length: number, value: T): Array<T> {
  let result: Array<T> = [];
  // let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

// let c1 = createArray1<string>(3, 'x'); // ['x', 'x', 'x']//可以手动指定类型，
let c1 = createArray1(3, 'x'); // ['x', 'x', 'x']//也可以不手动指定，
console.log(c1);

//多个类型参数：
//定义泛型的时候，可以一次定义多个类型参数：
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
let s = swap([7, 'seven']);
console.log(s);

/*


//泛型约束
//在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：
//例中，泛型 T 不一定包含属性 length，所以编译的时候报错了。
function login<T>(arg: T): T {
  console.log(arg.length); //error
  return arg
}

*/
/*
// 这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量。这就是泛型约束：
interface LengthWise {
  length: number;
}
function login<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
//上例中，我们使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性。
//此时如果调用 loggingIdentity 的时候，传入的 arg 不包含 length，那么在编译阶段就会报错了：

interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity(7); //error :Argument of type '7' is not assignable to parameter of type 'Lengthwise'.
*/
/*
//泛型接口
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}
let createArray2: CreateArrayFunc = function<T>(
  length: number,
  value: T
): Array<T> {
  let result: Array<T> = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
createArray2(3, 'x'); // ['x', 'x', 'x']

*/
//进一步，我们可以把泛型参数提前到接口名上：
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}
let createArray3: CreateArrayFunc<any> = function<T>(
  length: number,
  value: T
): Array<T> {
  let result: Array<T> = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
createArray3(3, 'x'); // ['x', 'x', 'x']

//泛型类
// 与泛型接口类似，泛型也可以用于类的类型定义中
class GenericNumber<T> {
  zeroValue: T;
  constructor(zeroValue: T) {
    this.zeroValue = zeroValue;
  }
}
let myGenericNumber = new GenericNumber<number>(0);
myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) {
//   return x + y;
// };

class aa {
  b: number;
  constructor(b: number) {
    this.b = b;
  }
}
let cc = new aa(11);
cc.b = 123;
console.log(cc);
