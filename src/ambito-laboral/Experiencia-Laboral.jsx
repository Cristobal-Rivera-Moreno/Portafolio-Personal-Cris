import { getString, StringId } from "../strings/strings";

export const ExperienciaLaboral = ({ currLanguage }) => {
  console.log("currLanguage: " + currLanguage);
  return (
    <>
<h2 className="font-semibold font-serif">
        {getString(StringId.MSG_ID_21, currLanguage)}
      </h2>
      <small className="block font-medium">
        {getString(StringId.MSG_ID_24, currLanguage)}
      </small>
      <p className="text-justify p-2 ">
        {getString(StringId.MSG_ID_22, currLanguage)}
        <br />
        {getString(StringId.MSG_ID_18, currLanguage)}
      </p>
      <div className="text-justify p-2" dangerouslySetInnerHTML={{__html: getString(StringId.MSG_ID_23, currLanguage)}}>
        
      </div>


      <h2 className="font-semibold font-serif">
        {getString(StringId.MSG_ID_13, currLanguage)}
      </h2>
      <small className="block font-medium">
        {getString(StringId.MSG_ID_14, currLanguage)}
      </small>
      <p className="text-justify p-2 ">
        {getString(StringId.MSG_ID_15, currLanguage)}
        <br />
        {getString(StringId.MSG_ID_18, currLanguage)}
      </p>
      <div className="text-justify p-2" dangerouslySetInnerHTML={{__html: getString(StringId.MSG_ID_20, currLanguage)}}>
        
      </div>

      <h2 className="font-semibold font-serif">
        {getString(StringId.MSG_ID_16, currLanguage)}
      </h2>
      <small className="block font-medium">
        {getString(StringId.MSG_ID_17, currLanguage)}
      </small>
      <p className="text-justify p-2 ">
        {getString(StringId.MSG_ID_18, currLanguage)}
      </p>
      <div className="text-justify p-2" dangerouslySetInnerHTML={{__html: getString(StringId.MSG_ID_19, currLanguage)}}>

      </div>
    </>
  );
};
