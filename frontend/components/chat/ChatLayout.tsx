import React from "react";
import { Judul } from "../auth/JudulAuth";

export const ChatLayout = (): React.ReactElement => {
	const uwong = ["parni", "yati", "tejo", "paino", "tarmin", "kamidi"];

	const genUwong = () => {
		const element = [];
		uwong.forEach((w) =>
			element.push(
				<div>
					<div className="text-justify text-lg font-medium text-white">{w}</div>
					<div className="fles flex-row text-start text-nowrap gap-32">
						<div className="flex-nowrap text-start text-ellipsis">
							ini teks yang
							panjaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaangggggggggggggggggg
							sekaliiiiiiii......
						</div>
					</div>
				</div>
			)
		);

		return element;
	};

	const infoPersonListEmpty = () => <div>Find people to chat</div>;

	return (
		<div className="flex content-center flex-col gap-5 justify-center w-full h-screen max-md:pr-5">
			<div className="flex flex-row self-center gap-36 mb-16 mt-16">
				<div className="ml-6 text-2xl font-bold text-white max-md:mt-10 max-md:ml-2.5">
					Chat
				</div>
				<div className="ml-6 text-2xl font-bold text-white max-md:mt-10 max-md:ml-2.5">
					:0.:
				</div>
			</div>
			<div className="flex flex-col self-center gap-10 border border-separate border-spacing-2 bg-slate-800 px-4 py-4 h-screen">
				{uwong.length < 1 ? infoPersonListEmpty() : genUwong()}
			</div>
		</div>
	);
};
