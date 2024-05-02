import React, { useState } from "react";

type Props = {
	birthday?: string;
	horoscope?: string;
	zodiac?: string;
	height?: number;
	weight?: number;
	age?: number;
};

export const DetilUser = ({
	birthday,
	age,
	horoscope,
	zodiac,
	height,
	weight,
}: Props): React.ReactElement => {
	const data = {
		birthday: birthday,
		age: age,
		horoscope: horoscope,
		zodiac: zodiac,
		height: height,
		weight: weight,
	};
	const dateofbirth = birthday.substring(0, 10).split("/");

	const date = dateofbirth[0];
	const month = dateofbirth[1];
	const year = dateofbirth[2];

	const infoAboutEmpty = () => (
		<div className="mt-10 font-medium text-white text-opacity-50">
			Add in your your to help others know you better
		</div>
	);

	const tabelData = () => {
		const listData = [];
		const entry = Object.entries(data);
		for (let index = 0; index < entry.length; index++) {
			const key = entry[index][0];
			listData.push(
				<tr>
					<td>
						<span className="text-white">{key}</span>
					</td>
					<td>
						<span className="text-white">
							:{" "}
							{key === "birthday"
								? `${date} / ${month} / ${year} (Age ${age})`
								: entry[index][1]}
						</span>
					</td>
				</tr>
			);
		}

		return (
			<table className="border-separate border-spacing-3">{listData}</table>
		);
	};

	return (
		<div className="flex self-center flex-col px-7 pt-2 pb-6 mt-6 w-full text-sm font-medium text-white bg-gray-900 rounded-2xl max-md:pl-5">
			<div className="flex ml-3 mb-4 gap-5 justify-between text-sm font-bold whitespace-nowrap">
				About
			</div>
			<div>
				{Object.values(data).every((d) => {
					return d.valueOf() != "";
				})
					? tabelData()
					: infoAboutEmpty()}
			</div>
		</div>
	);
};
