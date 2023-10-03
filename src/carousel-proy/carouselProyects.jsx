


import { useEffect } from 'react';
import './carouselProyects.css'
const arrayProys = [
    
    {
        title : 'Animalitos a casa',
        text : 'Aplicación realizada con HTML, css y javascript con fines educativos, destinada a niños.',
        img : ''
    },
    {
        title : 'Heroes',
        text : 'Aplicación realizada con Angular. Su finalidad es brindar información relevante sobre distintos heroes de el universo Mervel y DC.',
        img : ''
    },
    {
        title : 'Pokedex',
        text : 'Aplicación realizada con React JS y tailwind como framework css, consumiendo API de un servicio web.',
        img : ''
    }

]

let i              = 0;
let previousButton
let nextButton  
let wallpaper    

let carousel     
let childs       
let proyectTitle 
let description  
let firstChild 
let lastChild  
function carouselEvents(){
    previousButton = document.getElementById('previous');
    nextButton     = document.getElementById('next');
    wallpaper      = document.getElementById('wallpaper');
    carousel       = document.getElementById('carousel');
    childs         = carousel.querySelectorAll('div');
    proyectTitle   = document.getElementById('proyect-title');
    description    = document.getElementById('description');
    firstChild = childs[ 0 ];
    lastChild  = childs[ childs.length-1 ];
    // let time = setInterval(()=>{
    //     nextButton.click();
    // },5000)
    proyectTitle.innerHTML = arrayProys[i].title;
    description.innerHTML = arrayProys[i].text;
    nextButton.addEventListener('click',(ev)=>{
        });
    previousButton.addEventListener('click',(ev)=>{
       // clearInterval(time);
       
       
    });

}

function handleNextButton(ev){
//clearInterval(time);
let activeChild = carousel.querySelector('div:not(.hidden)');
activeChild.classList.add('hidden');
let sibling = activeChild.nextElementSibling;
if( sibling ){
 activeChild.nextElementSibling.classList.remove('hidden'); 
 wallpaper.setAttribute('src',activeChild.nextElementSibling.firstElementChild.getAttribute('src')); 
 i+=1;
}else{
 firstChild.classList.remove('hidden');
 wallpaper.setAttribute('src',firstChild.firstChild.getAttribute('src'));
 i = 0;
}

proyectTitle.innerHTML = arrayProys[i].title;
description.innerHTML = arrayProys[i].text;

}
function handlePreviousButton(ev){
    let activeChild = carousel.querySelector('div:not(.hidden)');
    activeChild.classList.add('hidden');
    let sibling = activeChild.previousElementSibling;
    if( sibling.classList.contains('picture') ){
     
     sibling.classList.remove('hidden'); 
     wallpaper.setAttribute('src',sibling.firstChild.getAttribute('src'));
     i-=1;
    }else{
     lastChild.classList.remove('hidden');
     wallpaper.setAttribute('src',lastChild.firstChild.getAttribute('src'));
     i = arrayProys.length-1;
     
 }
    proyectTitle.innerHTML = arrayProys[i].title;
    description.innerHTML = arrayProys[i].text; 
 
}
var touchStartX = 0;
var touchEndX   = 0;
function touchStart(ev){
    touchStartX = ev.touches[0].clientX;
}
function touchMove(ev){
    touchEndX = ev.touches[0].clientX;
    console.log(JSON.stringify(touchEndX))
}
function touchEnd(ev){
    
    var resX = touchEndX - touchStartX;
    if( resX < 0 ){
        nextButton.click();
    }else if ( resX > 0 ){
        previousButton.click();
    }
}

export const CarouselProyecs = () =>{
    
    useEffect(()=>{
        carouselEvents();
    },[]);

    return (
        <>
                <main className=''>
                <header>
                    <h1 className="text-center font-mono font-semibold text-lg bg-[#2187ab]">Proyectos realizados</h1>
                </header>
                <div id='carousel' className="carousel relative h-3/4 w-full overflow-hidden" >
                    <h3 className='absolute text-white top-2 z-30 text-center w-full font-bold italic ' id='proyect-title'>title</h3>
                    <img id='wallpaper' src={import.meta.env.VITE_PATH + '/Animalitos.gif?raw=true'} className='fondo absolute h-full' alt="" />
                    <button id='previous' className=" absolute z-40 top-1/2 left-2 w-8 h-8 rounded-full bg-gray-400/50 text-white text-bold text-xl hover:scale-110 hover:font-black border-2 border-solid border-cyan-400 hover:shadow-lg hover:w-10 hover:h-10 hover:transition-all hover:translate-x-2" onClick={handlePreviousButton}>
                        &#60;
                    </button>
                    <button id='next' className="absolute z-40 top-1/2 right-2 w-8 h-8 rounded-full bg-gray-400/50 text-white text-bold text-xl hover:scale-110 hover:font-black border-2 border-solid border-cyan-400 hover:shadow-lg hover:w-10 hover:h-10 hover:transition-all hover:-translate-x-2" onClick={handleNextButton}>
                        &#62;
                    </button>
                    <div className="picture absolute top-1/4 z-10" onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={import.meta.env.VITE_PATH + '/Animalitos.gif?raw=true'} alt="" />
                    </div>
                  
                    <div className="hidden picture absolute top-1/4 z-10" onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={import.meta.env.VITE_PATH + '/heroes.gif?raw=true'} className=" w-full h-full" alt="" />
                    </div>
                    <div className="hidden picture absolute top-1/4 z-10" onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={import.meta.env.VITE_PATH + '/pokemon.gif?raw=true'} className=" w-full h-full" alt="" />
                    </div>
                    
                </div>
                <footer className=''>
                    <p id='description'>
                        desc
                    </p>
                </footer>
            </main>
        </>
    );
}