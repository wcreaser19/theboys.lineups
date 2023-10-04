function menuOpen() {
  document.getElementById("mySidenav").style.width = "250px";
}

function menuClose() {
  document.getElementById("mySidenav").style.width = "0px";
}

function dropdownFunction(dropdownButton, i) {
  dropdownButton.classList.toggle("active");
    var dropdownContent = dropdownButton.nextElementSibling;
    if (dropdownContent.style.display == "inline-block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "inline-block";
      for (let j = 0; j < dropdown.length; j++) {
        if (j != i) {
          dropdown[j].classList.remove("active");
          dropdown[j].nextElementSibling.style.display = "none";
        }
      }
    }
}

var dropdown = document.getElementsByClassName("dropdown-btn");
for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {dropdownFunction(dropdown[i], i);});
}




