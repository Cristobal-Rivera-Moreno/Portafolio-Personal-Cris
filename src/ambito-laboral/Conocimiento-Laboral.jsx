
const info = [
    {text:"C y C++",icon:'c++.png'},
    {text:"Java"   ,icon:'java.svg'},
    {text:"Python" ,icon:'python.png'},
    {text:"Javascript(incluyendo typescript) con su framework Angular y su libreria React JS"            ,icon:'javascript.png'},
    {text:"Entorno de desarrollo para JS Node JS",icon:'nodejs.png'},
    {text:"Golang",icon:'golang.png' },
    {text:"C#"    ,icon:'.net.png'},
    {text:"PHP y su framework Laravel",icon:'php.svg'},
    {text:"HTML y CSS",icon:'html5.png'},
    {text:"Sql Server,PostgreSQL y MongoDB",icon:'sql.png'},
    {text:"Arquitectura rest full",icon:'api.png'}

]

export const ConocimientoLaboral = ()=>{
    return (
        <>
           <h1 className="font-mono font-semibold text-lg dark:bg-gray-900 text-white w-full">
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
                                        {val.text} 
                                        {/* <img src={import.meta.env.VITE_PATH +val.icon +'?raw=true'} alt="" className="inline-block w-8 h-8 bg-black/30 rounded-full ml-2"/> */}
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