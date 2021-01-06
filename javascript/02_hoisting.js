/*
    hoisting
    함수 안에 있는 변수값들 var와 함수에 대하여
    선언을 맨 상단에서 하게 됨
*/

// var 와 함수의 특성
console.log(ahyeon) // undefined
var ahyeon = '아현'

console.log(seungyeol) // ReferenceError
let seungyeol = '승열'

hello() // hello
function hello() {
    console.log('hello')
}

/*
var
1. 선언과 동시에 초기화
2. 할당

let, const 는 TDZ (Temporal Dead Zone) 존재
1. 선언
2. TDZ
3. 초기화
4. 할당
*/