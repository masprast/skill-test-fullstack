import React from "react";
import ChatButton from "./ChatButton";

export const Username = ({ name }): React.ReactElement => {
	return (
		<div className="flex flex-row flex-nowrap gap-40 self-center mt-16 text-sm content-between font-semibold text-center text-white max-md:mt-10">
			{name}
			<ChatButton />
		</div>
	);
};
