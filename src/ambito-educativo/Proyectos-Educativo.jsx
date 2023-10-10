import { useState } from "react";

const proyectos = {
    animalitos:{
        title:'Animalitos a casa(Videojuego)',
        text: 'Proyecto orientado al aprendizaje de niños sobre animalitos y su habitat.',
        link:''
    },
    heroes:{
        title:'Heroes(comics)',
        text: 'Proyecto que muestra detalles relevantes sobre heroes de DC y marvel.',
        link: ''

    },
    pokedex:{
        title:'PokeDex',
        text: 'Proyecto que muestra detalles relevantes sobre pokemones extraidos de una API pública.',
        link: ''

    }  
}


export const ProyectosEducativo = ()=>{
    const [proySelected,setProySelected] = useState(0);
    return(
        <>

        </>



    );
}