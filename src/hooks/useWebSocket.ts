import { useState, useEffect } from 'react';
import WebSocketInstance from '@/src/hooks/WebSocketInstance';
interface Message {
  id: number;
  content: string;
  type: string;
  source?: 'user' | 'bot';
  date?: Date;
}

const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const wsInstance = WebSocketInstance.getInstance(url);

    const unsubscribe = wsInstance.subscribe((message: any) => {
      const formattedMessage: Message = {
        id: message.id,
        content: message.reply_from_bot,
        type: 'text', 
        source: 'bot',
        date: new Date()  
      };
      console.log("Formatted message:", formattedMessage);
      
      setMessages(prevMessages => [...prevMessages, formattedMessage]);
    });

    return () => {
      unsubscribe();
    };
  }, [url]);



  const sendMessage = (message: Message) => {
    const wsInstance = WebSocketInstance.getInstance(url); 
    wsInstance.sendMessage(message); 
  };

  return { messages, sendMessage };
};

export default useWebSocket;
