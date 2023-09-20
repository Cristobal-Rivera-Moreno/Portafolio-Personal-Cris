
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
                <div className="picture bg-blue-300 h-1/4 w-full">
                    <div className=""></div>
                </div>
                <footer>
                    desc
                </footer>
            </main>
        </>
    );
}