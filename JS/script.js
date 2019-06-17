
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.paddingTop = "16px";
    document.getElementById("navbar").style.paddingBottom = "16px";
    document.getElementById("logo").style.fontSize = "22px";
    document.getElementById("logo").style.color = "#38aed0";
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0)";
  } else {
    document.getElementById("navbar").style.paddingTop = "25px";
    document.getElementById("navbar").style.paddingBottom = "25px";
    document.getElementById("logo").style.fontSize = "30px";
    document.getElementById("logo").style.color = "#444";
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0)";
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mobile-navtop").style.marginLeft = "250px";
  document.getElementById("mobile-logo").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mobile-navtop").style.marginLeft = "0";
  document.getElementById("mobile-logo").style.display = "block";
}
