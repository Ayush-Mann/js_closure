function nonsense(str){
    var blab = function(){
        alert(string);
      }
    return blab;

    
}
2.
function nonsense(str){
    var blab = function(){
        alert(str);
      }
    return  setTimeout(blab,1000);

    
}
3.
function nonsense(str){
    return function blab(){
        alert(str);
      }
    
}
blabLater = nonsense("ayush");
blabLaterAgain = nonsense("asas");
5.
var lastNameTrier = function(firstName){
    var innerFunction = function lastName(string) {
            return firstName +" "+ string;
        };
     return innerFunction;
 };
 
6.
 function storyWriter(str=""){
    
    obj["addWords"] = function(str1){
        str = str+str1;
       return str;
    }
    obj["erase"] = function(){
        str = ""
        return str;
    }

return obj;
}