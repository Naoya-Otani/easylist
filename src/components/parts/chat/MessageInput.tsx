import React, { useState } from 'react';
import SendBtn from "../../atoms/Button/SendBtn";

// MessageInputProps として型定義
interface MessageInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onSendMessage: (message: string) => void;
}

// MessageInput としてコンポーネントを定義
const MessageInput: React.FC<MessageInputProps> = ({
  inputValue,
  setInputValue,
  onSendMessage,
}) => {
    const handleFormSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (!inputValue.trim()) return;

      onSendMessage(inputValue); // 外部状態を使用してメッセージを送信
      setInputValue(''); // 外部状態をクリア
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleFormSubmit(event as unknown as React.FormEvent); // 強制的な型変換は避けたほうが良いが、ここではイベントを処理するために使用
      }
    };

    return (
      <form onSubmit={handleFormSubmit} className="bg-white rounded-lg shadow flex flex-col space-y-2 w-3/5 mx-auto ">
        <div className="flex items-center border border-gray-400 rounded-md transition-colors ">
          <input
            type="text"
            className="flex-1 rounded-md focus:outline-none border-transparent"
            placeholder="Message EASYLIST-BOT..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <SendBtn onClick={handleFormSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>} />
        </div>
      </form>
    );
};

  
export default MessageInput;







