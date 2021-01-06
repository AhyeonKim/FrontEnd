const numbers = [ 10, 1, 3, 5 ]
// 주소값 -> 해당되있는 데이터의 변경

numbers[0] // 10
numbers[-1]  // undefined
numbers.length // 4

numbers.reverse() // return + 원본 변경.
numbers.push(3) // 마지막 원소에 추가 + return length
numbers.concat(5) // return 마지막에 추가된 배열
numbers.pop() // 마지막 원소 제거 +  return (원소)
numbers.unshift(3) // 가장 첫번째 원소에 추가 + return length
numbers.shift() // 가장 첫번째 원소 제거 + return (원소)
numbers.includes(1) // 포함여부 확인
numbers.indexOf(10) // 가장 먼저 존재하는 위치, 안만나면 -1

numbers.join() // 기본값이 , '10,1,3,5'
numbers.join('-')  // -로 연결