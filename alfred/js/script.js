window.addEventListener("load", function() {
  const loader = document.querySelector('#loader')
  this.document.body.removeChild(loader)
})


document.addEventListener("DOMContentLoaded", function(){
  var myOffcanvas = document.getElementById('offcanvasDarkNavbar');
  var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
  document.getElementById("OpenMenu").addEventListener('click', function (e){
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
});


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}