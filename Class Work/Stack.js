class Stack{

    constructor(){
        this.arr=[]
    }
    Empty()
    {
        return this.arr.length==0;
    }
    pop()
    {
        if(this.arr.length!=0)
        {
            console.log('poping',this.arr.pop());
            return this.arr.pop();
        }else{
            console.log('empty stack');
        }
    }
    push(item)
    {
        this.arr.push(item);
    }
    top()
    {
        return this.arr[this.arr.length -1];
    }

    display()
    {
        var str="";
        for(var i=0;i<this.arr.length;i++)
        {
            str+=this.arr[i];
        }
        return str;
    }
}

var obj =new Stack();
console.log(obj.Empty());
obj.push(10);
obj.push(20);
obj.push(30);
obj.pop();

console.log(obj.display());
