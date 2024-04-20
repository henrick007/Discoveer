function toggleMode() {
    //Condição para mudar entre modo light e dark
    const html = document.documentElement
   /* if(html.classList.contains('light')){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
*/
    html.classList.toggle("light")

//Condição para trocar a imagem de perfil, quando trocar entre os modos light e dark
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        img.setAttribute("src", "./assets/Avatar02.png")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
    }

}