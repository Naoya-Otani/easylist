import { Transition } from "@headlessui/react";
import type React from "react";

const Check: React.FC<{
	status: "undone" | "copied" | "failed";
}> = ({ status }) => {
	return (
		<>
			<Transition
				show={status === "copied"}
				enter="transition-opacity duration-150"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-8 h-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4.5 12.75l6 6 9-13.5"
					/>
				</svg>
			</Transition>
		</>
	);
};

export default Check;
