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