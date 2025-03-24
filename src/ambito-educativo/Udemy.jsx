import { getString, StringId } from "../strings/strings"


export const Udemy = ({children, currLanguage})=>{
    return (
        <>
            <main>
                <header>
                <h1 className="font-semibold text-lg font-mono dark:bg-gray-900">
                     {getString(StringId.MSG_ID_69, currLanguage)} 
                </h1>
                </header>
                <section className="p-2">
                    <div className="text-left course relative">
                        <h2 className="inline-block">
                            {getString(StringId.MSG_ID_70, currLanguage)}
                        </h2>&nbsp;&nbsp;&nbsp;
                        <a target="_blanck" className="inline-block absolute icon github   rounded-full" href="https://drive.google.com/file/d/1MAFQ8L33LJsCxpIIMvYjbrVbsxtqj19q/view?usp=sharing">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <span className="tooltip z-50">{getString(StringId.MSG_ID_71, currLanguage)}</span>
                        </a>
                        <br></br>
                        <h2 className="inline-block">
                            {getString(StringId.MSG_ID_72, currLanguage)}
                        </h2>&nbsp;&nbsp;&nbsp;
                        <a target="_blanck" className="inline-block absolute icon github   rounded-full" href="https://drive.google.com/file/d/1-Rn6Hn4GHbq7Frr8lwj95Y4CLswAxV6x/view?usp=sharing">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <span className="tooltip z-50">{getString(StringId.MSG_ID_71, currLanguage)}</span>
                        </a>
                        <br></br>
                        <h2 className="inline-block">
                            {getString(StringId.MSG_ID_73, currLanguage)}
                        </h2>&nbsp;&nbsp;&nbsp;
                        <a target="_blanck" className="inline-block absolute icon github   rounded-full" href="https://drive.google.com/file/d/1-DjUcLjkVAP9hMyH8fPxS1rMkHgnTNmR/view?usp=sharing">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        <span className="tooltip z-50">{getString(StringId.MSG_ID_71, currLanguage)}</span>
                        </a>

                    </div>
                </section>
            </main>
        
        
        </>
    )
}