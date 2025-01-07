function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pega a tag img
  const img = document.querySelector("#profile img")
  
  // substituir a imagem
  if(html.classList.contains("light")) {
    // se tive light toggleMode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt","Foto de Wesley, com um óculos de sol")
  } else {
    // se tiver sem light toggleMode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt","Foto de Wesley sorrindo, com camisa, com barba e fundo do setup.")

  }
}