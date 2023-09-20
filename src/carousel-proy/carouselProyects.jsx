
const arrayProys = [
    {
        title : 'Pokedex',
        text : 'Aplicación realizada con React JS y tailwind como framework css, consumiendo API de un servicio web.',
        img : ''
    },
    {
        title : 'Animalitos a casa',
        text : 'Aplicación realizada con HTML, css y javascript con fines educativos, destinada a niños.',
        img : ''
    },
    {
        title : 'Heroes',
        text : 'Aplicación realizada con Angular. Su finalidad es brindar información relevante sobre distintos heroes de el universo Mervel y DC.',
        img : ''
    }

]

export const CarouselProyecs = () =>{
    return (
        <>
                <main>
                <header>
                    <h1 className="text-center font-bold ">Proyectos realizados</h1>
                </header>
                <div className="carousel relative bg-blue-300/30 h-3/4 w-full">
                    <button className=" absolute z-50 top-1/2 left-2 w-8 h-8 rounded-full bg-gray-400/50 text-white text-bold text-xl hover:scale-110 hover:font-black border-2 border-solid border-cyan-400 hover:shadow-lg hover:w-10 hover:h-10 hover:transition-all hover:translate-x-2">
                        &#60;
                    </button>
                    <button className="absolute z-50 top-1/2 right-2 w-8 h-8 rounded-full bg-gray-400/50 text-white text-bold text-xl hover:scale-110 hover:font-black border-2 border-solid border-cyan-400 hover:shadow-lg hover:w-10 hover:h-10 hover:transition-all hover:-translate-x-2">
                        &#62;
                    </button>
                    <div className="absolute top-1/4">
                        <img src="src/assets/images/proy_1.gif" className="w-full h-full " alt="" />
                    </div>
                    <div className="picture">
                        <img src="src/assets/react.svg" className="hidden w-full h-full" alt="" />
                    </div>
                    <div className="picture">
                        <img src="src/assets/react.svg" className="hidden w-full h-full" alt="" />
                    </div>
                    
                    
                </div>
                <footer>
                    desc
                </footer>
            </main>
        </>
    );
}