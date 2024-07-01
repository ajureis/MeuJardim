import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Button from "../../components/Button";
import { RiBookmarkLine } from "react-icons/ri";
import { getArticleBySlug, getAllArticles } from "../../data/article";

export async function generateStaticParams() {
	const articles = getAllArticles();
	return articles.map((article) => ({
		slug: article.slug,
	}));
}

export async function generateMetadata({ params }) {
	const article = getArticleBySlug(params.slug);
	return {
		title: `Meu Jardim - ${article.title}`,
		description: article.description || "Meu Jardim",
	};
}

export default async function ArticlePage({ params }) {
	const article = getArticleBySlug(params.slug);

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
							fill
							style={{ objectFit: "cover" }}
						/>
					</div>
					<figcaption className="mt-2 mb-4 italic text-gray-600">{article.figcaption}</figcaption>
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
						|<p>{article.date}</p>
					</div>
					<div className="content mt-10 text-lg">
						<ReactMarkdown>{article.text}</ReactMarkdown>
					</div>
				</article>
			</section>
		</>
	);
}
