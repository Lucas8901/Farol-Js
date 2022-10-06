const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0

const traffclght = (event)=>{
    turnOn[event.target.id]();
}

const changecolor = () =>{
    const colors = ['red','yellow','green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex()
}

const nextIndex = () =>{
    if(colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0;
    }
    
}

const turnOn ={
    'red': () => img.src = "./img/vermelho.png",
    'yellow': () => img.src = "./img/amarelo.png",
    'green': () => img.src = "./img/verde.png",
    'automatic': ()=> setInterval(changecolor,1000)

}

buttons.addEventListener('click', traffclght)