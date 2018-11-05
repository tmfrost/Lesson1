
function zadanie1(a,b){
    //var a=1, b=2;
    if(a>b)
    return true;
    else 
    return false;
}
console.log(zadanie1(4,3));


function zadanie2(x){
var x="строка";
console.log("Вы ввели: " + x);
}

zadanie2();

function zadanie3(a){
    var a;
    if(a===undefined)
    return "undefined";
    else if (a=== null) return "null";
    else return "not null and undefined";
}

var obj = {};
var myobj = {"element" : "value"};


function zadanie4(newobj){
    newobj.checked = true;
    console.log(newobj);
    console.log(newobj.checked);
    }
    
    zadanie4(myobj);

function zadanie5() {
    var k=4;
    for(var i=0; i<=k; i++)
    {
        console.log(i);  
    }
    for(var j=k; j>=0; j--)
    {
        console.log(j); 
    }
}

console.log(zadanie3(null));
console.log(zadanie3(51));
console.log(zadanie3(undefined));
zadanie5()
