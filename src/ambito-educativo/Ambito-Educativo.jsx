import {useState} from 'react'
import { SideBar } from '../side-bar/SideBar';
import { ISCEducativo } from './ISC-Educativo';
export const AmbitoEducativo = () => {
  const [seccion,setSeccion] = useState(1);
  function changeSeccion(val){
    setSeccion(val);
    
  }
  const itemsSideBar = [
    { icono:'💻', texto:'Ingenieria en sistemas computacionales ISC.' },
    
  ] 
  return (
    <>
      <div
        id="indicators-carousel"
        className="relative p-6 w-full  
"
        datatime={"s"}
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="flex h-full  bg-blue-400/[0.25]">
            <div className="w-1/4 h-full bg-gray-800">
            <SideBar items={itemsSideBar} changeSeccion={changeSeccion}></SideBar>
            </div>
            {/* Here Info */}
            <div className="w-2/4 h-full bg-blue-100/[0.05]">
             
              {
                seccion === 1 ? <ISCEducativo></ISCEducativo>:0
              }
            </div>

            <div className="w-1/4 grid grid-cols-6 grid-rows-6 h-full  bg-lime-100/[0.25]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
