console.log("connected");

const btn = document.getElementsByClassName("btn")[0];
const modal = document.getElementsByClassName("modal")[0];
const crossBtn = document.getElementsByClassName("cross")[0];
const body = document.body;

//click event to open the modal window
btn.addEventListener("click", function () {
  modal.classList.remove("hide");
  body.classList.add("overlay");
  console.log("clicked");
});

//click event to close the modal window
crossBtn.addEventListener("click", function () {
  modal.classList.add("hide");
  body.classList.remove("overlay");
  console.log("clicked cross button");
});

document.addEventListener("keydown", function (event) {
    if(event.keyCode===27){
        modal.classList.add("hide");
        body.classList.remove("overlay");
        console.log("ESC key pressed");
    }
});
