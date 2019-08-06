// Your code goes here
// ---------------------   MOUSE OVER(LEAVE)
let mouseOver = document.querySelectorAll('nav a');
// console.log(mouseOver)


for( var i=0; i < mouseOver.length; i++){
      mouseOver[i].style.backgroundColor = "red"
      // mouseOver[i].addEventListener('mouseover', (event) => {
      //       mouseOver[i].style.backgroundColor = "blue"
      // })
    }

// mouseOver.addEventListener('mouseover', (event) => {
//   mouseOver.style.backgroundColor = "blue"
//   event.stopPropagation();
//   alert("event propagation halted.");
// })

// mouseOver.addEventListener('mouseleave', (event) => {
//       mouseOver.style.backgroundColor = "red"
//     })

// --------------------     KEY DOWN

let keyDown = document.querySelector('header div h1');

window.addEventListener('keydown', (event) => {
      keyDown.style.backgroundColor = "blue"
    })

// ----------------------------  wheel

let img1 = document.querySelector('.img-content');

img1.addEventListener('wheel', (event) => {
      img1.style.transform = "skewY(30deg)";

  
})


// -------------Drag Drop

let dragDrop = document.querySelector('.img-fluid');

dragDrop.addEventListener('drag', (event) => {
     dragDrop.style.border = "10px  solid black";

})


 
//  ---------------------LOAD
window.addEventListener("load", (event) => {
alert("welcome");
})

// ----------------------- MOUSE LeAVE

dragDrop.addEventListener('mouseleave',  function(event){
      dragDrop.style.border ="15px dashed blue";

})



// ----------------------- dblclick


let dblClick = document.querySelector('.btn')

dblClick.addEventListener("dblclick", (event) => {
      dblClick.style.backgroundColor = "red"
})

// ----------------------- SELECT

let selection = document.querySelector(".text-content");

selection.addEventListener("select", (event) =>{
      alert("you")
})

// -------------------------Resize
window.addEventListener("resize", (event) => {
      alert("your connected to server")
})

// copy

// let copy1 = document.getElementsByTagName("body")

window.addEventListener("copy", (event) => {
      alert("dont steal form me")
})



//   PROPAGATION
let headerC = document.querySelector("header")
headerC.addEventListener('mouseover', (event) => {
      headerC.style.backgroundColor = "blue"
      event.stopPropagation();
      // alert("event propagation halted.");
    })

//     event.stopPropagation();
//   alert("event propagation halted.");





mouseOver.addEventListener('click', (event) => {
  event.preventDefault()
})