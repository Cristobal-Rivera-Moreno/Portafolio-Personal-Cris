
const info = [
    "C y C++",
    "Java",
    "Python",
    "Javascript(incluyendo typescript) con su framework Angular y su libreria React JS",
    "Entorno de desarrollo para JS Node JS",
    "Golang",
    "C#",
    "PHP y su framework Laravel",
    "HTML y CSS",
    "Sql Server,PostgreSQL y MongoDB",
    "Arquitectura rest full"

]

export const ConocimientoLaboral = ()=>{
    return (
        <>
           <h1 className="font-mono font-semibold text-lg bg-[#22d3ee]/50 text-white w-full">
             🧠 Conocimiento
            </h1>
        <div className="p-2">
          
             
                <table className="m-auto ">
                    <thead>
                        <tr>
                            <th>Tecnologias</th>
                        </tr>
                    </thead>
                    <tbody >
                        { 
                            info.map((val,i) => 
                                <tr key={i} className="border-2 border-cyan-400/80 ">
                                    <td>
                                        {val} 
                                        <img src={import.meta.env.VITE_PATH + 'java-icon.svg?raw=true'} alt="" className="inline-block w-8 h-8 bg-black/30 rounded-full ml-2"/>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>                                    

               
        
        
        </>
    );
}