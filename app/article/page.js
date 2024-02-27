import Image from "next/image";
import Reactmarkdown from "react-markdown";
import Link from "next/link";
import Button from "../components/Button";
import { RiBookmarkLine } from "react-icons/ri";
import articleData from "../data/article";

export const metadata = {
	title:
		"Meu Jardim - Revolução Verde Doméstica: tendência de cultivo de plantas em casa ganha força, impulsionada por tecnologia e sustentabilidade",
	description: "Meu Jardim",
};

export default function Article() {
	const article = articleData[0];
	return (
		<>
			<section className="container flex gap-5 mb-14 article">
				<article>
					<div
						className="image mb-1"
						style={{
							width: "100%",
							minHeight: "300px",
							maxHeight: "350px",
							height: "100%",
							position: "relative",
						}}>
						<Image
							src={article.image}
							alt=""
							className="rounded-lg"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<figcaption className="mt-2 mb-4 italic text-gray-600">
						{article.figcaption}
					</figcaption>
					<div className="flex items-center justify-between">
						<Link href="#">
							<p className="p-1 text-xs text-white bg-secondary-green rounded inline">
								{article.tag}
							</p>
						</Link>
						<Button href="/salvos">
							<RiBookmarkLine size={18} className="text-main-green" />
							Salvar
						</Button>
					</div>
					<h1 className="text-3xl mt-4 mb-4">{article.title}</h1>
					<div className="about flex gap-2 text-sm text-gray-600">
						<p>
							<Link href={article.authorUrl} className="underline">
								{article.author}
							</Link>
						</p>{" "}
						|<p>{article.data}</p>
					</div>
					<div className="content mt-10 text-lg">
						<Reactmarkdown>{article.text}</Reactmarkdown>
					</div>
				</article>
			</section>
		</>
	);
}
