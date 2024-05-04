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
  const [isConnected, setIsConnected] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);  

  useEffect(() => {
    const wsInstance = WebSocketInstance.getInstance(url);

    const handleOpen = () => {
      console.log("WebSocket is now open.");
      setIsConnected(true);
    };

    const handleClose = () => {
      console.log("WebSocket is closed now.");
      setIsConnected(false);
    };

    const handleError = () => {
      console.error("WebSocket error occurred.");
      setIsConnected(false);
    };

    wsInstance.addEventListener('open', handleOpen);
    wsInstance.addEventListener('close', handleClose);
    wsInstance.addEventListener('error', handleError);

    const unsubscribe = wsInstance.subscribe((message: any) => {
      if (message.reply_from_bot === "STREAM_END") {
        setIsStreaming(false); 
        console.log("Streaming has ended.");
      } else {
        setIsStreaming(true); 
        const formattedMessage: Message = {
          id: message.id,
          content: message.reply_from_bot,
          type: 'text',
          source: 'bot',
          date: new Date()
        };
        console.log("Formatted message:", formattedMessage);
        setMessages(prevMessages => [...prevMessages, formattedMessage]);
      }
    });

    return () => {
      wsInstance.removeEventListener('open', handleOpen);
      wsInstance.removeEventListener('close', handleClose);
      wsInstance.removeEventListener('error', handleError);
      unsubscribe();
    };
  }, [url]);

  const sendMessage = (message: Message) => {
    if (!isStreaming) { 
      const wsInstance = WebSocketInstance.getInstance(url);
      wsInstance.sendMessage(message);
    } else {
      console.log("Cannot send message, streaming is in progress.");
    }
  };

  return { messages, sendMessage, isConnected, isStreaming };
};

export default useWebSocket;
