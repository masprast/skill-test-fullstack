import React from "react";

const ChatButton = (): React.ReactElement => {
	return (
		<button
			type="submit"
			onClick={() => console.log("chat")}
			className="w-1/2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded-md shadow">
			Chat
		</button>
	);
};

export default ChatButton;
