import React, { useState } from "react";

type Props = {
	nama: string;
	usia: number;
	gender: boolean;
	horoscope: string;
	zodiac: string;
	img?: string;
};

export const InfoUser = ({
	nama,
	usia,
	gender,
	horoscope,
	zodiac,
	img,
}: Props): React.ReactElement => {
	const [genders, setGenders] = useState(true);
	const setGender = () => {
		gender ? "Male" : "Female";
	};

	return (
		<div className="flex w-full overflow-hidden relative flex-col justify-center mt-7 text-white aspect-[1.99]">
			<img
				loading="lazy"
				srcSet="..."
				className="object-cover absolute inset-0 size-full"
			/>
			<div className="flex relative flex-col items-start pt-20 pr-20 pb-3.5 pl-3.5 w-full rounded-2xl max-md:pr-5">
				<div className="mt-2 text-base font-bold tracking-tight">
					{`${nama}, ${usia}`}
				</div>
				<div className="mt-2.5 text-sm font-medium tracking-tight">
					{setGender}
				</div>
				<div className="flex gap-4 mt-4 text-sm font-semibold text-center whitespace-nowrap">
					<div className="flex flex-1 gap-2 px-4 py-2 backdrop-blur-[25px] bg-white bg-opacity-10 rounded-[100px]">
						<div>{horoscope}</div>
					</div>
					<div className="flex flex-1 gap-2 px-4 py-2 backdrop-blur-[25px] bg-white bg-opacity-10 rounded-[100px]">
						<div>{zodiac}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
