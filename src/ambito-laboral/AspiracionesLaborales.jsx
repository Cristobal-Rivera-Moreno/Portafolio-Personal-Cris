import { getString, StringId } from "../strings/strings";

export const AspiracionesLaborales = ({ currLanguage }) => {
  return (
    <>
      <p className="text-justify p-2">
        {getString(StringId.MSG_ID_12, currLanguage)}
      </p>
    </>
  );
};
