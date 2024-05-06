import React, { useState } from 'react';
import MessageBox from "@/src/components/atoms/MassageBox";
interface ChatMessage {
  id: number,
  type: string;
  content: string; 
  date: Date;
  source: 'user' | 'bot';
  }
  
  export interface ChatDisplayProps {
    messages: ChatMessage[];
    isStreaming: boolean;
  }
  
  const ChatDisplay: React.FC<ChatDisplayProps> = ({ messages , isStreaming}) => {
  
    const isWaitingForBotResponse = messages.length > 0 && messages[messages.length - 1].source === 'user';
  
    return (
      <div className="flex flex-col items-center justify-center h-screen pb-6">
            <div id="message-list" className="overflow-auto flex-1 w-5/6 sm:w-3/5 p-4 rounded-lg bg-gray-50">
                {messages.map((msg, index) => (
                    <MessageBox
                        key={index}
                        id={msg.id}
                        position="left" 
                        text={msg.content}
                        source={msg.source}
                        loop={false}
                        isStreaming={isStreaming} 
                        />
                      ))}
          
          {/*isWaitingForBotResponse && (
            <div className="flex items-center justify-start"> 
              <MessageBox
                key="loading"
                position="left"
                text="Loading using vector search......."
                source="bot"
                loop={true} 
              />
            </div>
          )*/}
        </div>
      </div>
    );
  };
  
  export default ChatDisplay;