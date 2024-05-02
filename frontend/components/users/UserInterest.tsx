import React from "react";

type Props = { interests: string[] };

export const UserInterest = ({ interests }: Props): React.ReactElement => {
	const interest = () => {
		const listInterest = [];
		for (let index = 0; index < interests.length; index++) {
			listInterest.push(
				<div className="justify-center px-4 py-2 bg-white bg-opacity-10 rounded-[100px]">
					{interests[index]}
				</div>
			);
		}
		return listInterest;
	};
	const infoInterestEmpty = () => (
		<div className="mt-9 font-medium text-white text-opacity-50">
			Add in your interest to find a better match
		</div>
	);
	return (
		<div className="flex w-full gap-5 items-start px-4 py-5 mt-5 text-sm font-semibold text-white whitespace-nowrap bg-gray-900 rounded-2xl">
			<div className="flex flex-col grow shrink-0 mt-1 basis-0 w-fit">
				<div className="self-start ml-2.5 font-bold">Interest</div>
				<div className="flex flex-wrap gap-3 mt-7 text-center">
					{interests.length < 1 ? infoInterestEmpty() : interest()}
				</div>
			</div>
		</div>
	);
};
