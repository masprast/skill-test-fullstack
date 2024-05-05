import React, { useState } from "react";
import SearchChannel from "./SearchChannel";
import ItemListChannel from "./ItemListChannel";

type Props = {
	channel: {
		nama: string;
		lastMessage: string;
		lastMessageCreation: string;
	}[];
};

const ChannelList = ({ channel }: Props): React.ReactElement => {
	const [selected, setSelected] = useState(false);
	const [index, setIndex] = useState(0);
	const listChannel = [];
	const taped: { b: boolean; i: number }[] = [];

	const selecting = (i: number) => {
		setSelected(!selected);
		// if (taped[i].b == true) {
		// 	taped[i].b = !taped[i];
		// } else {
		// 	taped[i].b = true;
		// }
		taped[i].b = selected;
		console.log(taped[i]);
	};
	const fillChannelList = () => {
		if (channel.length < 1) {
			listChannel.push(
				<div className="w-full h-full content-center text-center">
					<span>No one's here</span>
				</div>
			);
		} else {
			for (let i = 0; i < channel.length; i++) {
				taped.push({ b: false, i: i });
				listChannel.push(
					<div onClick={() => selecting(i)}>
						<ItemListChannel
							nama={channel[i].nama}
							lastMessage={channel[i].lastMessage}
							lastMessageCreation={channel[i].lastMessageCreation}
							onTap={selected}
							taped={taped[i].b}
						/>
					</div>
				);
			}
		}

		return listChannel;
	};
	return (
		<div className="sidebar max-h-screen hidden lg:flex flex-2 flex-col self-stretch">
			<SearchChannel
				func={() => {
					true;
				}}
			/>
			<div className="flex-1 overflow-y-auto px-3 flex flex-col flex-grow">
				{fillChannelList()}
			</div>
		</div>
	);
};

export default ChannelList;
