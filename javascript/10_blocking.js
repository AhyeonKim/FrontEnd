function a() {
    console.log('a')
  }
  console.log('hi')
  setTimeout(a, 3000)
  console.log('bye')
  
  function printHello() {
    console.log('hellooo')
  }
  
  function baz() {
    console.log('baz') // 1
    setTimeout(printHello, 0) // 3
    console.log('baz end') // 2 
  }
  function bar() {
    console.log('bar')
    baz()
  }
  function foo() {
    console.log('foo')
    bar()
  }
  
  foo()