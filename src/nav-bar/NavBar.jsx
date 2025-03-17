import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link,useLocation } from "react-router-dom";
import { getString, StringId, getCurrentLanguage } from "../strings/strings";

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
export function NavBar({currLanguage, setCurrLanguage}) {
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
    
    <Disclosure as="nav" className="dark:bg-gray-900 fixed w-full top-0 z-50">
      {({ open }) => (
        <>
        <div className="flex hidden w-full absolute z-50 justify-center" id="pdfContainer">
          <button className="w-10 h-10 rounded-full absolute right-0 top-5 bg-black text-green-400 animate-bounce hover:animate-none hover:top-0" onClick={handleSummary}><span className="animate-pulse">🗙</span></button>
        
          </div>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

            <div className="relative h-auto flex flex-col sm:flex-col sm:h-auto md:h-24 p-6 justify-between">
            <div className="inset-y-0 right-0 flex flex-col pr-2 static inset-auto ml-6 pr-0 flex-col sm:flex-row justify-between">
              <div id="profile-picture" className="flex flex-col pr-6">
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
                  {/* <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  > */}
                    {/* <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                    </Menu.Items> */}
                  {/* </Transition> */}
                </Menu></div>
                <div className="name flex flex-col m-auto sm:flex-row" id="name">
                  <h1>{getString(StringId.MSG_ID_1, currLanguage)}</h1>
                
                  </div>
               
                <button
                  type="button"
                  className="flex  relative rounded-full hover:text-gray-300 hover:font-extrabold text-xl ">
                    
                  {/* {<BellIcon className="h-6 w-6" aria-hidden="true" />} */}
                  <a href="https://drive.google.com/file/d/12rTGsu3rq7K3hngF33QCMgdy305ZT9Gh/view?usp=sharing" target="_blanck" className= "flex justify-center items-center rounded-full">
                    <span className="text-xl flex">CV
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>

                    </span>
                  
                  </a>
                </button>
                <div className="language flex">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex px-2 rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open Language Settings</span>

                      <div className="flex">
                        
                        <h1>{ getCurrentLanguage() == "spanish" ? getString(StringId.MSG_ID_57, currLanguage) : getString(StringId.MSG_ID_56, currLanguage)}</h1>
                        <div className="flex items-end">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-4 h-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                        </div>
                      </div>
                      
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
                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-900 py-1 shadow-lg ring-1 text-white ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={classNames(
                              active ? "bg-gray-700" : "",
                              "block px-4 py-2 text-sm text-white cursor-pointer"
                            )}
                          onClick={() =>  {
                            localStorage.setItem("language", "english") 
                            setCurrLanguage('english')
                            }
                          }>
                            {getString(StringId.MSG_ID_56, currLanguage)}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={classNames(
                              active ? "bg-gray-700" : "",
                              "block px-4 py-2 text-sm text-white cursor-pointer"
                            )}
                            onClick={() => {
                              localStorage.setItem("language", "spanish")
                              setCurrLanguage('spanish')
                            }

                            }
                          >
                            {getString(StringId.MSG_ID_57, currLanguage)}
                          </a>
                        )}
                      </Menu.Item>
                    
                    </Menu.Items> 
                  </Transition> 
                </Menu>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                    </svg>
                </div>

                {/* Profile dropdown */}
               
              </div>
              <div className="absolute inset-y-0 left-0 flex  ">
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
                            ? "hover:bg-gray-700 bg-gray-900 text-white "
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
                      ? "bg-gray-900 text-white "
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
