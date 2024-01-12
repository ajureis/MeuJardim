import Image from "next/image";
import Link from "next/link";
import {
	RiNotificationFill,
	RiQuestionnaireFill,
	RiMenuFill,
} from "react-icons/ri";
import Button from "./Button";
import SearchBar from "./SearchBar";

export default function Header({ toggleMenu }) {
	return (
		<header className="header fixed w-full p-2 md:p-5 shadow-md bg-white flex justify-between items-center z-10">
			<div className="flex items-center space-x-4">
				<div className="md:hidden">
					<button onClick={toggleMenu}>
						<RiMenuFill size={21} className="text-main-green" />
					</button>
				</div>
				<div className="logo">
					<Link href="/">
						<Image
							src="/logo.png"
							width={140}
							height={265}
							alt="Logo Meu Jardim"
							priority={true}
						/>
					</Link>
				</div>
				<div className="hidden md:block">
					<SearchBar />
				</div>
			</div>
			<div className="flex items-center space-x-6">
				<div>
					<Button href="/pergunta">
						<span className="hidden md:inline">Fazer uma pergunta</span>
						<span className="md:hidden">
							<RiQuestionnaireFill size={18} className="text-main-green" />
						</span>
					</Button>
				</div>
				<div className="notification icons bg-main-light-grey">
					<span className="have-notification"></span>
					<RiNotificationFill size={19} className="text-main-green" />
				</div>
				<div className="user">
					<Image
						src="/avatar.jpg"
						width={32}
						height={32}
						alt="Avatar"
						className="rounded-full border border-main-green"
					/>
				</div>
			</div>
		</header>
	);
}
