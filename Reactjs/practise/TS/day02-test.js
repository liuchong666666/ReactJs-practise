/*
 * @Author: lc
 * @Date: 2019-08-29 09:31:21
 * @Description:
 */
/*
//review
let a: number[] = [1, 2, 3, 4, 5, 6, 6, 6, 6];
// let a1: number[] = [1, '2', 3, 4, 5, 6, 6, 6, 6];//error  不允许出现其他类型
//数组的方法参数也会根据数组定义是约定的类型进行限制
// a.push('a')//error

//数组泛型
//Array<any> 允许数组的每一项都为任意类型。
//Array<number> 允许数组的每一项都为number类型。
let c: Array<number> = [1, 2, 3, 45, 6];

//用接口表示数组
interface NumberArray {
  // [prop: string]: any;
  [index: number]: number;
}
let tom: NumberArray = {
  nn: 12,
  aa: [1, 2, 3],
};
*/
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x
            .toString()
            .split('')
            .reverse()
            .join(''));
    }
    else {
        return x
            .split('')
            .reverse()
            .join('');
    }
}
console.log(reverse('456qweqwew'));
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
console.log(getLength('121323'));
