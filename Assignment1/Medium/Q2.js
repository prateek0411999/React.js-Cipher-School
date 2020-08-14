const testJackpot = (params) => {
    if(params.map(p => p === params[0]).filter(a=>a).length = 4)
    {
        var op = "true";
    }
    if(params.map(p => p === params[0]).filter(a=>a).length != 4)
    {
        var op = "false";
    }
    return op; 
}

console.log('This four string are same : ',testJackpot(["@","@","@","@"]));
console.log('This four string are same : ',testJackpot(["abc","abc","abc","abc"]));
console.log('This four string are same : ',testJackpot(["Ss","Ss","aa","ss"]));
console.log('This four string are same : ',testJackpot(["%","%","%","!"]));