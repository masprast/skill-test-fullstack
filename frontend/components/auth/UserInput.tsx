import React, { useState } from "react";

type Props = {
	placeholder: string;
	password?: boolean;
};

const UserInput = ({
	placeholder,
	password = false,
}: Props): React.ReactElement => {
	const [showPass, setShowPas] = useState(password);

	const showPassword = () => {
		setShowPas(!showPass);
	};
	return (
		// <input className="justify-center items-start px-5 py-5 mt-7 max-w-full text-sm font-medium rounded-lg bg-white bg-opacity-10 text-white text-opacity-40 w-[327px] max-md:pr-5 max-md:mr-0.5 max-md:ml-2" placeholder={placeholder} />
		<input
			type="text"
			placeholder={placeholder}
			id=""
			className={`${
				showPass ? "" : "*"
			} shadow flex gap-5 self-center items-start px-5 py-5 mt-7 max-w-full text-base font-medium rounded-lg bg-white bg-opacity-10 text-white w-[327px] max-md:pr-5 text-opacity-40 max-md:mr-1.5 max-md:ml-1.5 focus:shadow-transparent`}
			// justify-center items-start px-5 py-5 mt-7 max-w-full text-sm font-medium rounded-lg bg-white bg-opacity-10 text-white text-opacity-40 w-[327px] max-md:pr-5 max-md:mr-1.5 max-md:ml-1.5
		/>
	);
};

export default UserInput;
