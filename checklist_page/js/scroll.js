var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("h1").style.top = "0";
  } else {
    document.getElementById("h1").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}