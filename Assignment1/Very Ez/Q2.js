
function dividesEvenly(a,b)
 { 
  if(a>b || a===b)
  {   
    if((a%b)==0)  
        return true; 
    else
        return false;
  }else{
    return "not a valid input"
  }
}
//Result

console.log(dividesEvenly(98,7));
console.log(dividesEvenly(85,4));
console.log(dividesEvenly(2,2));
console.log(dividesEvenly(4,10));