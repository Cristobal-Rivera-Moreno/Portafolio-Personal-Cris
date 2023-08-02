



export const Imagee = ({imgs})=>{

    const res = imgs.map((val,i)=><img key={i} className={val.class} src={val.src} alt="image"/>)
    return(
        <>
             {res}

        </>


    );



}
