import { getString, StringId } from "../strings/strings";

export const ConocimientoLaboral = ({currLanguage}) => {
  const info = [
    { text: getString(StringId.MSG_ID_25, currLanguage), icon: "c++.png" },
    { text: getString(StringId.MSG_ID_26, currLanguage), icon: "java.svg" },
    { text: getString(StringId.MSG_ID_27, currLanguage), icon: "python.png" },
    {
      text: getString(StringId.MSG_ID_28, currLanguage),
      icon: "javascript.png",
    },
    {
      text: getString(StringId.MSG_ID_29, currLanguage),
      icon: "javascript.png",
    },
    {
      text: getString(StringId.MSG_ID_30, currLanguage),
      icon: "javascript.png",
    },
    {
      text: getString(StringId.MSG_ID_31, currLanguage),
      icon: "javascript.png",
    },
    { text: getString(StringId.MSG_ID_32, currLanguage), icon: "nodejs.png" },
    { text: getString(StringId.MSG_ID_33, currLanguage), icon: "golang.png" },
    { text: getString(StringId.MSG_ID_34, currLanguage), icon: ".net.png" },
    { text: getString(StringId.MSG_ID_35, currLanguage), icon: "php.svg" },
    { text: getString(StringId.MSG_ID_36, currLanguage), icon: "php.svg" },
    { text: `${getString(StringId.MSG_ID_37, currLanguage)} y ${getString(StringId.MSG_ID_38, currLanguage)}`, icon: "html5.png" },
    { text: getString(StringId.MSG_ID_39, currLanguage), icon: "sql.png" },
    { text: getString(StringId.MSG_ID_40, currLanguage), icon: "api.png" },
    { text: getString(StringId.MSG_ID_41, currLanguage), icon: "api.png" },
  ];
  return (
    <>
      <div className="p-2">
        <table className="m-auto ">
          <thead>
            <tr>
              <th>Tecnologias</th>
            </tr>
          </thead>
          <tbody>
            {info.map((val, i) => (
              <tr key={i} className="border-2 border-gray-500 ">
                <td>
                  {val.text}
                  {/* <img src={import.meta.env.VITE_PATH +val.icon +'?raw=true'} alt="" className="inline-block w-8 h-8 bg-black/30 rounded-full ml-2"/> */}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
};
