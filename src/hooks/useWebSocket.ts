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

    webSocket.onmessage = (event) => {
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

      // 送信したメッセージをmessagesに追加
      setMessages((prev) => [
        ...prev,
        {
          ...message,
          date: new Date(),
          source: 'user', // 送信者を'user'として設定
        },
      ]);
    }
  };

  return { messages, sendMessage };
};

export default useWebSocket;

