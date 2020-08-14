function num(arr)
{
	let arr1 = [];
	for(i =0;i<arr.length;i++)
	{
		if(arr[i].match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/))
	        arr1.push(arr[i]);

	}
	return arr1;

};


console.log(num(["1a", "a", "2b", "b"]));
console.log(num(["abc", "abc10"]));
console.log(num(["abc", "ab10c", "a10bc", "bcd"]));
console.log(num(["this is a test", "test1"]));