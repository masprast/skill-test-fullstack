import React from "react";
import UserInput from "./UserInput";
import Link from "next/link";
import { Judul } from "./JudulAuth";
import AuthLink from "./AuthLink";
import { Spasi } from "../Spasi";

type Props = {
	login: Function;
};

const Register = ({ login }: Props): React.ReactElement => {
	const cek = (param: string) => {
		console.log(param);
	};
	return (
		<>
			{/* <div className="flex gap-5 justify-between ml-3 w-full max-md:ml-2.5"></div> */}
			<Judul judul="Register" />
			<UserInput placeholder="Enter Email" />
			<UserInput placeholder="Create Username" />
			<UserInput placeholder="Create Password" />
			<UserInput placeholder="Confirm Password" />
			<Spasi />
			<AuthLink judul="Register" f={() => cek("Proses Register")} />
			<div className="self-center mt-14 ml-2 text-sm font-medium text-white bg-clip-text bg-[linear-gradient(74deg,#94783E_-6.8%,#F3EDA6_16.76%,#F8FAE5_30.5%,#FFE2BE_49.6%,#D5BE88_78.56%,#F8FAE5_89.01%,#D5BE88_100.43%)] max-md:mt-10">
				Have an account?{" "}
				<Link
					href="/register"
					onClick={(e) => {
						e.preventDefault();
						login();
					}}>
					<span className="underline">Login here</span>
				</Link>
			</div>
		</>
	);
};

export default Register;
