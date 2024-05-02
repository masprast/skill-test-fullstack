import React from "react";
import UserInput from "./UserInput";
import Link from "next/link";
import AuthLink from "./AuthLink";
import { Spasi } from "../Spasi";
import { Judul } from "./JudulAuth";

type Props = {
	register: Function;
};

const Login = ({ register }: Props): React.ReactElement => {
	return (
		<>
			<Judul judul="Login" />
			<UserInput placeholder="Enter Username/Email" />
			<UserInput placeholder="Enter Password" password={true} />
			<Spasi />
			<AuthLink judul="Login" f={() => console.log("Proses Login")} />
			<div className="self-center mt-14 ml-2 text-sm font-medium text-white bg-clip-text bg-[linear-gradient(74deg,#94783E_-6.8%,#F3EDA6_16.76%,#F8FAE5_30.5%,#FFE2BE_49.6%,#D5BE88_78.56%,#F8FAE5_89.01%,#D5BE88_100.43%)] max-md:mt-10">
				No account?{" "}
				<Link
					href="/register"
					onClick={(e) => {
						e.preventDefault();
						register();
					}}>
					<span className="underline">Register here</span>
				</Link>
			</div>
		</>
	);
};

export default Login;
