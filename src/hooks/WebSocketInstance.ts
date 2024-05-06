import { useEffect, useState } from 'react';

interface Message {
  id: number;
  content: string;
  type: string;
  source?: 'user' | 'bot';
  date?: Date;
}
class WebSocketInstance {
  private static instance: WebSocketInstance | null = null;
  private socket: WebSocket;
  private subscribers: ((message: Message) => void)[] = [];

  private constructor(url: string) {
    this.socket = new WebSocket(url);
    this.socket.onopen = () => {
      
    };
    this.socket.onclose = (event) => {
      
    };
    this.socket.onerror = (event) => {
      
    };
    this.socket.onmessage = this.handleMessage;
  }

  public static getInstance(url: string): WebSocketInstance {
    if (!WebSocketInstance.instance) {
      WebSocketInstance.instance = new WebSocketInstance(url);
    }
    return WebSocketInstance.instance;
  }

  private handleMessage = (event: MessageEvent<any>) => {
    console.log("Received raw data:", event.data);
    const message: Message = JSON.parse(event.data);
    console.log("Parsed message:", message);
    this.subscribers.forEach(callback => callback(message));
  };

  public subscribe(callback: (message: Message) => void): () => void {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  public sendMessage(message: Message): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      console.log("Sending message:", message);
      this.socket.send(JSON.stringify(message));
    } else {
      console.error("Failed to send message, socket not open");
    }
  }

  public isSocketOpen(): boolean {
    return this.socket.readyState === WebSocket.OPEN;
  }

  public addEventListener(type: string, listener: EventListenerOrEventListenerObject): void {
    this.socket.addEventListener(type, listener);
  }

  public removeEventListener(type: string, listener: EventListenerOrEventListenerObject): void {
    this.socket.removeEventListener(type, listener);
  }
}

export default WebSocketInstance;
