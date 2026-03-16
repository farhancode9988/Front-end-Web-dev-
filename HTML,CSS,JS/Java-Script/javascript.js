 
//              DOM manipulation in JavaScript

function show() {

    let item = document.querySelector("#div1");
    item.innerText = "Working";

    item.style.backgroundColor = "aquamarine";
    item.style.display = "flex";
    item.style.justifyContent = "center";
    item.style.alignItems = "center";

    let btn = document.createElement('button');
    btn.textContent = "Surprise ";
    item.before(btn);
}

    showbtn.addEventListener("dblclick", (evt) => {
    alert("Button clicked: " + evt.type);
    });

    showbtn.addEventListener("dblclick", (evt) => {
    document.body.style.backgroundColor = "black";
    });



//                   promise in JavaScript

let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("123");
    }, 2000);

});

    console.log("Wait for 2 seconds ......")
promise.then(result => {
    console.log(result);
});



//                    async functions in JavaScript

let url = '';

const getfact = async () => {

    let response = await fetch (url);
    console.log(response);
    let data =await response.json();
    console.log(data);  
};



//                    Objects in JavaScript

const obj = new Object();

obj.name = "Farhan";


console.log(obj["name"]);



//                     Functions in JavaScript

function add(a,b) {
    console.log(a + b);
    return a + b;
}

const result=add(2,3);

console.log(result);



//                     To get infinite number of arguments we can use rest parameter

function add(...num) {
    return num
}

const result=add(2,3,4,5);

console.log(result);



// Getting object in function

function getobj(obj) {
    console.log(obj);
}

const obj = {
    name: "Farhan",
    age: 22,
    city: "Lahore"
};

// getobj(obj);



//                  Getting object in function by defining it when calling the function

function getobj(obj){
    console.log(obj);
}

console.log(getobj({
    name: "Farhan",
    age: 22,
    city: "Lahore"
}));

// Arrow functions in JavaScript

const farhan = ()=> {
    console.log("Farhan");
}

farhan();

// implicit return in arrow functions

const farhan1 = ()=> console.log("Farhan");

farhan();


//          iffi in JavaScript ,they immediately invoke themselves or immediately execute themselves

(function() {
    console.log("iffi practice");
})();



// foreach loop in JavaScript

const arr = [1,2,3,4,5];

arr.forEach( (number)=> {
    console.log("Number: " + number);
})


// map function in JavaScript

const arr1 = [1,2,3,4,5];

const newArr = arr1.map( (number) => {
    return number * 2;
});




