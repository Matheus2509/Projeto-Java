function carregar(){
var msg = document.querySelector('#msg')
var img = document.querySelector('#foto')

var data = new Date()
var hora = data.getHours()
msg.innerHTML = `<h2>Agora são ${hora}<h2>`

if(hora >= 0 && hora <= 5){
    img.innerHTML =`<h3>Está de madrugada</h3>
    <img id="imagem" src="img/Madrugada.png" alt="foto do dia">`
    document.body.style.background = "black"
    
}
else if(hora >=6 && hora <= 12){
    img.innerHTML =`<h3>Está de manhã</h3>
    <img id="imagem" src="img/manhã.png" alt="foto do dia">`
    document.body.style.background = "#c57f2f"
}

else if(hora >=13 && hora <= 18){
    img.innerHTML =`<h3>Está de tarde</h3>
    <img id="imagem" src="img/tarde.png" alt="foto do dia">`
    document.body.style.background = "royalblue"
}

else{
    img.innerHTML =`<h3>Está de noite</h3>
    <img id="imagem" src="img/noite.png" alt="foto do dia">`
    document.body.style.background = "#1d241f"
}
}
