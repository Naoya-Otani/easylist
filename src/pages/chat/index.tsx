import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useSession } from "next-auth/react";
import MessageInput from '@/src/components/parts/chat/MessageInput';
import { ChatDisplayProps } from '@/src/components/parts/chat/ChatDisplay';
import Header from "@/src/components/templates/Chat/HeaderChat";
import Logo from '@/src/components/atoms/icon/Logo';
import useWebSocket from '@/src/hooks/useWebSocket'; // useWebSocketフックをインポート

const DynamicChatDisplay = dynamic<ChatDisplayProps>(() => import('@/src/components/parts/chat/ChatDisplay'), {
    ssr: false,
});

// WebSocket接続のURL
const WEBSOCKET_URL = "ws://127.0.0.1:8000/ws"; // 適切なWebSocketエンドポイントURLに変更してください

const ChatPage = () => {
    const [inputValue, setInputValue] = useState('');
    const { data: session } = useSession();
    const { messages: rawMessages, sendMessage: sendWebSocketMessage } = useWebSocket(WEBSOCKET_URL);

    const [showStartScreen, setShowStartScreen] = useState(true);

    // WebSocketから受信したMessageをChatMessageに変換
    const messages = rawMessages.map((message) => ({
    ...message,
    date: new Date(), // 現在の日付を設定
    source: message.source || 'bot', // sourceが未定義の場合は 'bot' とする
}));


    const handleSendMessage = async () => {
        setShowStartScreen(false);
        if (!inputValue.trim()) {
            console.error('Message is empty');
            return;
        }

        // メッセージ送信
        sendWebSocketMessage({
            content: inputValue,
            type: 'text',
            source: 'user',
        });

        setInputValue('');
    };

    return (
        <div className="flex flex-col h-screen">
            <Header className="fixed top-0 inset-x-0 z-10 bg-gray-50" />
            <div className="flex flex-col flex-1 pt-20 bg-gray-50 pb-16">
                {showStartScreen && (
                    <div className="flex flex-col items-center justify-center flex-1">
                        <Logo className="w-20 h-20" />  {/* Logoコンポーネントを挿入 */}
                        <h2 className=" font-semibold mr-2 text-2xl pt-6 pb-24">How can I help you with class-related questions?</h2>
                        <div className="fixed inset-x-0 bottom-0 bg-gray-50 shadow-md pb-18">
                        <MessageInput
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                                onSendMessage={handleSendMessage}
                            />
                            <p className="text-sm text-gray-500 flex items-center justify-center pt-3 pb-3">EASYLIST-BOT can make mistakes. Consider checking important information.</p>
                        </div>
                    </div>
                )}
                {!showStartScreen && (
                    <>
                        <div className="flex-1 mb-100">
                            <DynamicChatDisplay messages={messages} />
                        </div>
                        <div className="fixed inset-x-0 bottom-0 bg-gray-50 shadow-md pb-18">
                            <MessageInput
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                                onSendMessage={handleSendMessage}
                            />
                            <p className="text-sm text-gray-500 flex items-center justify-center pt-3 pb-3">EASYLIST-BOT can make mistakes. Consider checking important information.</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ChatPage;