import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import MessageInput from "@/src/components/parts/chat/MessageInput";
import Header from "@/src/components/templates/Header";
import Logo from "@/src/components/atoms/icon/Logo";
import useWebSocket from "@/src/hooks/useWebSocket";
import TextStreamer from "@/src/components/parts/chat/TextStreamer";

const DynamicChatDisplay = dynamic(
  () => import("@/src/components/parts/chat/ChatDisplay"),
  {
    ssr: false,
  }
);
interface Message {
  id: number;
  content: string;
  type: "text";
  source: "user" | "bot";
  date: Date;
}

const ChatPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const WEBSOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL
    ? process.env.NEXT_PUBLIC_WEBSOCKET_URL
    : "";
  const {
    sendMessage: sendWebSocketMessage,
    isConnected,
    isStreaming,
  } = useWebSocket(WEBSOCKET_URL);
  const [showStartScreen, setShowStartScreen] = useState<boolean>(true);
  const handleSendMessage = async () => {
    setShowStartScreen(false);
    if (!inputValue.trim()) {
      console.error("Message is empty");
      return;
    }

    const message: Message = {
      id: Date.now(),
      content: inputValue,
      type: "text",
      source: "user",
      date: new Date(),
    };

    if (!isStreaming) {
      sendWebSocketMessage(message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header showSearchBar={false} />
      <div className="flex flex-col flex-1">
        {showStartScreen && !isConnected && (
          <div className="flex flex-col items-center justify-center flex-1">
            <Logo className="w-20 h-20" />
            <h2 className="text-center font-semibold sm:w-full w-6/7 text-2xl pt-6 pb-24 sm:px-10">
              <TextStreamer text={"接続中..."} loop={true} />
            </h2>
          </div>
        )}
        {showStartScreen && isConnected && (
          <>
            <div className="flex flex-col items-center justify-center flex-1">
              <Logo className="w-20 h-20" />
              <p className="text-center font-semibold tracking-wider sm:w-full w-6/7 lg:text-2xl pt-6 pb-24 sm:px-10">
                Hello 👋
                <br />
                進級や履修についての質問をしてみて！
              </p>
            </div>
            <div className="fixed inset-x-0 bottom-0 shadow-md pb-18">
              <MessageInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                onSendMessage={handleSendMessage}
                isStreaming={isStreaming}
              />
              <p className="text-center text-sm text-gray-500 flex items-center justify-center pt-3 pb-3 sm:px-10">
                AIの回答は誤りがある場合があります。重要な情報は確認してください。
              </p>
            </div>
          </>
        )}
        {!showStartScreen && (
          <>
            <div className="flex-1 overflow-auto mt-14">
              <DynamicChatDisplay
                messages={messages}
                isStreaming={isStreaming}
              />
            </div>
            <div className="fixed inset-x-0 bottom-0 shadow-md pb-18">
              <MessageInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                onSendMessage={handleSendMessage}
                isStreaming={isStreaming}
              />
              <p className="text-center text-sm text-gray-500 flex items-center justify-center pt-3 pb-3 sm:px-10">
                AIの回答は誤りがある場合があります。重要な情報は確認してください。
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
