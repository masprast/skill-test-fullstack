import React from "react";

type Props = {
	judul: string;
	f: Function;
};

const AuthLink = ({ judul, f }: Props): React.ReactElement => {
	return (
		// <Link
		// 	onClick={() => f}
		// 	href="#"
		// 	className="justify-center items-center px-16 py-4 mt-6 text-base font-bold tracking-tight text-center text-white whitespace-nowrap rounded-lg max-md:px-5">
		// 	{judul}
		// </Link>
		<button
			type="submit"
			onClick={() => f()}
			className="w-1/2 ml-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-md shadow">
			{judul}
		</button>
	);
};

export default AuthLink;
