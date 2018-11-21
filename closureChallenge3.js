function outer() {
    var counter = 0;
    function incrementCounter () {
      counter ++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  var willCounter = outer();
  var jasCounter = outer();
  
  // Uncomment each of these lines one by one.
  // Before your do, guess what will be logged from each function call.
  
  // willCounter();
  // willCounter();
  // willCounter();
  
  // jasCounter();
  // willCounter();