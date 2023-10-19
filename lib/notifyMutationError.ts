const notifyMutationError = async (response: Response) => {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_MUTATION_ERROR_URL;
    if (!webhookUrl) {
      console.log("Discord通知の送信先が設定されていません");
      return;
    }
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `エラー発生が発生しました。\n ステータスコード: ${
          response.status
        }\n ステータステキスト: ${
          response.statusText
        } \n レスポンス: ${await response.text()}`,
      }),
    });
  } catch (error) {
    console.error(`Error notifying Discord webhook: ${error}`);
  }
};

export default notifyMutationError;
