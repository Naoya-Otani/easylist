import React, { useState } from "react";
import SendBtn from "../../atoms/Button/SendBtn";

interface MessageInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onSendMessage: (message: string) => void;
  isStreaming: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({
  inputValue,
  setInputValue,
  onSendMessage,
  isStreaming,
}) => {
  const [isComposing, setIsComposing] = useState(false);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputValue.trim() || isComposing || isStreaming) return;
    onSendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !isComposing &&
      !isStreaming
    ) {
      event.preventDefault();
      handleFormSubmit(event as unknown as React.FormEvent);
    }
  };

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = () => {
    setIsComposing(false);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white rounded-lg shadow flex flex-col space-y-2 w-5/6 sm:w-3/5 mx-auto"
    >
      <div className="flex items-center border border-gray-400 rounded-md transition-colors relative">
        <input
          type="text"
          className="flex-1 rounded-md focus:outline-none focus:ring-0 border-0"
          placeholder={
            isStreaming
              ? "生成している途中での会話はできません"
              : "楽単くんにメッセージ"
          }
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
        />
        <SendBtn
          onClick={
            handleFormSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>
          }
          disabled={isStreaming}
        />
      </div>
    </form>
  );
};

export default MessageInput;
