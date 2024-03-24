import { useState, useEffect } from 'react';

// WebSocketから受信するメッセージの型
interface Message {
  content: string;
  type: string;
  source?: 'user' | 'bot';
  date?: Date; // Messageインターフェースにdateプロパティを追加
}

const useWebSocket = (url: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const webSocket = new WebSocket(url);

    webSocket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
      
          // 受信したメッセージからChatMessage型のオブジェクトを作成
          const newMessage: Message = {
            type: data.type, // ここは受信データに依存するため、適宜調整してください
            content: data.reply_from_bot, // サーバーからのレスポンスをcontentにセット
            date: new Date(), // 現在時刻をセット、またはサーバーから送信された日時があればそれを使用
            source: 'bot', // サーバーからのレスポンスなので'bot'としています
          };
      
          // messagesステートに新しいメッセージを追加
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

