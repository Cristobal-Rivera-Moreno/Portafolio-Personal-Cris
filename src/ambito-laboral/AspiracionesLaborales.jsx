
import { getString, StringId } from "../strings/strings";


export const AspiracionesLaborales = ({currLanguage}) =>{

    return (
        <>
             <h1 className="text-center font-mono font-semibold text-lg dark:bg-gray-900 text-white w-full">
             {getString(StringId.MSG_ID_8, currLanguage)}
              </h1>
              <p className="text-justify p-2">
                {getString(StringId.MSG_ID_12, currLanguage)}
              </p>
        
        </>
    );

}