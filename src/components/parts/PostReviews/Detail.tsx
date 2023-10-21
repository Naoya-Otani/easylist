import React, { FC } from "react";

const Detail: FC<{
  detail: string;
  setDetail: React.Dispatch<React.SetStateAction<string>>;
}> = ({ detail, setDetail }) => {
  return (
    <div className="mb-2">
      <textarea
        id="detail"
        value={detail}
        maxLength={800}
        onChange={(event) => setDetail(event.target.value)}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500"
        placeholder="受講した感想など…"
      />
    </div>
  );
};

export default Detail;
