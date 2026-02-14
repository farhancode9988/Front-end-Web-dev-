// function show() {

//     let item = document.querySelector("#div1");
//     item.innerText = "Working";

//     item.style.backgroundColor = "aquamarine";
//     item.style.display = "flex";
//     item.style.justifyContent = "center";
//     item.style.alignItems = "center";

//     let btn = document.createElement('button');
//     btn.textContent = "Surprise ";
//     item.before(btn);
// }

//     showbtn.addEventListener("dblclick", (evt) => {
//     alert("Button clicked: " + evt.type);
//     });

//     showbtn.addEventListener("dblclick", (evt) => {
//     document.body.style.backgroundColor = "black";
//     });


// let promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve("123");
//     }, 2000);

// });

//     console.log("Wait for 2 seconds ......")
// promise.then(result => {
//     console.log(result);
// });



let url = '';

const getfact = async () => {

    let response = await fetch (url);
    console.log(response);
    let data =await response.json();
    console.log(data);  



};


