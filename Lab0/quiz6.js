function myfunc(x,y){
    return(x+y);
}

console.log(myfunc(2,myfunc(5,-2)));

var numbers=[1,2,3,4,5];

numbers.push(6);
numbers.unshift(7);
numbers.pop();
numbers.shift();

console.log(numbers);


console.log(31 + "angrybear");

function addRandomNumber(){
    let el = document.createElement("p");
    el.innerText = Math.floor(Math.random() * 100);
    document.body.appendChild(el);
    }