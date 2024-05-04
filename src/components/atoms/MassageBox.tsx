import React, { useState, useEffect } from 'react';
import Logo from '@/src/components/atoms/icon/Logo';
import UserIcon from '@/src/components/atoms/icon/Chatuser';
import TextStreamer from '@/src/components/parts/chat/TextStreamer';
import useWebSocket from '@/src/hooks/useWebSocket';

interface MessageBoxProps {
  id: number,
  position: 'left' | 'right';
  text: string;
  source: 'user' | 'bot';
  loop?: boolean;
  isStreaming:boolean;
}


const MessageBox: React.FC<MessageBoxProps> = ({ id, position, text, source, loop = false,isStreaming }) => {
  const [message, setMessage] = useState<string | null>(null);
  const WEBSOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL ? process.env.NEXT_PUBLIC_WEBSOCKET_URL : "";
  const { messages } = useWebSocket(WEBSOCKET_URL);
  const [loading, setLoading] = useState(true);
  const [donotcreate, setDonotCreate] = useState(false);

  useEffect(() => {
    let bufferedMessage = ''; 
  
    for (const msg of messages) {
      if (msg.id === id && msg.source === 'bot') {
        
        const newContent = msg.content;
        bufferedMessage += newContent;
      }
    }

    if (bufferedMessage.length > 0) {
      console.log("Buffered message:", bufferedMessage);
      setMessage(bufferedMessage); 
      setLoading(false);
    } else {
      console.log("No matching message found for ID:", id);
    }

    if (isStreaming) {
      setDonotCreate(true);
    }
  }, [messages, id, isStreaming]);

  

  return (
    <div className={`flex flex-col ${position === 'left' ? 'items-start' : 'items-end'} mb-2`}>
      <div className="flex items-center">
        {source === 'user' ? <UserIcon /> : <Logo className="w-6 h-6" />}
        <span className="ml-2 font-semibold">{source === 'user' ? 'Student' : 'EASYLIST-BOT'}</span>
      </div>
      <div className={`mt-1 p-3 bg-gray-50 rounded-lg ${source === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
        <TextStreamer text={text} loop={loop} />
      </div>
      <div className="flex flex-col mt-6">
        <div className="flex items-center">
          <Logo className="w-6 h-6" />
          <span className="ml-2 font-semibold">EASYLIST-BOT</span>
        </div>
        <div className={`p-3 bg-gray-50 rounded-lg ${position === 'left' ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
          {loading ? (
            <TextStreamer text="Loading using vector search......." loop={true} />
          ) : (
            <p className="text-sm">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;