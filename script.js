var acc = document.getElementsByClassName("question");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var plusIcon = this.querySelector(".icon-plus");
    var minusIcon = this.querySelector(".icon-minus");
    if (window.getComputedStyle(panel).display === "block") {
      panel.style.display = "none";
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      panel.style.display = "block";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
}
