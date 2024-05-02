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
	// const joinChatRoom = () => ();
	return (
		<div className="flex flex-row flex-wrap self-center text-start rounded-lg m-1 p-1 h-10 w-80">
			<div className="flex flex-row content-between">
				<p className="font-bold text-start">{person}</p>
				<p>{waktu}</p>
			</div>
			<div className="flex flex-nowrap text-start text-ellipsis">{pesan}</div>
		</div>
	);
};
