import React from "react";

type Props = {
	person: string;
	pesan: string;
	waktu: string;
};

export const ChatPersonButton = ({
	person,
	pesan,
	waktu,
}: Props): React.ReactElement => {
	const joinChatRoom = () => {
		<button>
			<div className="text-white"></div>
		</button>;
	};
	return <></>;
};
