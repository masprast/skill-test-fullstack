import React from "react";

type Props = {
	message: string;
	created: string;
	owner: boolean;
};

const ChatBubble = ({ message, created, owner }: Props): React.ReactElement => {
	return (
		<div
			className={`message mb-4 flex flex-col px-2 ${
				owner ? "me text-right ml-10" : "mr-10"
			}`}>
			<div
				className={`inline-block flex-wrap w-fit rounded-xl p-3 px-6 shadow-lg ${
					owner
						? "self-end bg-gray-50 "
						: "self-start bg-gray-300 text-gray-700"
				}`}>
				<span>{message}</span>
			</div>
			<div className={`${owner ? "pr-4" : "pl-4"} mt-1`}>
				<small className="text-gray-500">{created}</small>
			</div>
		</div>
	);
};

export default ChatBubble;
