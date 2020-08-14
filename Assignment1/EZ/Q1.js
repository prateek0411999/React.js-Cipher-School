function charCount (ch,charArray) 
{
    var count = 0;
    for (var i=0; i<charArray.length; i++) 
    {
        if (charArray.charAt(i) === ch) 
            count += 1;
    }
    return count;
}

console.log(charCount ("a", "edabit")); //1
console.log(charCount  ("b", "big fat bubble")); //4
console.log(charCount  ("c", "Chamber of secrets")); //1
