import {Route, Link, Routes, useLocation} from 'react-router-dom';
export const SideBar = ({ children,changeSeccion,items }) => {
  const location = useLocation()
  const values = items.map((val,i)=>
  <li key={i} onMouseOver={()=>{document.getElementsByClassName('icon-sidebar')[i].classList.add('animate-bounce')} }onMouseLeave={()=>{document.getElementsByClassName('icon-sidebar')[i].classList.remove('animate-bounce')}} onClick={()=>changeSeccion(i+1)}>
  <a
    
    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
  >
   <span className="icon-sidebar"> 
      {val.icono} 
   </span>
    <span  className="ml-3">{val.texto}</span>
  </a>
</li>
  );
  return (
    <>
     

      <aside
        id="default-sidebar"
        className=" w-full h-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
         <h1 className="text-center font-mono font-semibold text-lg bg-[#2187ab] text-white w-full">
                💼 Menu
         </h1>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium ">
           {values}
          </ul>
        </div>
      </aside>
    </>
  );
};
