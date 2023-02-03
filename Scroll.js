function changeBg(){
  var navbar = document.getElementById('navbar');
  var scrollValue = window.scrollY;
  if(scrollValue < 300){
    navbar.classList.remove('navColor');
  } else {
    navbar.classList.add('navColor');
  }
}

window.addEventListener('scroll', changeBg);