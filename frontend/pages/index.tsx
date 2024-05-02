import Link from "next/link";
import Layout from "../components/Layout";
import Base from "../components/Base";
import LoginLayout from "../components/auth/AuthLayout";
import { UserLayout } from "../components/users/UserLayout";
import { ChatLayout } from "../components/chat/ChatLayout";

const IndexPage = () => (
	<Base>
		{/* <LoginLayout /> */}
		{/* <UserLayout nama="@johndoe123" /> */}
		<ChatLayout />
	</Base>
);

export default IndexPage;
