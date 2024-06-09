function fact(a){
    if(a > 1) {
        return a * fact(a - 1);
    } else {
        return 1;
    }
}
let b = prompt("Enter number");
console.log(fact(b));
