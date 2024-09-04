


function myfunction(){
    let a = 5;
    myfunctiontwo();
    return a;


    console.log(a);
}


function myfunctiontwo(){
    let a = 10;
    myfunctiontwo();
    return a;
}

function myfunctionthree(){
    let a = 10;
    myfunctiontwo();
    return a;
}




console.log(myfunctiontwo());
console.log(myfunctionthree());

