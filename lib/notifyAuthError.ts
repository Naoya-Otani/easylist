async function notifyAuthError(metadata: any, code: string) {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_AUTH_ERROR_URL;
    if (!webhookUrl) {
      console.log("Discord通知の送信先が設定されていません");
      return;
    }
    const payload = {
      content: `認証エラー発生 : ${metadata.message}\n
      Stack : ${metadata?.stack}\n
      https://next-auth.js.org/errors#${code.toLowerCase()}`,
    };
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (response.status === 204) {
      console.log("Discord通知を送信しました: ", payload.content);
    } else {
      console.error(
        "Discord通知の送信に失敗しました:",
        response.status,
        await response.text()
      );
    }
  } catch (error) {
    console.error(error);
  }
}

export default notifyAuthError;
