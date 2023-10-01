import { HobbiesPersonal } from "./Hobbies-Personal";
import { useState } from "react";
import { SideBar } from "../side-bar/SideBar";
import { CarouselProyecs } from "../carousel-proy/carouselProyects";
export const itemsSideBar = [
  { icono:'💫', texto:'Pasatiempos' },
  { icono:'💭', texto:'Valores' },
  { icono:'🧔' , texto:'Más sobre mi'}
] 
export const AmbitoPersonal = () => {
  
  const [seccion,setSeccion] = useState(1);
  function changeSeccion(val){
    setSeccion(val);
    
  }
  return (
    <>
      <div
        id="indicators-carousel"
        className="relative p-6 w-full "
        datatime={"s"}
      >
         <div className="relative cont h-56 overflow-hidden rounded-lg md:h-96">
          <div className="flex h-full phone bg-blue-400/[0.25]">
            <div className="w-1/4 h-full bg-red-300 sub-cont">
            <SideBar items={itemsSideBar} changeSeccion={changeSeccion}></SideBar>
            </div>
            {/* Here Info */}
            <div className="w-2/4 h-full bg-blue-100/[0.05] sub-cont">
              
              {
                seccion == 1 ? <HobbiesPersonal></HobbiesPersonal>:0
              }
            </div>

            <div className="w-1/4 grid  h-full  bg-lime-100/[0.25] sub-cont">
              <CarouselProyecs/>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
