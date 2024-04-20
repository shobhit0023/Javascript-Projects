const height=document.getElementById("height");
const weight=document.getElementById("weight");
const btn = document.getElementById("btn");

let h,w;
height.addEventListener("input",function(e){
     h=e.target.value;

    
})

weight.addEventListener("input",function(e){
     w=e.target.value;
})

// let BMI=(w/(h*h)*10000).toFixed(2);
btn.addEventListener("click",function(){

    let BMI=(w/(h*h)*10000).toFixed(2);
     alert("Your BMI is "+BMI);
})

// document.addEventListener("DOMContentLoaded", function() {
//     console.log("Script loaded");

//     const height = document.getElementById("height");
//     const weight = document.getElementById("weight");
//     const btn = document.getElementById("btn");

//     console.log(height, weight, btn); // Check if elements are found

//     let h, w;

//     height.addEventListener("input", function(e) {
//         console.log("Height input changed");
//         h = e.target.value;
//         console.log("Height:", h); // Log the height value
//     });

//     weight.addEventListener("input", function(e) {
//         console.log("Weight input changed");
//         w = e.target.value;
//         console.log("Weight:", w); // Log the weight value
//     });

//     btn.addEventListener("click", function() {
//         console.log("Button clicked");
//         console.log("Height:", h, "Weight:", w); // Log height and weight when button is clicked
//         let BMI = (w / (h * h) * 10000).toFixed(2);
//         window.alert("Your BMI is " + BMI);
//     });
// });


