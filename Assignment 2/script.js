var x = document.getElementsByClassName("header");
x[0].innerHTML = "Our Store";
  
var doughnutprice = [5,3,2];
var sweetprice = [4,6,3];
var cakeprice = [88,44,33];
var cupcakeprice = [5,3,5];

var doughnuts = function(x) {
    var img="";
    for (var counter = 1; counter <= x; counter++ ) {
             img += '<center><div class="align"> <img src="images/doughnuts/'+counter+'.jpg" alt="" /> Doughnut -Price: '+'<b> $'+doughnutprice[counter-1]+'</b></div></center>';
          }
            document.getElementById("space").innerHTML = img;
        };
var sweet = function(x) {
    var img2="";
    for (var counter = 1; counter <= x; counter++ ) {
        img2 += '<center><div class="align"> <img src="images/sweets/'+counter+'.jpg" alt="" /> Sweet -Price: '+'<b> $'+sweetprice[counter-1]+'</b></div></center>';
    }
    document.getElementById("space2").innerHTML = img2;
};
var cake = function(x) {
    var img3="";
    for (var counter = 1; counter <= x; counter++ ) {
        img3 += '<center><div class="align"> <img src="images/cakes/'+counter+'.jpg" alt="" /> Cake -Price: '+'<b> $'+cakeprice[counter-1]+'</b></div></center>';
    }
    document.getElementById("space3").innerHTML = img3;
};
var cupcake = function(x) {
    var img4="";
    for (var counter = 1; counter <= x; counter++ ) {
        img4 += '<center><div class="align"> <img src="images/cupcakes/'+counter+'.jpg" alt="" /> Cupcake -Price: '+'<b> $'+cupcakeprice[counter-1]+'</b></div></center>';
    }
    document.getElementById("space4").innerHTML = img4;
};

var dispAll = function() {
    sweet(3);
    doughnuts(3);
    cake(3);
    cupcake(3);
};
var dispDoughnut = function() {
    document.getElementById("space4").innerHTML = " ";
    document.getElementById("space3").innerHTML = " ";
    document.getElementById("space2").innerHTML = " ";
    doughnuts(3);  
};
var dispCake = function() {
    document.getElementById("space4").innerHTML = " ";
    document.getElementById("space").innerHTML = " ";
    document.getElementById("space2").innerHTML = " ";
    cake(3);  
};
var dispCupCake = function() {
    document.getElementById("space").innerHTML = " ";
    document.getElementById("space3").innerHTML = " ";
    document.getElementById("space2").innerHTML = " ";
    cupcake(3);  
};
var dispSweet = function() {
    document.getElementById("space4").innerHTML = " ";
    document.getElementById("space3").innerHTML = " ";
    document.getElementById("space").innerHTML = " ";
    sweet(3);  
};

dispAll();

function search() 
{
    var x = document.getElementById("searchText").value;
   if(x=="sweet"){
       dispSweet();
   }
   else if(x=="cake"){
    dispCake();
}
else if(x=="cupcake"){
    dispCupCake();
}
else if(x=="doughnut"){
    dispDoughnut();
}
else {
 
    dispAll();
}
   
  }