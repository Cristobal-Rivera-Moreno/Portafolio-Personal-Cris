


import { useEffect } from 'react';
import './carouselProyects.css'
import { getString, StringId } from '../strings/strings';
const arrayProys = [
    
    {
        title : 'Animalitos a casa',
        text : 'Aplicación realizada con HTML, css y javascript con fines educativos, destinada a niños.',
        img : '',
        link:'https://programacionweb-uaa.github.io/MiniProyecto-Tecnologias-web-/Proyecto/index.html'
    },
    {
        title : 'Heroes',
        text : 'Aplicación hecha con Angular. Su finalidad es brindar información relevante sobre distintos heroes de el universo Mervel y DC.',
        img : '',
        link:'https://tecnologias-web-uaa.github.io/Mini-Proyecto-2-Tecnologias-Web/home'
    },
    {
        title : 'Pokedex',
        text : 'Aplicación realizada con React JS y tailwind como framework css, consumiendo API de un servicio web.',
        img : '',
        link:'https://cristobal-rivera-moreno.github.io/Poke-api/'
    },
    {
        title : 'Smart Tech App',
        text : 'Aplicación realizada con React JS y tailwind como framework css, consumiendo API de un servicio web.',
        img : '',
        link:'https://cristobal-rivera-moreno.github.io/Poke-api/'
    },
    {
        title : 'Home Owner',
        text : 'Aplicación realizada con React JS y tailwind como framework css, consumiendo API de un servicio web.',
        img : '',
        link:'https://cristobal-rivera-moreno.github.io/Poke-api/'
    },
    {
        title : 'Prucer',
        text : 'Aplicación realizada con React JS y tailwind como framework css, consumiendo API de un servicio web.',
        img : '',
        link:'https://www.prucer.com.mx/'
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
let link
function carouselEvents(currLanguage){
    previousButton = document.getElementById('previous');
    link           = document.getElementById('link'); 
    nextButton     = document.getElementById('next');
    wallpaper      = document.getElementById('wallpaper');
    carousel       = document.getElementById('carousel');
    childs         = carousel.querySelectorAll('div');
    proyectTitle   = document.getElementById('proyect-title');
    description    = document.getElementById('description');
    arrayProys[0].title = getString(StringId.MSG_ID_59, currLanguage)
    arrayProys[0].text = getString(StringId.MSG_ID_62, currLanguage)
    arrayProys[1].title = getString(StringId.MSG_ID_58, currLanguage)
    arrayProys[1].text = getString(StringId.MSG_ID_61, currLanguage)
    arrayProys[2].title = getString(StringId.MSG_ID_60, currLanguage)
    arrayProys[2].text = getString(StringId.MSG_ID_63, currLanguage)
    arrayProys[3].title = getString(StringId.MSG_ID_77, currLanguage)
    arrayProys[3].text = getString(StringId.MSG_ID_78, currLanguage)
    arrayProys[4].title = getString(StringId.MSG_ID_79, currLanguage)
    arrayProys[4].text = getString(StringId.MSG_ID_80, currLanguage)
    arrayProys[5].title = getString(StringId.MSG_ID_81, currLanguage)
    arrayProys[5].text = getString(StringId.MSG_ID_82, currLanguage)
    
    console.log("CUrr lan" + currLanguage)

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
link.setAttribute('href',arrayProys[i].link)
 
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
    link.setAttribute('href',arrayProys[i].link)
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

export const CarouselProyecs = ({currLanguage}) =>{
    
    console.log("CUrr " + currLanguage)

    useEffect(()=>{
        carouselEvents(currLanguage);
        console.log("CUrr ev " + currLanguage)
    },[currLanguage]);

    return (
        <>
                <main className='relative overflow-auto'>
                <header className='sticky top-0 z-40'>
                    <h1 className=" text-center font-mono font-semibold text-lg dark:bg-gray-900 border-b-2 border-white">{getString(StringId.MSG_ID_7, currLanguage)}</h1>
                </header>
                <div id='carousel' className="carousel relative h-3/4 w-full overflow-hidden" >
                    <h3 className='absolute text-white top-2 z-30 text-center w-full font-bold italic ' id='proyect-title'>title</h3>
                    <section className="relative">
                        <a id="link" href={arrayProys[0].link} target='_blanck' className='absolute z-30 top-10 bg-white/50 w-8 h-8 rounded-full icon facebook animate-bounce'>👀
                        <span className='tooltip left-0'>Visitar</span></a>
                      
                    </section>
                    <img id='wallpaper' src={import.meta.env.VITE_PATH + '/Animalitos.gif?raw=true'} className='fondo absolute h-full' alt="" />
                    <button id='previous' className=" absolute z-40 top-1/2 left-2 w-8 h-8 rounded-full bg-black text-green-400 text-bold text-xl hover:scale-110 hover:font-black border-2 border-solid border-slate-400 hover:shadow-lg hover:w-10 hover:h-10 hover:transition-all hover:translate-x-2" onClick={handlePreviousButton}>
                        &#60;
                    </button>
                    <button id='next' className="absolute z-40 top-1/2 right-2 w-8 h-8 rounded-full bg-black text-green-400 text-bold text-xl hover:scale-110 hover:font-black border-2 border-solid border-slate-400 hover:shadow-lg hover:w-10 hover:h-10 hover:transition-all hover:-translate-x-2" onClick={handleNextButton}>
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
                    <div className="hidden picture absolute top-1/4 z-10" onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={import.meta.env.VITE_PATH + '/pokemon.gif?raw=true'} className=" w-full h-full" alt="" />
                    </div>
                    <div className="hidden picture absolute top-1/4 z-10" onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={import.meta.env.VITE_PATH + '/pokemon.gif?raw=true'} className=" w-full h-full" alt="" />
                    </div>
                    <div className="hidden picture absolute top-1/4 z-10" onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd}>
                        <img src={'src/assets/images/prucer.gif'} className=" w-full h-full" alt="" />
                    </div>
                    
                </div>
                <footer className='bg-slate-800 '>
                    <p id='description' className='text-justify p-2'>
                        desc
                    </p>
                </footer>
            </main>
        </>
    );
}