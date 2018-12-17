const clap = new Audio('sounds/clap.wav');
const hihat = new Audio('sounds/hihat.wav');
const kick = new Audio('sounds/kick.wav');
const openhat = new Audio('sounds/openhat.wav');
const boom = new Audio('sounds/boom.wav');
const ride =new Audio('sounds/ride.wav');
const snare = new Audio('sounds/snare.wav');
const tom = new Audio('sounds/tom.wav');
const tink = new Audio('sounds/tink.wav');
const foghorn = new Audio('sounds/foghorn.wav');

const clapc = document.getElementById('clap');
const hihatc = document.getElementById('hihat');
const kickc = document.getElementById('kick');
const openhatc = document.getElementById('openhat');
const boomc = document.getElementById('boom');
const ridec = document.getElementById('ride');
const snarec = document.getElementById('snare');
const tomc = document.getElementById('tom');
const tinkc = document.getElementById('tink');



// Play drum by keyboard press
clapc.addEventListener('click', ()=>{
    clap.play();
    clap.currentTime=0;
})
hihatc.addEventListener('click', ()=>{
    hihat.play();
    hihat.currentTime = 0;
})
kickc.addEventListener('click', ()=>{
    kick.play();
    kick.currentTime=0; 
})
openhatc.addEventListener('click', ()=>{
    openhat.play();
    openhat.currentTime=0; 
})
boomc.addEventListener('click', ()=>{
    boom.play();
    boom.currentTime=0; 
})
ridec.addEventListener('click', ()=>{
    ride.play();
    ride.currentTime=0
})
snarec.addEventListener('click', ()=>{
    snare.play();
    snare.currentTime=0; 
})
tomc.addEventListener('click', ()=>{
    tom.play();
    tom.currentTime=0; 
})
tinkc.addEventListener('click', ()=>{
    tink.play();
    tink.currentTime=0; 
})
// Play music by mouse click


document.addEventListener('keydown', function(event){
    if (event.code == 'KeyA'){
        clap.play();
        clap.currentTime=0;
    }else if(event.code == 'KeyS'){
        hihat.play(); 
        hihat.currentTime=0; 
    }else if(event.code == 'KeyD'){
        kick.play();
        kick.currentTime=0; 
    }else if(event.code == 'KeyF'){
        openhat.play();
        openhat.currentTime=0; 
    }else if(event.code == 'KeyG'){
        boom.play();
        boom.currentTime=0; 
    }else if(event.code == 'KeyH'){
        ride.play();
        ride.currentTime=0; 
    }else if(event.code == 'KeyJ'){
        snare.play();
        snare.currentTime=0; 
    }else if(event.code == 'KeyK'){
        tom.play();
        tom.currentTime=0; 
    }else if(event.code == 'KeyL'){
        tink.play();
        tink.currentTime=0; 
    }else foghorn.play();   
})