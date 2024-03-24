import React from 'react';

interface SendBtnProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>; // この行を変更
}


const SendBtn: React.FC<SendBtnProps> = ({ onClick }) => {
  return (
    <button
    className="p-2 bg-transparent text-gray-800 font-semibold  hover:bg-gray-800 hover:text-white  focus:ring-gray-800  transition-colors rounded-lg"
      onClick={onClick}
    >
      {/* カスタムSVGアイコンを直接挿入 */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    </button>
  );
};

export default SendBtn;


