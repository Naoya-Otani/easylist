import { useState, useEffect } from 'react';

interface Message {
  content: string;
  type: string;
  source?: 'user' | 'bot';
  date?: Date; 
}


const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const webSocket = new WebSocket(url);
  
    webSocket.onmessage = (event: MessageEvent) => { 
      try {
        const data = JSON.parse(event.data);
        const newMessage: Message = {
          type: data.type, 
          content: data.reply_from_bot,
          date: new Date(), 
          source: 'bot', 
        };
        setMessages((prev) => [...prev, newMessage]);
      } catch (error) {
        console.error('JSON解析エラー:', error);
      }
    };
    
    setSocket(webSocket);
  
    return () => {
      webSocket.close();
    };
  }, [url]);
  

  const sendMessage = (message: Message) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message));

      setMessages((prev) => [
        ...prev,
        {
          ...message,
          date: new Date(),
          source: 'user', 
        },
      ]);
    }
  };

  return { messages, sendMessage };
};

export default useWebSocket;

