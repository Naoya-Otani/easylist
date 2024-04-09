import React, { useState } from 'react';
import MessageBox from "@/src/components/atoms/MassageBox";

interface ChatMessage {
    type: string;
    content: string; 
    date: Date;
    source: 'user' | 'bot';
}
  export interface ChatDisplayProps {
    messages: ChatMessage[];
  }
  
  const ChatDisplay: React.FC<ChatDisplayProps> = ({ messages }) => {
    return (
        <div className=" flex flex-col items-center justify-center h-screen pb-6">
            <div id="message-list" className=" overflow-auto flex-1 w-3/5 p-4 rounded-lg bg-gray-50">
                {messages.map((msg, index) => (
                    <MessageBox
                        key={index}
                        position="left"
                        text={msg.content}
                        source={msg.source}
                    />
                ))}
            </div>
        </div>
    );
}

export default ChatDisplay;
  

  




  