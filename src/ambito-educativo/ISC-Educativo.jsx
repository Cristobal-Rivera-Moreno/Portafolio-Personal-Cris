import { getString, StringId } from "../strings/strings";

export const ISCEducativo = ({ currLanguage }) => {
  return (
    <>
      <h1 className="font-semibold text-lg font-mono dark:bg-gray-900">
        {getString(StringId.MSG_ID_67, currLanguage)}
      </h1>
      <small className="block font-medium">
        {getString(StringId.MSG_ID_68, currLanguage)}
      </small>
      <p className="text-justify p-4">
        {getString(StringId.MSG_ID_66, currLanguage)}
      </p>
    </>
  );
};
