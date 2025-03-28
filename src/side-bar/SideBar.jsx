import {Route, Link, Routes, useLocation} from 'react-router-dom';
import { getString, StringId } from '../strings/strings';
import { useEffect } from 'react';
export const SideBar = ({ children,changeSeccion,items, currLanguage }) => {
  const location = useLocation()
  

const loadValues = () => {
  return items.map((val,i)=>
    <li key={i} onMouseOver={()=>{document.getElementsByClassName('icon-sidebar')[i].classList.add('animate-bounce')} }onMouseLeave={()=>{document.getElementsByClassName('icon-sidebar')[i].classList.remove('animate-bounce')}} onClick={()=>changeSeccion(i+1)}>
    <a
      
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
    >
     <span className="icon-sidebar"> 
        {val.icono} 
     </span>
      <span  className="ml-1">{val.texto}</span>
    </a>
  </li>
  )
}
var values = loadValues()

useEffect(() => {
  values = loadValues()
}, [currLanguage])
  return (
    <>
      <aside
        id="default-sidebar"
        className=" w-full h-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
         <h1 className="text-center font-mono font-semibold text-lg dark:bg-gray-900 text-white w-full border-b-2 border-white">
                💼 {getString(StringId.MSG_ID_5, currLanguage)}
         </h1>
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#1c2230]">
          <ul className="space-y-2 font-medium ">
           {values}
          </ul>
        </div>
      </aside>
    </>
  );
};
