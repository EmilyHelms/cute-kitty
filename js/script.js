var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

//console.log(button);
//console.log(cat);

// When user clicks on the button, function is triggered to show cat image
button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    //console.log("Yes");
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disappear");
  } else {
    //console.log("No");
    cat.classList.add("show");
    button.innerText = "Bye bye, kitty!";
    button.classList.remove("disappear");
  }
});
