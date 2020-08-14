const specialReverse = (s1,s2) => {
    var arr = s1.split(' ');

    for(var i = 0; i <arr.length; i++)
    {
        if(arr[i][0] === s2)
        {
            var temp = arr[i].split('').reverse();
            arr[i] = temp.join('');
        }
    }

    return arr.join(' ');
}

console.log(specialReverse("first man to walk on the moon","m"));
console.log(specialReverse("word searches are so fun","s"));
console.log(specialReverse("peter piper picked pickled peppers","p"));