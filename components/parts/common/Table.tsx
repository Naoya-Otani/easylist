import React, { FC } from "react";

const Table: FC<{
  head: string[];
  items: { th: string; td: string }[];
  thBold: boolean;
}> = ({ head, items, thBold }) => {
  return (
    <div>
      <div className="relative overflow-x-auto rounded-md shadow">
        <table className="w-full text-sm text-left text-black font-notoSans">
          <thead className="text-xs text-black uppercase bg-yellow-100 ">
            <tr>
              {head.map((item) => (
                <th scope="col" className="px-6 py-3" key={item}>
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <React.Fragment key={item.th}>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className={`px-6 py-4 ${
                      thBold === true ? "" : "font-normal"
                    }`}
                  >
                    {item.th}
                  </th>
                  <td className="px-6 py-4">{item.td}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
