let userName = prompt('넌 누구니?')

let message

if (userName === '김아현') {
    message = '오늘도 열심히 하는 김아현'
} else if (userName === '관리자'){
    message = 'Admin page입니다.'
} else {
    message = `<h1>${userName} 환영합니다.</h1>`
}

document.write(message,'<br>')

switch(userName){
    case '관리자' : {
        message = '<h2> 관리자님 충성충성 ^^7 </h2>'
        break
    }
    case '김아현' : {
        message = '<a href="http://github.com/AhyeonKim/">Git</a><br>'
        break
    }
    default : {
        message = `<h1> ${userName} 환영합니다. </h1>`
    }
}
document.write(message)
/*
    * 반복문
    var는 함수 스코프를 가지고 있어서 for 문 이후에 i 변수에 값이 유지.
    let은 블록스코프를 가지고 있어서 for 문 이후에 해당 변수는 없음
*/
for (let i=0; i<3 ; i++) {
    console.log(i)
}
// console.log(j) // ReferenceError

let myArray = ['떡볶이','곱창','커피','알리오올리오']

for (let eat of myArray) {
    document.write(`<h3>${eat}</h3>`)
}