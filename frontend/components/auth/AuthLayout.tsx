import React, { ReactNode, useState } from "react";
import Login from "./Login";
import Link from "next/link";
import UserInput from "./UserInput";
import AuthLink from "./AuthLink";
import Register from "./Register";
import { Spasi } from "../Spasi";

const LoginLayout = (): React.ReactElement => {
	const [judul, setJudul] = useState("Login");
	const [mode, setMode] = useState(true);

	const cekJudul = () => {
		mode ? setJudul("Login") : setJudul("Register");
		setMode(!mode);
		console.log(judul);
	};

	return (
		<>
			<div className="flex flex-col px-5 h-screen">
				<Spasi mode="sm" />
				<div className="self-center">
					{mode ? (
						<Login register={() => cekJudul()} />
					) : (
						<Register login={() => cekJudul()} />
					)}
				</div>
			</div>
		</>
	);
};

export default LoginLayout;
