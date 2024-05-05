import Link from "next/link";
import Layout from "../components/Layout";
import Base from "../components/Base";
import LoginLayout from "../components/auth/AuthLayout";
import { UserLayout } from "../components/users/UserLayout";
import ChatLayout from "../components/chat/ChatLayout";
import ChatLayoutTes from "../components/chat/ChatLayoutTes";

const listMessages = [
	{
		owner: false,
		created: "15 April",
		message:
			"Hey there. We would like to invite you over to our office for avisit. How about it?",
	},
	{
		owner: false,
		created: "15 April",
		message: "All travel expenses are covered by us of course :D",
	},
	{
		owner: true,
		created: "15 April",
		message: "It's like a dream come true",
	},
	{
		owner: true,
		created: "15 April",
		message: "I accept. Thank you very much.",
	},
	{
		owner: false,
		created: "15 April",
		message: "You are welome. We will stay in touch.",
	},
	{
		owner: true,
		created: "15 April",
		message: "I accept. Thank you very much.",
	},
	{
		owner: false,
		created: "15 April",
		message: "You are welome. We will stay in touch.",
	},
	{
		owner: true,
		created: "15 April",
		message: "I accept. Thank you very much.",
	},
	{
		owner: false,
		created: "15 April",
		message: "You are welome. We will stay in touch.",
	},
	{
		owner: true,
		created: "15 April",
		message: "I accept. Thank you very much.",
	},
	{
		owner: false,
		created: "15 April",
		message: "You are welome. We will stay in touch.",
	},
	{
		owner: true,
		created: "15 April",
		message: "I accept. Thank you very much.",
	},
	{
		owner: false,
		created: "15 April",
		message: "You are welome. We will stay in touch.",
	},
];
const IndexPage = () => (
	<Base>
		<LoginLayout />
		{/* <UserLayout nama="@johndoe123" /> */}
		{/* <ChatLayout /> */}
		{/* <ChatLayout channel="Mercedes" messages={listMessages} /> */}
	</Base>
);

export default IndexPage;
