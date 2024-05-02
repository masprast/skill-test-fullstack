import { useState } from "react";

export const Spasi = ({ mode = "md" }) => {
	const [jarak, setJarak] = useState(78);
	const setSpasi = () => {
		switch (mode) {
			case "sm":
				setJarak(28);
				break;
			case "md":
				setJarak(78);
				break;
			case "lg":
				setJarak(112);
			default:
				break;
		}
	};
	return <div style={{ paddingBottom: jarak }}></div>;
};
