menu.onclick = () => {
    menu.classList.toggle('bx-x')
}
window.addEventListener("load", function() {
    var loader = document.querySelector('#loader')
    loader.parentNode.removeChild(loader)
  })
