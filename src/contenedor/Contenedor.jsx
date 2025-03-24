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
import { getString, StringId } from "../strings/strings";
import { NavBar } from "../nav-bar/NavBar";

const imgs = [
  {
    src: "src/assets/images/angular.png",
    class: "w-10 inline-block col-start-2 col-span-1 rotate-12",
  },
  {
    src: "src/assets/images/css3.png",
    class: "w-10 inline-block col-start-3 col-span-1 row-start-2 -rotate-12",
  },
  {
    src: "src/assets/images/html5.png",
    class: "w-10 inline-block col-start-4 col-span-1 row-start-3 rotate-12",
  },
  {
    src: "src/assets/images/javascript.png",
    class: "w-10 inline-block col-start-5 col-span-1 row-start-4 -rotate-12",
  },
  {
    src: "src/assets/images/php.svg",
    class: "w-10 inline-block col-start-6 col-span-1 row-start-5 -rotate-12",
  },
  {
    src: "src/assets/images/react.svg",
    class: "w-10 inline-block col-start-2 col-span-1 row-start-4  -rotate-12",
  },
  {
    src: "src/assets/images/jquery.png",
    class:
      "w-36 h-16 inline-block col-start-2 col-span-1 row-start-6  -rotate-12",
  },
  {
    src: "src/assets/images/postgresql.png",
    class:
      "w-36 h-16 inline-block col-start-3 col-span-1 row-start-5  rotate-12",
  },
  {
    src: "src/assets/images/sqlserver.svg",
    class:
      "w-36 h-16 inline-block col-start-1 col-span-1 row-start-2 -rotate-12",
  },
  {
    src: "src/assets/images/sql.png",
    class:
      "w-10 h-10 inline-block col-start-5 col-span-1 row-start-2 rotate-12",
  },
  {
    src: "src/assets/images/.net.jpg",
    class:
      "w-10 h-10 inline-block col-start-5 col-span-1 row-start-6 rotate-12",
  },
];
export const Contenedor = ({
  children,
  itemsSideBar,
  ambito,
  currLanguage,
}) => {
  const [seccion, setSeccion] = useState(1);
  console.log("CUrr Contenedor " + currLanguage)
  const sectionsLab = [
    {
      component: <AspiracionesLaborales currLanguage={currLanguage} />,
      title: StringId.MSG_ID_8,
      icon: '📈'
    },
    { component: <ExperienciaLaboral currLanguage={currLanguage}/>, title: StringId.MSG_ID_6, icon: '💼' },
    { component: <ConocimientoLaboral currLanguage={currLanguage}/>, title: StringId.MSG_ID_10, icon: '🧠' },
    { component: <HabilidadesLaborales currLanguage={currLanguage}/>, title: StringId.MSG_ID_11, icon: '🛠' },
  ];
  const sectionsEdu = [
    { component: <ISCEducativo currLanguage = {currLanguage}/>, title: StringId.MSG_ID_64, icon: '💻' },
    { component: <Udemy currLanguage = {currLanguage}/>, title: StringId.MSG_ID_65, icon: '💻' },
  ];
  const sectionsPer = [
    { component: <HobbiesPersonal currLanguage = {currLanguage} />, title: StringId.MSG_ID_74, icon: '💫' },
    { component: <ValoresPersonal currLanguage = {currLanguage} />, title: StringId.MSG_ID_75, icon: '💭' },
    { component: <MasSobreMi currLanguage = {currLanguage} />, title: StringId.MSG_ID_76, icon: '🧔' },
  ];
  function changeSeccion(val) {
    setSeccion(val);
  }

  const sections =
    ambito == SCOPES.LABORAL
      ? sectionsLab
      : ambito == SCOPES.ACADEMICO
      ? sectionsEdu
      : sectionsPer;
  return (
    <>
      <div
        id="indicators-carousel"
        className="relative p-6 w-full mt-32"
        datatime={"s"}
      >
        <div className="relative cont sm:h-auto overflow-hidden rounded-lg md:h-[26rem]">
          <div className="flex h-full phone bg-blue-400/[0.25]">
            <div className="w-1/4 h-full sub-cont">
              <SideBar
                items={itemsSideBar}
                changeSeccion={changeSeccion}
                currLanguage={currLanguage}
              ></SideBar>
            </div>
            {/* Here Info */}
            <div className="flex flex-col w-2/4 h-full overflow-auto dark:bg-gray-900 sub-cont">
              {sections.map(
                (section, i) =>
                  seccion == i + 1 && (
                    <div className="flex flex-col" key={i + 1}>
                      <h1 className="sticky top-0 border-b-2 border-white text-center font-mono font-semibold text-lg dark:bg-gray-900 text-white w-full">
                       {section.icon} {getString(section.title, currLanguage)}
                      </h1>
                      {section.component}
                    </div>
                  )
              )}
            </div>

            <div className="w-1/4 grid  h-96 sm:h-auto  bg-slate-800 sub-cont">
              <CarouselProyecs currLanguage={currLanguage}></CarouselProyecs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
