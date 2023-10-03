import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link,useLocation } from "react-router-dom";

function handleSummary(ev){
  let a = document.createElement("a");
  let div = document.getElementById("pdfContainer");
  // a.setAttribute('target','_blanck')
  // let iframe = document.createElement("iframe");
  // iframe.setAttribute('src','src/assets/summary.pdf');
  // iframe.width = "80%";
  // iframe.height = "90%";
  
  // iframe.classList.add('absolute','z-50','m-auto')
  // a.appendChild(iframe)
  // div.appendChild(iframe);
  div.classList.toggle('hidden')
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function NavBar() {
  const location = useLocation();
  const [curNav,setCurNav] = useState(0);
  const navigation = [
  { name: "🗄 Ámbito laboral", href: "/Portafolio-Personal-Cris/ambito-laboral", current: false },
  { name: "🎒 Ámbito educativo", href: "/Portafolio-Personal-Cris/ambito-educativo", current: false },
  { name: "🧔 Ámbito personal", href: "/Portafolio-Personal-Cris/ambito-personal", current: false },
];
  if( location.pathname === navigation[0].href || location.pathname === "/Portafolio-Personal-Cris/" ){
    navigation[0].current = true;
  }else if( location.pathname === navigation[1].href ){
    navigation[1].current = true;
  }else{
    navigation[2].current = true;
  }
  if (window.Cypress) {
    // we are running in Cypress
    // so do something different here
    window.env = 'test'
  } else {
    // we are running in a regular ol' browser
  }
  return (
    
    <Disclosure as="nav" className="bg-gray-600">
      {({ open }) => (
        <>
        <div className="flex hidden w-full absolute z-50 justify-center" id="pdfContainer">
          <button className="w-10 h-10 rounded-full absolute right-0 top-5 bg-black text-green-400 animate-bounce hover:animate-none hover:top-0" onClick={handleSummary}><span className="animate-pulse">🗙</span></button>
          <iframe src={import.meta.env.VITE_PATH+"/summary_page.jpg?raw=true"} style={{width:"90vw", height:"100vh"}} >
          </iframe>
          </div>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative h-auto flex flex-col sm:flex-col sm:h-auto md:h-24 p-6 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center ">
                {/* Mobile menu button*/}
                
              </div>
              <div className="flex flex-1 flex-col justify-center sm:flex-row md:items-center md:justify-center items-stretch sm:justify-start">
                <div className="flex flex-col sm:flex-row flex-shrink-0 items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>
                  
                </div>
                <div className="sm:ml-6 sm:block">
                  <div className="flex flex-col space-x-4 sm:flex-col md:flex-row">
                    {navigation.map((item,i) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white "
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium "
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={(ev)=>{setCurNav(i)}}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inset-y-0 right-0 flex items-center pr-2 static inset-auto ml-6 pr-0 flex-col sm:flex-row">
                <h1>Cristobal Rivera Moreno.</h1>
                
               
                <h1 className="font-bold">Ingeniero en sistemas computacionales.</h1>
                <button
                  type="button"
                  className="ml-4 icon relative rounded-full hover:text-gray-300 hover:font-extrabold w-8 h-8 text-xl font-bold"
                  onClick={handleSummary}
                >
                  <span className="sr-only">View notifications</span>
                  {/* {<BellIcon className="h-6 w-6" aria-hidden="true" />} */}
                  <a href="#" className= "flex justify-center   icon rounded-full w-10 h-10 github">
                    <span className="text-xl font-bold ">🗎</span>
                  
                  <span className="tooltip">Curriculum</span>
                  </a>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={import.meta.env.VITE_PATH+'profile-modified.png?raw=true'}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
