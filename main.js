/* Botão voltar para o top */
const iconButton = document.querySelector('.icon')

function icon() {
  if (window.scrollY >= 50) {
    iconButton.classList.add('show')
  } else {
    iconButton.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  icon()
})
