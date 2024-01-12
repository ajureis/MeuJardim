import Link from "next/link";
import Filter from "../components/Filter";
import { RiHomeLine, RiBookmarkLine, RiGroupLine } from "react-icons/ri";

export default function Aside({ isMenuOpen, toggleMenu }) {
	return (
		<aside
			className={` md:w-1/3 sticky-aside ${
				isMenuOpen ? "open shadow-md" : ""
			}`}>
			<nav
				className={`space-y-4 mb-5 bg-white p-4 rounded-md text-sm ${
					isMenuOpen ? "block" : "hidden md:block"
				}`}>
				<Link href="/" className="flex gap-2 items-center">
					<RiHomeLine size={21} className="text-main-green" />
					<span>Home</span>
				</Link>
				<Link href="/salvos" className="flex gap-2 items-center">
					<RiBookmarkLine size={19} className="text-main-green" />
					<span>Salvos</span>
				</Link>
				<Link href="/" className="flex gap-2 items-center">
					<RiGroupLine size={19} className="text-main-green" />
					<span>Meus amigos</span>
				</Link>
			</nav>

			<nav
				className={`space-y-4 mb-5 bg-white p-4 rounded-md text-sm ${
					isMenuOpen ? "block" : "hidden md:block"
				}`}>
				<p className="text-xs font-bold">Categorias</p>
				<Link href="/" className="flex gap-2 items-center">
					Tendência
				</Link>
				<Link href="/" className="flex gap-2 items-center">
					Plantas internas
				</Link>
				<Link href="/" className="flex gap-2 items-center">
					Plantas externas
				</Link>
			</nav>
			<div
				className={`space-y-4 mb-5 bg-white p-4 rounded-md text-sm ${
					isMenuOpen ? "block" : "hidden md:block"
				}`}>
				<Filter />
			</div>
		</aside>
	);
}
