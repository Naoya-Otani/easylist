import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useSession } from "next-auth/react";
import MessageInput from '@/src/components/parts/chat/MessageInput';
import { ChatDisplayProps } from '@/src/components/parts/chat/ChatDisplay';
import Header from "@/src/components/templates/Chat/HeaderChat";
import Logo from '@/src/components/atoms/icon/Logo';
import useWebSocket from '@/src/hooks/useWebSocket'; 

const DynamicChatDisplay = dynamic<ChatDisplayProps>(() => import('@/src/components/parts/chat/ChatDisplay'), {
    ssr: false,
});


const ChatPage = () => {
    const [inputValue, setInputValue] = useState('');
    const { data: session } = useSession();
    const WEBSOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL ? process.env.NEXT_PUBLIC_WEBSOCKET_URL : "";
    const { messages: rawMessages, sendMessage: sendWebSocketMessage } = useWebSocket(WEBSOCKET_URL);

    const [showStartScreen, setShowStartScreen] = useState(true);

 
    const messages = rawMessages.map((message) => ({
    ...message,
    date: new Date(),
    source: message.source || 'bot', 
}));


    const handleSendMessage = async () => {
        setShowStartScreen(false);
        if (!inputValue.trim()) {
            console.error('Message is empty');
            return;
        }

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
                        <Logo className="w-20 h-20" />  
                        <h2 className=" text-center font-semibold sm:w-full w-6/7 text-2xl pt-6 pb-24 sm:px-10">How can I help you with class-related questions?</h2>
                        <div className="fixed inset-x-0 bottom-0 bg-gray-50 shadow-md pb-18">
                        <MessageInput
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                                onSendMessage={handleSendMessage}
                            />
                            <p className="text-center text-sm text-gray-500 flex items-center justify-center pt-3 pb-3 sm:px-10">EASYLIST-BOT can make mistakes. Consider checking important information.</p>
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
                            <p className="text-sm text-gray-500 flex items-center justify-center pt-3 pb-3 sm:pr-0 sm:pl-0 ">EASYLIST-BOT can make mistakes. Consider checking important information.</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ChatPage;
