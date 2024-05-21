import React from "react";
import AirPlane from "../icon/AirPlane";

interface SendBtnProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const SendBtn: React.FC<SendBtnProps> = ({ onClick, disabled }) => {
  return (
    <button
      className="p-2 bg-transparent text-gray-800 font-semibold hover:bg-gray-400 hover:text-white focus:ring-gray-800 transition-colors rounded-r"
      onClick={onClick}
      disabled={disabled}
    >
      <AirPlane />
    </button>
  );
};

export default SendBtn;
