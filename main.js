function onClickMenu() {
    var x = document.getElementById("nav-dropdown");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }