
let hi = "Hello";
let ar = ["Apple","Mango","Banana"];

function turn(){
    for(x of ar){
        document.getElementById("count2").innerText=x;"<br>"
    }
}

turn();