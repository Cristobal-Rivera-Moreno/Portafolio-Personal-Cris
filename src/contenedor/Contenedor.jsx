import { useState } from "react";
import { Imagee } from "../Image-Comp/Imagee";
import { SideBar } from "../side-bar/SideBar";
import { CarouselProyecs } from "../carousel-proy/carouselProyects";
import { AspiracionesLaborales } from "../ambito-laboral/AspiracionesLaborales";
import { ConocimientoLaboral } from "../ambito-laboral/Conocimiento-Laboral";
import { ExperienciaLaboral } from "../ambito-laboral/Experiencia-Laboral";
import { HabilidadesLaborales } from "../ambito-laboral/Habilidades-Laborales";
import { ISCEducativo } from "../ambito-educativo/ISC-Educativo";
import { ProyectosEducativo } from "../ambito-educativo/Proyectos-Educativo";
import { HobbiesPersonal } from "../ambito-personal/Hobbies-Personal";
import "./contenedor.css";
import { SCOPES } from "../shared/const";
import { Udemy } from "../ambito-educativo/Udemy";
import { ValoresPersonal } from "../ambito-personal/Valores-Personal";
import { MasSobreMi } from "../ambito-personal/MasSobreMi";
const sectionsLab = [ <AspiracionesLaborales/>,<ExperienciaLaboral/>,<ConocimientoLaboral/>,<HabilidadesLaborales/> ]; 
  const sectionsEdu = [<ISCEducativo/>,<Udemy/>];
  const sectionsPer = [<HobbiesPersonal/>,<ValoresPersonal/>,<MasSobreMi/>];
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
];
export const Contenedor = ({ children,itemsSideBar,ambito }) => {
  const [seccion,setSeccion] = useState(1);
  
  function changeSeccion(val){
    setSeccion(val);
    
  }
  
  const sections = ambito == SCOPES.LABORAL ? sectionsLab : ambito == SCOPES.ACADEMICO ? sectionsEdu : sectionsPer;
  return (
    <>
    <div
      id="indicators-carousel"
      className="relative p-6  w-full "
      datatime={"s"}
    >
      <div className="relative cont  sm:h-auto overflow-hidden rounded-lg md:h-[26rem]">
        <div className="flex h-full phone bg-blue-400/[0.25]">
          <div className="w-1/4 h-full sub-cont">
            <SideBar items={itemsSideBar} changeSeccion={changeSeccion}></SideBar>
          </div>
          {/* Here Info */}
          <div className="w-2/4 h-full overflow-auto bg-[#2187ab]/30 sub-cont">
            {
              sections.map( (section,i )=>
                seccion == i+1 && <div key={i+1}>{section}</div>  
              )
            }
          </div>

          <div className="w-1/4 grid  h-96 sm:h-auto  bg-slate-800 sub-cont">
              <CarouselProyecs></CarouselProyecs>           
          
          </div>
        </div>
      </div>
    </div>
  </>
  );
};
