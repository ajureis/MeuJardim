"use client";
import { useState } from "react";
import "./globals.css";
import { Nunito, Libre_Baskerville } from "next/font/google";
import Header from "./components/Header";
import Aside from "./components/Aside";

const nunito = Nunito({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-nunito",
	display: "swap",
});

const libre_baskerville = Libre_Baskerville({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-libre_baskerville",
	display: "swap",
});

export default function RootLayout({ children }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<html
			lang="pt-br"
			className={`${nunito.variable} ${libre_baskerville.variable}`}>
			<body>
				<Header toggleMenu={toggleMenu} />
				<main className="container flex md:gap-4 gap-0 pt-16  md:pt-24 p-2 ">
					<Aside isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
					{children}
				</main>
			</body>
		</html>
	);
}
