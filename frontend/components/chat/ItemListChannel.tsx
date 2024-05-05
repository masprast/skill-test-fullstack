import React, { useState } from "react";

type Props = {
	nama: string;
	lastMessage: string;
	lastMessageCreation: string;
	onTap: boolean;
	taped: boolean;
};

const ItemListChannel = ({
	nama,
	lastMessage,
	lastMessageCreation,
	onTap,
	taped,
}: Props): React.ReactElement => {
	// const [selected, setSelected] = useState(false);
	const select = () => {
		if (onTap) taped = !taped;
		console.log(onTap, taped);
	};
	// const selecting = () => setSelected(!selected);
	return (
		<div
			onClick={() => select()}
			className={`entry cursor-pointer transform hover:scale-110 duration-300 transition-transform ${
				taped ? "bg-green-200" : "bg-white"
			} mb-4 rounded p-4 flex shadow-md`}>
			{/* <div className="flex-2">
				<div className="w-12 h-12 relative">
					<img
						className="w-12 h-12 rounded-full mx-auto"
						src="../resources/profile-image.png"
						alt="chat-user"
					/>
					<span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
				</div>
			</div> */}
			<div className="flex-1 px-2">
				<div className="truncate w-32">
					<span className="text-gray-800">{nama}</span>
				</div>
				<div>
					<small className="text-gray-600">{lastMessage}</small>
				</div>
			</div>
			<div className="flex-2 self-end text-right">
				<div>
					<small className="text-gray-500">{lastMessageCreation}</small>
				</div>
				{/* <div>
					<small className="text-xs bg-red-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
						23
					</small>
				</div> */}
			</div>
		</div>
	);
};

export default ItemListChannel;
