export const SideBar = ({ children,changeSeccion,items }) => {
  const values = items.map((val,i)=>
  <li key={i} onMouseOver={()=>{document.getElementsByClassName('icon')[i].classList.add('animate-bounce')} }onMouseLeave={()=>{document.getElementsByClassName('icon')[i].classList.remove('animate-bounce')}} onClick={()=>changeSeccion(i+1)}>
  <a
    href="#"
    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
  >
   <span className="icon"> 
      {val.icono}
   </span>
    <span className="ml-3">{val.texto}</span>
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
         <h1 className="text-center font-mono font-semibold text-lg bg-[#56dc45]/80 text-white w-full">
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
