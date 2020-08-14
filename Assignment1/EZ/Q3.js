const replaceVowels = (string) =>{
    var str = string.split('');
    for(var i = 0; i < str.length; i++){
        if(str[i] == 'a')
        {
            str[i] = '1';
        }
        if(str[i] == 'e')
        {
            str[i] = '2';
        }
        if(str[i] == 'i')
        {
            str[i] = '3';
        }
        if(str[i] == 'o')
        {
            str[i] = '4';
        }
        if(str[i] == 'u')
        {
            str[i] = '5';
        }
    }
    str.join('');
    for(var t = 0; t < str.length; t++){
        return str
    }

}

console.log(replaceVowels("prateek"));
console.log(replaceVowels("karachi"));
console.log(replaceVowels("khandbari"));