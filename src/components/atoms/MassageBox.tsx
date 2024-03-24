import React from 'react';
import Logo from '@/src/components/atoms/icon/Logo'; // 適切なパスに変更してください
import UserIcon from '@/src/components/atoms/icon/Chatuser'
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
            <Logo className="w-6 h-6" /> {/* ボットのメッセージ用アイコン */}
            <span className="ml-2 font-semibold">EASYLIST-BOT</span> {/* ボット名を追加 */}
          </div>
        ) : (
          <div className="flex items-center">
            <UserIcon /> {/* ユーザーのメッセージ用アイコン */}
            <span className="ml-2 font-semibold">Student</span> 
            {/* ユーザー名が必要な場合はここに追加 */}
          </div>
        )}
        <div className={`mt-1 p-3 bg-gray-50 rounded-lg ${source === 'bot' ? 'rounded-tl-none' : 'rounded-tr-none'}`}>
          <p className="text-sm">{text}</p> {/* メッセージテキスト */}
        </div>
      </div>
    );
  };
  
  export default MessageBox;
