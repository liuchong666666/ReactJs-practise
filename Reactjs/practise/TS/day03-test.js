/*
 * @Author: lc
 * @Date: 2019-08-30 10:17:02
 * @Description:
 */
// declare var Jquery: (selector: string) => any;
// Jquery('#foo');
/*


//枚举

enum Color {
  red,
  green,
  blue,
}
let c: Color = Color.blue;
console.log(c);//2



enum Color {
  red = 1,
  green=2,
  blue=4,
}
let c: Color = Color.red;
console.log(c);//1

enum Color {
  red = 3,
  green = 1,
  blue = 4,
}
let c1: string = Color[3];
console.log(c1); //red

let a: any = 4;
a = 'maybe';
a = false;
a.ifItExists();
a.toFixed();

//ts里面每个类型各自的，object就是一个{}
let b: object = '123'; //所以这里不行

let list: any[] = [1, true, 'free'];
list[1] = 100;
console.log(list[1]);


*/
/*
//元组 Tuple
//元组是可变的
// push() 向元组添加元素，添加在最后面。

// pop() 从元组中移除元素（最后一个），并返回移除的元素。
let x: [string, number];
x = ['hello', 0];
console.log(x);
// 当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0].substr(1)); // OK
x[0] = '123';
console.log(x[0]);
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// 当访问一个越界的元素，会使用联合类型替代：




官方文档关于这一点上没有更新。
事实上在Typescript2.7（FixedLengthTuples一节中）之后，Tuple的定义已经变成了有限制长度的数组了。
interfaceNumStrTupleextendsArray{
0:number;
1:string;
length:2;//usingthenumericliteraltype'2'
}
所以你不能再越界访问了。

x[3] = 'world'; //不能越界了

*/
/*
//never 类型
//never 是其它类型（包括 null 和 undefined）的子类型，
//代表从不会出现的值。这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环）
let x: never;
let y: never;

// x = 123; //error

// 运行正确，never 类型可以赋值给 never类型
x = (() => {
  throw new Error('123');
})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(mes: string): never {
  throw new Error('123');
}

// function a(b: number): never {
//   return 123; //error：Type '123' is not assignable to type 'never'.ts(2322)
// }

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
  while (true) {}
}

//变量声明
//4种方式

// 声明变量的类型及初始值：
// var [变量名] : [类型] = 值;
// 例如：
var uname: string = 'Runoob';

// 声明变量的类型及但没有初始值，变量值会设置为 undefined：
// var [变量名] : [类型];
// 例如：
var uname1: string;
uname = '12';

// 声明变量并初始值，但不设置类型类型，该变量可以是任意类型：
// var [变量名] = 值;
// 例如：
var uname2 = 'Runoob';

// 声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：
// var [变量名];
// 例如：
var uname3;

//TypeScript 遵循强类型，如果将不同的类型赋值给变量会编译错误，如下实例：
// var num:number = "hello"     // 这个代码会编译错误

//类型断言（Type Assertion）
//类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型

// <类型>值
// 或:
// 值 as 类型
var str = '1';
var str2: number = <number>(<any>str); //str、str2 是 string 类型
console.log(str2);




//变量作用域

//全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
// 类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
// 局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。
var global_num = 12; //全局变量
class Numbers {
  num_val = 13; //类变量
  static sval = 10; //静态变量
  storeNum(): void {
    var local_num = 14; //局部变量
  }
}
console.log('全局变量：' + global_num);
console.log('静态变量：' + Numbers.sval);
var obj = new Numbers();
console.log('类变量：' + obj.num_val);

// 如果我们在方法外部调用局部变量 local_num，会报错：
// error TS2322: Could not find symbol 'local_num'.



//TypeScript 运算符
// TypeScript 主要包含以下几种运算：

// 算术运算符 和js一样  + - * /  ++ -- %求余
// 逻辑运算符 和js一样  && || ！
// 关系运算符 和js一样 > < == != >= <=
// 按位运算符
// 赋值运算符  和js一样 = += -= *= /=
// 三元/条件运算符
// 字符串运算符
// 类型运算符

// 算术运算符
var num1: number = 10;
var num2: number = 2;
var res: number = 0;

res = num1 + num2;
console.log('加:        ' + res);
num1++;
console.log('num1 自增运算: ' + num1);
// 关系运算符
var num1: number = 5;
var num2: number = 9;

console.log('num1 的值为: ' + num1);
console.log('num2 的值为:' + num2);

var res1 = num1 > num2;
console.log('num1 大于n num2: ' + res1);

res1 = num1 < num2;
console.log('num1 小于 num2: ' + res1);

//逻辑运算符

var avg: number = 20;
var percentage: number = 90;

console.log('avg 值为: ' + avg + ' ,percentage 值为: ' + percentage);

var res2: boolean = avg > 50 && percentage > 80;
console.log('(avg>50)&&(percentage>80): ', res2); //false

var res2: boolean = avg > 50 || percentage > 80;
console.log('(avg>50)||(percentage>80): ', res2); //true

var res2: boolean = !(avg > 50 && percentage > 80);
console.log('!((avg>50)&&(percentage>80)): ', res2); //true

//短路运算符(&& 与 ||)
// &&(且) 运算符只有在左右两个表达式都为 true 时才返回 true。
var a: number = 10;
var result: boolean = a < 10 && a > 5;
console.log(result);

//||(或) 运算符只要其中一个表达式为 true ，则该组合表达式就会返回 true。
var a: number = 10;
var result: boolean = a > 5 || a < 10;
console.log(result);

//位运算符

//赋值运算符

//三元运算符 (?)
var num: number = -2;
var result2 = num > 0 ? '大于 0' : '小于 0，或等于 0';
console.log(result);

//类型运算符
//typeof 运算符
//typeof 是一元运算符，返回操作数的数据类型。

var num2: string = '1233';
console.log(typeof num2); //string


//其他运算符
// 负号运算符(-)
// 更改操作数的符号
var x: number = 4;
var y = -x;
console.log('x 值为: ', x); // 输出结果 4
console.log('y 值为: ', y); // 输出结果 -4
// 字符串运算符: 连接运算符 (+)
// + 运算符可以拼接两个字符串，查看以下实例：

var msg: string = 'RUNOOB' + '.COM';
console.log(msg); //RUNOOB.COM


//TypeScript 条件语句
// if 语句 - 只有当指定条件为 true 时，使用该语句来执行代码
// if...else 语句 - 当条件为 true 时执行代码，当条件为 false 时执行其他代码
// if...else if....else 语句- 使用该语句来选择多个代码块之一来执行
// switch 语句 - 使用该语句来选择多个代码块之一来执行
var num: number = 5;
if (num > 0) {
  console.log('数字是正数');
}

var num: number = 12;
if (num % 2 == 0) {
  console.log('偶数');
} else {
  console.log('奇数');
}

var num: number = 2;
if (num > 0) {
  console.log(num + ' 是正数');
} else if (num < 0) {
  console.log(num + ' 是负数');
} else {
  console.log(num + ' 不是正数也不是负数');
}

var grade: string = 'A';
switch (grade) {
  case 'A': {
    console.log('优');
    break;
  }
  case 'B': {
    console.log('良');
    break;
  }
  default: {
    console.log('非法输入');
    break;
  }
} //优
*/
/*
///TypeScript 循环

// for 循环
// TypeScript for 循环用于多次执行一个语句序列，简化管理循环变量的代码。
var num: number = 5;
var i: number;
var factorial = 1;

for (i = num; i >= 1; i--) {
  factorial *= i;
}
console.log(factorial);

// for...in 循环
// for...in 语句用于一组值的集合或列表进行迭代输出。
var j: any;
var n: any = 'a b c'; //n[0]
console.log(n);
for (j in n) {
  console.log(j);
}

//for…of 、forEach、every 和 some 循环
//此外，TypeScript 还支持 for…of 、forEach、every 和 some 循环。
// for...of 语句创建一个循环来迭代可迭代的对象。
//在 ES6 中引入的 for...of 循环，以替代 for...in 和 forEach() ，
//并支持新的迭代协议。for...of 允许你遍历 Arrays（数组）, Strings（字符串）, Maps（映射）, Sets（集合）等可迭代的数据结构等。

//TypeScript for...of 循环
let someArray = [1, 'string', false];
for (let entry of someArray) {
  console.log(entry); // 1, "string", false
}
let objArray = { a: 1, b: 2, c: 3 };
for (let entry in objArray) {
  console.log(entry);
}

// TypeScript forEach 循环
let list: number[] = [4, 5, 6];
list.forEach((val, idx, array) => {
  // val: 当前值
  // idx：当前index
  // array: Array
  console.log(val, idx, array);
});
// 　　every()方法用于检测数组中所有元素是否都符合指定条件，若符合返回true，否则返回false；不会对空数组进行检测，不会改变原来的数组。
list.every((val, idx, array) => {
  // val: 当前值
  // idx：当前index
  // array: Array
  return true; // Continues
  // Return false will quit the iteration
});

// 　　some()方法用于检测数组中的元素是否有满足指定条件的，若满足返回true，否则返回false；不会对空数组进行检测，不会改变原来的数组。

//while 循环
var num: number = 5;
var factorial: number = 1;

while (num >= 1) {
  factorial = factorial * num;
  num--;
}
console.log('5 的阶乘为：' + factorial);
//do...while 循环
var n1: number = 10;
do {
  console.log(n);
  n--;
} while (n >= 0);
//break 语句
var i: number = 1;
while (i <= 10) {
  if (i % 5 == 0) {
    console.log('在 1~10 之间第一个被 5 整除的数为 : ' + i);
    break; // 找到一个后退出循环
  }
  i++;
} // 输出 5 然后程序执行结束
//continue 语句
var num: number = 0;
var count: number = 0;

for (num = 0; num <= 20; num++) {
  if (num % 2 == 0) {
    continue;
  }
  count++;
}
console.log('0 ~20 之间的奇数个数为: ' + count); //输出10个偶数
//无限循环
for (;;) {
  console.log('这段代码会不停的执行');
}
while (true) {
  console.log('这段代码会不停的执行');
}
*/
// TypeScript 函数
function test() {
    // 函数定义
    console.log('调用函数');
}
test(); // 调用函数
//函数返回值
// function function_name(): return_type {
//   // 语句
//   return value;
// }
// return_type 是返回值的类型。
// return 关键词后跟着要返回的结果。
// 一个函数只能有一个 return 语句。
// 返回值的类型需要与函数定义的返回类型(return_type)一致。
// 函数定义
function greet() {
    // 返回一个字符串
    return 'Hello World';
}
//带参数函数
//function func_name( param1 [:datatype], param2 [:datatype]) {}
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
//可选参数和默认参数
//可选参数
function buildName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
// let result1 = buildName('Bob'); // 错误，缺少参数
// let result2 = buildName('Bob', 'Adams', 'Sr.'); // 错误，参数太多了
var result3 = buildName('Bob', 'Adams'); // 正确
//默认参数
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.5; }
    var discount = price * rate;
    console.log('计算结果: ', discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.3);
//剩余参数
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
var employeeName = buildName2('Joseph', 'Samuel', 'Lucas', 'MacKinzie');
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log('和为：', sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//匿名函数
//不带参数匿名函数：
var msg = function () {
    return 'hello world';
};
console.log(msg());
//带参数匿名函数：
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
//匿名函数自调用
// 匿名函数自调用在函数后使用 () 即可：
(function () {
    var x = 'Hello!!';
    console.log(x);
})();
//构造函数
var myFunction = new Function('a', 'b', 'return a * b');
var x = myFunction(4, 3);
console.log(x);
// 递归函数
// 递归函数即在函数内调用函数本身。
function factorial(number) {
    if (number <= 0) {
        // 停止执行
        return 1;
    }
    else {
        return number * factorial(number - 1); // 调用自身
    }
}
console.log(factorial(6)); // 输出 720
