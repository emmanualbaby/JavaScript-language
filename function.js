function myfunc(){
    let a = 5;
    myfunctwo();
    return a;

}

function myfunctwo(){
    console.log("completed"); 
}

function myfuncthree(){
    let a = 5;
    myfunctwo();
    return a;

}

console.log(myfunc());
console.log(myfuncthree());