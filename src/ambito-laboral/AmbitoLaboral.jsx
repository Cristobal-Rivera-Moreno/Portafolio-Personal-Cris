

import './ambitoLaboral.css'
import { useState } from "react";
import { Imagee } from "../Image-Comp/Imagee";
import { SideBar } from "../side-bar/SideBar";

import { ExperienciaLaboral } from "../ambito-laboral/Experiencia-Laboral";
import { ConocimientoLaboral } from "../ambito-laboral/Conocimiento-Laboral";
import { HabilidadesLaborales } from "../ambito-laboral/Habilidades-Laborales";
import { CarouselProyecs } from '../carousel-proy/carouselProyects';
import { AspiracionesLaborales } from './AspiracionesLaborales';
import { getString, StringId } from '../strings/strings';

export const AmbitoLaboral = ()=>{

  const [seccion,setSeccion] = useState(1);
  function changeSeccion(val){
    setSeccion(val);
    
  }
  
  const imgs = [

    {src:"src/assets/images/angular.png",class:"w-10 inline-block col-start-2 col-span-1 rotate-12"},
    {src:"src/assets/images/css3.png",class:"w-10 inline-block col-start-3 col-span-1 row-start-2 -rotate-12"},
    {src:"src/assets/images/html5.png",class:"w-10 inline-block col-start-4 col-span-1 row-start-3 rotate-12"},
    {src:"src/assets/images/javascript.png",class:"w-10 inline-block col-start-5 col-span-1 row-start-4 -rotate-12"},
    {src:"src/assets/images/php.svg",class:"w-10 inline-block col-start-6 col-span-1 row-start-5 -rotate-12"},
    {src:"src/assets/images/react.svg",class:"w-10 inline-block col-start-2 col-span-1 row-start-4  -rotate-12"},
    {src:"src/assets/images/jquery.png",class:"w-36 h-16 inline-block col-start-2 col-span-1 row-start-6  -rotate-12"},
    {src:"src/assets/images/postgresql.png",class:"w-36 h-16 inline-block col-start-3 col-span-1 row-start-5  rotate-12"},
    {src:"src/assets/images/sqlserver.svg",class:"w-36 h-16 inline-block col-start-1 col-span-1 row-start-2 -rotate-12"},
    {src:"src/assets/images/sql.png",class:"w-10 h-10 inline-block col-start-5 col-span-1 row-start-2 rotate-12"},
    {src:"src/assets/images/.net.jpg",class:"w-10 h-10 inline-block col-start-5 col-span-1 row-start-6 rotate-12"},
    {src:"src/assets/images/java-icon.svg",class:"w-10 h-10 inline-block col-start-1 col-span-1 row-start-5 rotate-12"},
    {src:"src/assets/images/golang.svg",class:"w-10 h-10 inline-block col-start-5 col-span-1 row-start-1 rotate-12"},
    
  ];
  return (
    <>
      <div
        id="indicators-carousel"
        className="relative p-6  w-full "
        datatime={"s"}
      >
        <div className="relative cont  sm:h-auto overflow-hidden rounded-lg md:h-96">
          <div className="flex h-full phone bg-blue-400/[0.25]">
            <div className="w-1/4 h-full bg-red-300 sub-cont">
              <SideBar items={itemsSideBar} changeSeccion={changeSeccion}></SideBar>
            </div>
            {/* Here Info */}
            <div className="w-2/4 h-full overflow-auto bg-[#2187ab]/30 sub-cont">
              {
                seccion == 1 ? <AspiracionesLaborales></AspiracionesLaborales>:
                seccion == 2 ? <ExperienciaLaboral></ExperienciaLaboral>:seccion == 3?<ConocimientoLaboral></ConocimientoLaboral>:<HabilidadesLaborales></HabilidadesLaborales>
              }
            </div>

            <div className="w-1/4 grid  h-96 sm:h-auto  bg-lime-100/[0.25] sub-cont">
              <CarouselProyecs/>
            
            </div>
          </div>
        </div>
      </div>
    </>

  );
}