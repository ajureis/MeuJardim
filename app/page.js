import MainCard from "./components/MainCard";
import Card from "./components/Card";
import cardsData from "./data/feed";

export const metadata = {
	title: "Meu Jardim - Home",
	description: "Meu Jardim",
};

export default function Feed() {
	return (
		<>
			<section className="container sm:flex flex-col gap-5 mb-14 feed">
				<MainCard
					tag="Tendência"
					title="Revolução Verde Doméstica: tendência de cultivo de plantas em casa ganha força, impulsionada por tecnologia e sustentabilidade"
					url="/article"
					author="Lúcia Maria"
					image="https://images.unsplash.com/photo-1592178036775-70c41f818c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
					{cardsData.map((card, index) => (
						<Card
							key={index}
							title={card.title}
							image={card.image}
							tag={card.tag}
							url={card.url}
							author={card.author}
						/>
					))}
				</div>
			</section>
		</>
	);
}
