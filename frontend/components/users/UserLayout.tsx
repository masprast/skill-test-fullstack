import React from "react";
import { InfoUser } from "./InfoUser";
import { DetilUser } from "./DetilUser";
import { UserInterest } from "./UserInterest";
import { Username } from "./Username";

export const UserLayout = ({ nama }): React.ReactElement => {
	return (
		<div className="flex content-center flex-col gap-5 justify-center w-full h-screen max-md:pr-5">
			<Username name={nama} />
			<InfoUser
				nama="@johndoe"
				usia={28}
				gender={true}
				horoscope="Virgo"
				zodiac="Pig"
			/>
			<DetilUser
				birthday="28/08/1995"
				age={28}
				horoscope="Virgo"
				zodiac="Pig"
				height={175}
				weight={69}
			/>
			<UserInterest interests={["Music", "Basketball", "Fitness", "Gaming"]} />
		</div>
	);
};
