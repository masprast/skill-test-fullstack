import React from "react";

type Props = {
	func: Function;
};

const SearchChannel = ({ func }: Props): React.ReactElement => {
	return (
		<div className="search flex-2 pb-6 pt-6 px-2">
			<input
				type="text"
				className="outline-none p-3 block w-full bg-gray-100 bg-opacity-80 border-b-2 border-gray-200 rounded-lg"
				placeholder="Search"
				onChange={func()}
			/>
		</div>
	);
};

export default SearchChannel;
