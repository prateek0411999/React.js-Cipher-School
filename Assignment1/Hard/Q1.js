// function type(val) {
//     let array = Object.prototype.toString.call(val);
//     let type = array.split
//     let types='';
  
//     for (i = 0; i < type[1].length; i++) {
//       if (type[1].charA
//   }
var type = function(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  };
  
  console.log(type(1));
  console.log(type('a'));
  console.log(type(true));
  console.log(type([]));
  console.log(type(null))