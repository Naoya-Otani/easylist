import type React from "react";
import { useState } from "react";
import Check from "../icon/Check";
import Copy from "../icon/Copy";
import NoSymbol from "../icon/NoSymbol";

const CopyBtn: React.FC<{
	url: string;
}> = ({ url }) => {
	const [status, setStatus] = useState<"undone" | "copied" | "failed">(
		"undone",
	);
	const copyToClipboard = async () => {
		try {
			await global.navigator.clipboard.writeText(url);
			setStatus("copied");
			setTimeout(() => {
				setStatus("undone");
			}, 3000);
		} catch (_error) {
			setStatus("failed");
		}
	};
	return (
		<button
			className="flex justify-center items-center"
			onClick={copyToClipboard}
		>
			{status === "undone" && <Copy />}
			{status === "copied" && <Check status={status} />}
			{status === "failed" && <NoSymbol />}
		</button>
	);
};

export default CopyBtn;
