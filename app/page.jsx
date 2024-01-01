
import Link from "next/link";
import Image from "next/image";
import React from "react";
import data from "../data.json";
import { ProfileOrganizations } from "./components/orgs";
import { RecentActivity } from "./components/recent-activity";
import { getUser } from "./data";
import SoundCloudWidget1 from "./components/soundcloud1";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home({
	searchParams: { customUsername },
}) {
    
	const username = customUsername || data.githubUsername;
	const promise = getUser(username);

	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href + (customUsername ? `?customUsername=${customUsername}` : '')}
							className="text-lg duration-300 text-gray-300 hover:text-gray-100 hover:text-shadow"
						>
							{item.name}
						</Link>
					))}
					<TryYourself customUsername={customUsername} />
				</ul>
			</nav>

			<div className=" hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-pink-200/0 via-pink-200/50 to-pink-200/0" style={{ boxShadow: '0 0 20px #ff69b4, 0 0 20px #ff69b4, 0 0 30px #ff69b4, 0 0 40px #ff69b4, 0 0 50px #ff69b4, 0 0 60px #ff69b4, 0 0 70px #ff69b4, 0 0 80px #ff69b4, 0 0 90px #ff69b4, 0 0 100px #ff69b4' }} />
			<div className="flex flex-col sm:flex-row items-center">
  <h1 className="spark z-10 text-4xl hover:scale-110 text-transparent duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-9xl md:text-9xl whitespace-nowrap bg-clip-text bg-white p-5 neon-blue-glow">
    {username}
  </h1>
  <UserIcon  promise={promise} />
</div>
			   
			<div className=" hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-pink-200/0 via-pink-200/50 to-pink-200/0" style={{ boxShadow: '0 0 20px #ff69b4, 0 0 20px #ff69b4, 0 0 30px #ff69b4, 0 0 40px #ff69b4, 0 0 50px #ff69b4, 0 0 60px #ff69b4, 0 0 70px #ff69b4, 0 0 80px #ff69b4, 0 0 90px #ff69b4, 0 0 100px #ff69b4' }} />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-lg text-gray-300">
					<UserText promise={promise} />
					<ProfileOrganizations username={username} />
				</h2>
			</div>
			<SoundCloudWidget1/>
		</div>
	);
}

const UserIcon = async ({ promise }) => {

	const user = await promise;

	return (
		<Image alt='👨‍💻' width={200} height={200} src={user.avatar_url || data.avatarUrl} className="float-right rounded-full mx-4" />
	);
};

const UserText = async ({ promise }) => {

	const user = await promise;

	return (
		<p>{data.displayName}{''}{user.bio}</p>
	);
};

const TryYourself = ({ customUsername }) => {

	const href = customUsername ? '/' : '/search';

	return <Link
		href={href}
		className="text-lg duration-500 text-gray-300 hover:text-gray-100 hover:text-shadow"
	>
		{
			customUsername ? 'Showing: ' + customUsername + ', click to cancel ❌' : 'Try yourself'
		}
	</Link>;
	
};
