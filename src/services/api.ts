const API_BASE_URL = 'http://127.0.0.1:8000'; // あなたのFastAPIサーバーのURL

// メッセージを送信し、レスポンスを取得する関数
export const sendMessage = async (message: string, user_id: string, chatroom_id: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/prompt_test`, { // /promptエンドポイントへのリクエスト
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, user_id, chatroom_id }), // リクエストボディ
        });
        if (!response.ok) {
            throw new Error('Failed to send message');
        }
        const data = await response.json();
        return data; // レスポンスデータを返す
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};


