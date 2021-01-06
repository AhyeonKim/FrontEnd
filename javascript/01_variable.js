/*
    1-1. 선언과 할당
    var
    let / const
*/

// 01. var
var myVar // 선언
myVar = 1 // 할당
console.log(myVar) // 1

var myVar = 'Hello' // 재선언 & 할당
console.log(myVar) // Hello

// 02. let
let myLet // 선언 가능
myLet = 2 // 할당
myLet = 3 // 재할당 가능

let myLet = 'hi' // 재선언 X -> syntaxError

// 03. const
const myConst // 초기화 누락 -> syntaxError
const myConst = 'hi' // 반드시 값과 함께 선언
myConst = '1' // typeError -> const에 할당 안됨

/*
    1-2. Scope
*/

let VarFunction = function() {
    var myVar = 0
    if (true) {
        var myVar = 1
        console.log(myVar)
    }
    console.log(myVar)
}
VarFunction()

let Letfunction = function() {
    let myLet = 0
    if (true) {
        let myLet = 1
        console.log(myLet)
    }
    console.log(myLet)
}
Letfunction()

function consoleNum() {
    for (var i=0;i<4;i++){
        setTimeout(
            ()=>console.log(i)
        ,1000*i
        )
    }
}
consoleVarNum()
// 4가 4번 찍히는 걸 방지하기 위해 let 으로 변수를 고치면
// 0, 1, 2, 3 이 나오게 된다