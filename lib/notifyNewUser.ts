async function notifyNewUser(user: any) {
	try {
		const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
		if (!webhookUrl) {
			console.log("Discord通知の送信先が設定されていません");
			return;
		}
		const payload = {
			content: `新しいユーザー登録: ${user.name}`,
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
				await response.text(),
			);
		}
	} catch (error) {
		console.error(error);
	}
}

export default notifyNewUser;
