
import './contenedor.css';

export const Contenedor = ({children})=>{
    

    return (
        <>
            
            <div id="indicators-carousel" className="relative p-6 w-full  
"  datatime={"s"}>
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div className="flex h-full bg-blue-400/[0.25]">
        <div className="w-1/4 h-full bg-red-300">

   


        </div>
        {/* Here Info */}
        <div className="w-2/4 h-full bg-blue-100/[0.05]">
        <h1 className='text-center font-mono font-semibold text-lg bg-gray-600 text-white w-full'>💼 Experiencia Laboral</h1>
        <h2 className='font-semibold font-serif'>Becario de desarrollo web con distintas tecnologias.</h2>
        <small className='block font-medium'>Feb-Dic 2023 Grupo Sinco</small>
        <p className='text-justify pl-16 pr-16'>FullStack.En mi estadia utilice tecnologias como Angular, C#, Laravel, J Query, javascript, PHP, .NET, MySql Server y Postgres.<br/>Participe en proyectos, complementados en conjunto con paqueterias de Aspel, relacionados con el control de producción </p>
            
        </div>
        
        <div className="w-1/4 grid grid-cols-6 grid-rows-6 h-full  bg-lime-100/[0.25]">
          
            <img src="src/assets/images/angular.png" className='w-10 inline-block col-start-2 col-span-1 rotate-12' alt="" />
            <img src="src/assets/images/css3.png" className='w-10 inline-block col-start-3 col-span-1 row-start-2 -rotate-12' a inline-blocklt="" />
            <img src="src/assets/images/html5.png" className='w-10 inline-block col-start-4 col-span-1 row-start-3 rotate-12' alt="" />
            <img src="src/assets/images/javascript.png" className='w-10 inline-block col-start-5 col-span-1 row-start-4 -rotate-12' alt="" />
            <img src="src/assets/images/php.svg" className='w-10 inline-block col-start-6 col-span-1 row-start-5 -rotate-12' alt="" />
          
          </div>  

        </div>
        </div>
       
      </div>

        
        
        </>

    );


}