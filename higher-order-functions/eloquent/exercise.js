// Challenge 1. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];


// Your code here.
arrays.reduce((acc,cv) => {
  acc = acc.concat(cv);
  return acc;
},[]);
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.
function loop(value,testFunc, updFunc, bodyFunc){
  while(testFunc(value)){
    bodyFunc(value);
    value = updFunc(value);
  }
}




loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


// Challenge 3. Everything
function every(array=[], test) {
  let finalBool;
  if(array.length == 0){
    finalBool = true;
  }
  else{
      for(let i = 0;i < array.length;i++){
        if(test(array[i]))
        {
          finalBool = true;
        }else{
          finalBool = false;
          break;
        }

      } 
      return finalBool
  }
  return finalBool;
}

// Some method
function some(array=[],test){
  newArr = array.reduce((acc,cv)=>{
    acc = acc.concat(test(cv));
    return acc;
  },[]);
  let bool;
  if(newArr.includes(true)){
    bool = true;
  }
  else{
    bool = false;
  }
  return bool;
}
// make every using some 
function useSome(array,test){
  let newArr = []
  let x=[];
  for(let i = 0;i<array.length;i++){
    
     newArr.push(array[i]);
     if(newArr.some(test)== false){
       x = x.concat(false);
      newArr.pop();
     }
     else{
       x = x.concat(true)
     }  newArr.pop();
  }
  if(x.includes(true)&&x.includes(false)){
    console.log(false);
  }else{
    console.log(true);
  }
}



console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true





// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
