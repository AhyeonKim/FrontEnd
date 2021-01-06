/*
    원시 타입(primitive data type)
    - boolean
    - null
    - undefined
    - number
    - string
    - symbol (ES6+)
* 객체타입(object)
    - object
*/

// number
3
-5
3.14
2.14e-3 // 지수표현
Infinity
console.log(Infinity)
console.log(Infinity-100000000)
NaN // Not A Number

// string
let myName = '아현'
myName = '김아현'
console.log(typeof myName)
let hi = `안녕 ${myName}`
console.log(hi)
// ` (backtick) : ES6+ 템플릿리터럴
console.log (`안녕하세요 ${myName}입니다`)

// boolean
true
false

// empty value
undefined // typeof undefined -> undefined
null // typeof null -> object