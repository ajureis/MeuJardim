import Image from "next/image";
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
						<p>
							A Revolução Verde Doméstica tem ganhado destaque nos últimos
							tempos, à medida que mais pessoas se envolvem na tendência de
							cultivar plantas em suas próprias casas. Impulsionada por avanços
							tecnológicos e uma crescente conscientização sobre a importância
							da sustentabilidade, essa tendência está transformando a maneira
							como vemos nossos espaços internos.
						</p>
						<p>
							O que começou como alguns vasos de ervas na janela evoluiu para
							sistemas de cultivo interno de alta tecnologia. A automação
							inteligente permitiu o desenvolvimento de ambientes controlados,
							onde fatores como luz, umidade e temperatura podem ser ajustados
							com precisão para atender às necessidades de diferentes plantas. A
							tecnologia LED de espectro total simula a luz solar, permitindo
							que as plantas prosperem mesmo em ambientes fechados. Além disso,
							aplicativos e dispositivos conectados permitem monitorar e
							gerenciar as condições das plantas de qualquer lugar.
						</p>
						<p>
							Os motivos por trás dessa Revolução Verde Doméstica vão além da
							estética. A sustentabilidade desempenha um papel crucial nessa
							tendência. À medida que as preocupações com o meio ambiente
							aumentam, as pessoas estão buscando maneiras de reduzir sua pegada
							ecológica. Cultivar plantas em casa não apenas melhora a qualidade
							do ar interno, mas também promove a autossuficiência ao cultivar
							alimentos em casa, reduzindo a necessidade de transporte de
							produtos agrícolas.
						</p>
						<p>
							Há uma série de benefícios em aderir a essa tendência. Além de
							criar um ambiente mais agradável, o cultivo de plantas em casa
							pode ser terapêutico, melhorando o bem-estar mental. Além disso,
							ao cultivar seus próprios alimentos, você pode ter certeza da
							origem e da qualidade do que consome. Isso promove uma dieta mais
							saudável e sustentável, contribuindo para o seu próprio bem-estar
							e o bem-estar do planeta.{" "}
						</p>
						<p>
							Se você está considerando entrar na Revolução Verde Doméstica,
							aqui estão algumas dicas para começar:
						</p>
						<ol>
							<li>
								Conheça Suas Plantas: Pesquise as necessidades específicas de
								cada planta que você deseja cultivar. Isso inclui luz, umidade e
								cuidados de poda.
							</li>
							<li>
								Escolha os Recipientes Adequados: Certifique-se de que os vasos
								têm drenagem adequada para evitar o acúmulo de água.
							</li>
							<li>
								Explore a Tecnologia: Se estiver interessado, invista em
								sistemas de automação e iluminação LED.
							</li>
							<li>
								Estabeleça uma Rotina: Crie um cronograma regular para regar,
								fertilizar e cuidar das suas plantas.
							</li>
							<li>
								Tenha Paciência: O cultivo de plantas requer tempo e paciência.
								Não desanime com os desafios iniciais.
							</li>
						</ol>
						<p>
							A Revolução Verde Doméstica está permitindo que as pessoas
							transformem seus espaços internos em oásis verdes e sustentáveis.
							Ao aderir a essa tendência, você não apenas melhora sua qualidade
							de vida, mas também contribui para um futuro mais verde e
							consciente.
						</p>
					</div>
				</article>
			</section>
		</>
	);
}
