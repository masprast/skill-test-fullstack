const ChannelHeader = ({ channel }) => {
	return (
		<div className="flex-3 self-center">
			<h2 className="text-xl py-1 mb-8 border-b-2 border-gray-200">
				{channel}
			</h2>
		</div>
	);
};

export default ChannelHeader;
