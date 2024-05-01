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
}


const MessageBox: React.FC<MessageBoxProps> = ({ id, position, text, source, loop = false }) => {
  const [message, setMessage] = useState<string | null>(null);
  const WEBSOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL ? process.env.NEXT_PUBLIC_WEBSOCKET_URL : "";
  const { messages } = useWebSocket(WEBSOCKET_URL);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("All messages at useEffect:", messages);
    
    let bufferedMessage = ''; 
  
    for (const msg of messages) {
      if (msg.id === id && msg.source === 'bot') {
        console.log("Matching message found:", msg);
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
  }, [messages, id]);
  

  return (
    <div className={`flex flex-col ${position === 'left' ? 'items-start' : 'items-end'} mb-2`}>
      <div className="flex items-center">
        {source === 'user' ? <UserIcon /> : <Logo className="w-6 h-6" />}
        <span className="ml-2 font-semibold">{source === 'user' ? 'Student' : 'EASYLIST-BOT'}</span>
      </div>
      <div className={`mt-1 p-3 bg-gray-50 rounded-lg ${source === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
        <TextStreamer text={text} loop={loop} />
      </div>
      <div className="flex flex-col ">
        <div className="flex items-center mt-6">
          <Logo className="w-6 h-6" />
          <span className="ml-2 font-semibold">EASYLIST-BOT</span>
        </div>
        <div className={`p-3 bg-gray-50 rounded-lg ${position === 'left' ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
        {loading && <TextStreamer text={"Loading using vector search......."} loop={true} />}
        {message &&<p className="text-sm">{message}</p> }
        </div>
      </div>
    </div>
  );
};

export default MessageBox;