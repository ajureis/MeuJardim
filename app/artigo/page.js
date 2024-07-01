import Link from "next/link";
import { getAllArticles } from "../../data/article";

export async function getStaticProps() {
	const articles = getAllArticles();
	return {
		props: {
			articles,
		},
	};
}

export default function Blog({ articles }) {
	return (
		<div>
			<h1>Artigos</h1>
			<ul>
				{articles.map((article) => (
					<li key={article.slug}>
						<Link href={`/artigo/${article.slug}`}>{article.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
