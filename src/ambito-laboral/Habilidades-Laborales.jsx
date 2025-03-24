import { getString, StringId } from "../strings/strings";

export const HabilidadesLaborales = ({currLanguage}) => {
  return (
    <>
      <ol className="text-justify p-2 list-disc">
        <li>{getString(StringId.MSG_ID_42, currLanguage)}</li>
        <li>{getString(StringId.MSG_ID_43, currLanguage)}</li>
        <li>{getString(StringId.MSG_ID_44, currLanguage)}</li>
        <li>{getString(StringId.MSG_ID_45, currLanguage)}</li>
        <li>{getString(StringId.MSG_ID_46, currLanguage)}</li>
        <li>{getString(StringId.MSG_ID_47, currLanguage)}</li>
        <li>{getString(StringId.MSG_ID_48, currLanguage)}</li>
        <li>{getString(StringId.MSG_ID_49, currLanguage)}</li>
      </ol>
    </>
  );
};
