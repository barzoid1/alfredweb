menu.onclick = () => {
    menu.classList.toggle('bx-x')
}
window.addEventListener("load", function() {
  const loader = document.querySelector('#loader')
  this.document.body.removeChild(loader)
})
