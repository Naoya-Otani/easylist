import React from 'react';
import Logo from '@/src/components/atoms/icon/Logo';
import UserIcon from '@/src/components/atoms/icon/Chatuser'
import TextStreamer from '@/src/components/parts/chat/TextStreamer';
interface MessageBoxProps {
  position: 'left' | 'right';
  text: string;
  source: 'user' | 'bot';
}

const MessageBox: React.FC<MessageBoxProps> = ({ position, text, source }) => {
  console.log('MessageBox text:', text); 
    return (
      <div className={`flex flex-col ${position === 'left' ? 'items-start' : 'items-end'} mb-2`}>
        {source === 'bot' ? (
          <div className="flex items-center">
            <Logo className="w-6 h-6" /> 
            <span className="ml-2 font-semibold">EASYLIST-BOT</span> 
          </div>
        ) : (
          <div className="flex items-center">
            <UserIcon /> 
            <span className="ml-2 font-semibold">Student</span> 
          </div>
        )}
        <div className={`mt-1 p-3 bg-gray-50 rounded-lg ${source === 'bot' ? 'rounded-tl-none' : 'rounded-tr-none'}`}>
          <TextStreamer text={text} /> 
        </div>
      </div>
    );
  };
  
  export default MessageBox;
