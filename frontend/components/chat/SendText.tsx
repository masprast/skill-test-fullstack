import React from "react";

type Props = {
	func: Function;
};

const SendText = ({ func }): React.ReactElement => {
	return (
		<div className="flex-2 pt-4 pb-8 sticky">
			<div className="write bg-white shadow flex rounded-lg">
				<div className="flex-1">
					<textarea
						name="message"
						className="w-full block outline-none py-4 px-4 bg-transparent bg-scroll"
						rows={1}
						placeholder="Type a message..."
						autoFocus></textarea>
				</div>
				<div className="flex-2 w-fit p-3 flex content-center items-center">
					<button
						className="bg-blue-400 w-10 h-10 rounded-full inline-block"
						onClick={func()}>
						<span className="inline-block align-text-bottom">
							<svg
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								className="w-4 h-4 text-white">
								<path d="M5 13l4 4L19 7"></path>
							</svg>
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SendText;
