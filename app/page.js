import MainCard from "./components/MainCard";
import Card from "./components/Card";
import { getAllArticles } from "./data/article";

export const metadata = {
	title: "Meu Jardim - Home",
	description: "Meu Jardim",
};

export default function Feed() {
	const articles = getAllArticles(); // Obtenha os dados dos artigos diretamente

	return (
		<>
			<section className="container sm:flex flex-col gap-5 mb-14 feed">
				<MainCard
					tag={articles[0].tag}
					title={articles[0].title}
					url={`/artigo/${articles[0].slug}`}
					author={articles[0].author}
					image={articles[0].image}
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
					{articles.slice(1).map((article, index) => (
						<Card
							key={index}
							title={article.title}
							image={article.image}
							tag={article.tag}
							url={`/artigo/${article.slug}`}
							author={article.author}
						/>
					))}
				</div>
			</section>
		</>
	);
}
