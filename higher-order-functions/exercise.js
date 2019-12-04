// Challenge 1
function addTwo(num) {
return num+2;

}


// Challenge 2
function addS(word) {
  return String(word)+"s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  let newArr = [];
  for(let i = 0;i<array.length;i++){
    newArr.push(callback(array[i]));
  } 
  return newArr;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
  for(let i = 0;i<array.length;i++){
    array[i]= (callback(array[i]));
  } 
  return array;
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  newArr = []
  array.forEach((elem)=>{
    newArr.push(callback(elem));
  })
  return newArr;
}

// //Extension 2
// var nums = [4, 1, 3];
// var add = function(a, b) { return a + b; }
// reduce(nums, add, 0);
function reduce(array, callback, initialValue) {
  let acc = initialValue;
  let cv;
  for(let i =0;i<array.length;i++){
    cv = array[i];
    acc = callback(acc,cv);
  }
  return acc;
  
}

//Extension 3
function intersection(...arrays) {
  let x = arrays.reduce((acc,cv) =>{
    acc = acc.filter((value)=>cv.includes(value))
    return acc;
    });
  return x;
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
  return arrays.reduce((acc,cv)=>{
    cv.filter((val) => !acc.includes(val)?acc.push(val):acc);
    return acc; 
  });
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
  obj = {};
  for(let i = 0;i<array1.length;i++){
    if((callback(array1[i]))==array2[i])
    {
      obj[array1[i]]=array2[i];
    }
  }

return obj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  let obj ={};
  
  for(let i=0;i<arrVals.length;i++){
    let newArr = [];
    for(let j=0;j<arrCallbacks.length;j++){
      let z= arrCallbacks[j](arrVals[i]);
      newArr = newArr.concat(z);
      obj[arrVals[i]] = newArr;

    }
  }
  return obj; 
} 

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
