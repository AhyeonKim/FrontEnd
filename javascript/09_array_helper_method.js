/*
    Array helper methods
*/

/*
    Array.forEach
*/

let numbers = [1, 2, 3]
// 1. 반복문 (for)
for (let i=0; i < 3 ; i++) {
    console.log(numbers[i])
}

// 2. 반복문 (for .. of)
for (let number of numbers){
    console.log(number)
}

// 3. forEach
numbers.forEach(function(num) {
    console.log(num)
})
const images = [
    {height : 30, width:20},
    {height : 100, width:100},
    {height: 10 , width:5}
]
let areas=[]
images.forEach(function(image,idx) {
    console.log(idx)
    areas.push(image.height * image.width)
})
console.log(areas)

/*
    map
*/
let areas = images.map(function(image){
    return image.height * image.width
})

let areas = images.map(image => image.height * image.width)

let numbers1= [1, 2, 3]
let doubleNumbers = numbers1.map(function(number){
    return number * 2
})
console.log(doubleNumbers)
let doubleNumbers2 = numbers1.map(number => number *2)
console.log(doubleNumbers2)

// 실습 images - > map
let sizes = images.map(image => image.height * image.width)
console.log(sizes)

/*
    filter
    : 콜백함수의 return 결과가 참인 것을 각각 원소로 하는 배열 **리턴** !
*/
let myImage = []
// images 의 높이가 100보다 작은 object만 담은 배열
for (let image of images) {
    if (image.height < 100) {
        myImage.push(image)
    }
}
console.log(myImage)
myImage = images.filter(function(image){
    return image.height < 100
})
console.log(myImage)

function smallSize (image){
    return image.height < 100
}

myImage = images.filter(smallSize)

// 100보다 height 가 작은 것들의 너비를 알고싶어
let smallImage = images.filter(smallSize)
let smallImageSize = images.filter(smallSize)
                            .map(image=>image.height * image.width)
// type fruit 만 뽑아내기
let products = [
    {name:'banana', type:'fruit'},
    {name:'tomato', type:'vegetable'},
    {name:'apple', type:'fruit'},
    {name:'cucumber',type:'vegetable'}
]

let bag = products.filter(function(product){
    return product.type === 'fruit'
})
console.log(bag)
bag = products.filter(product => product.type ==='fruit')
console.log(bag)

let mySsafy = [100, 100, 95, 90]
let totalScore = mySsafy.reduce(function(total,score) {
    return total + score
}, 100) // 초기값
mySsafy.reduce((total,score) => total + score, 100)

let myInfo = {
    name : '승열',
    age : 28,
    work : 'ssafy'
}
let newInfo = [
    {name:'아현'},
    {age:26}
]
newInfo.reduce((prev,curr)=>{
    console.log(prev)
    return {...prev,...curr}
},myInfo)
/*
    find : 일치하는 첫번째 원소를 리턴
*/
mySsafy.find(function(score){
    return score === 90
})

let heros = [
    {name:'헐크', age:100},
    {name:'아이언맨',age:50},
    {name:'스파이더맨',age:30},
]

let younghero = heros.find(function(hero){
    return hero.age === 30
})
console.log(younghero)
younghero = heros.find(hero => hero.age===30)
console.log(younghero)

/*
    some, every 둘다 boolean 을 리턴
*/
// some 하나라도 true면 리턴
let myNumbers = [2, 4, 1, 3]
let odd = myNumbers.some(number => number % 2 === 0)
console.log(odd)  // 짝수가 하나라도 있는지

// every 하나라도 false면 리턴
odd = myNumbers.every(number => number % 2 === 0)
console.log(odd) // 모두가 짝수인지