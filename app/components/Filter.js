import React, { useState } from "react";

export default function Filter() {
	const [filters, setFilters] = useState({
		poucoAgua: false,
		poucaIluminacao: false,
		muitaIluminacao: false,
		pendentes: false,
		poucaManutencao: false,
	});

	const [showMore, setShowMore] = useState(false);

	const toggleShowMore = () => {
		setShowMore(!showMore);
	};

	return (
		<div className="space-y-2">
			<p className="text-xs font-bold">Filtros</p>
			<label className="flex items-center space-x-2">
				<input
					type="checkbox"
					name="poucoAgua"
					checked={filters.poucoAgua}
					onChange={(e) =>
						setFilters({ ...filters, poucoAgua: e.target.checked })
					}
					className="form-checkbox text-main-green"
				/>
				<span className="cursor-pointer">Pouco Água</span>
			</label>
			<label className="flex items-center space-x-2">
				<input
					type="checkbox"
					name="poucaIluminacao"
					checked={filters.poucaIluminacao}
					onChange={(e) =>
						setFilters({ ...filters, poucaIluminacao: e.target.checked })
					}
					className="form-checkbox text-main-green"
				/>
				<span className="cursor-pointer">Pouca Iluminação</span>
			</label>
			<label className="flex items-center space-x-2">
				<input
					type="checkbox"
					name="muitaIluminacao"
					checked={filters.muitaIluminacao}
					onChange={(e) =>
						setFilters({ ...filters, muitaIluminacao: e.target.checked })
					}
					className="form-checkbox text-main-green"
				/>
				<span className="cursor-pointer">Muita Iluminação</span>
			</label>
			<label className="flex items-center space-x-2">
				<input
					type="checkbox"
					name="pendentes"
					checked={filters.pendentes}
					onChange={(e) =>
						setFilters({ ...filters, pendentes: e.target.checked })
					}
					className="form-checkbox text-main-green"
				/>
				<span className="cursor-pointer">Pendentes</span>
			</label>
			<label className="flex items-center space-x-2">
				<input
					type="checkbox"
					name="poucaManutencao"
					checked={filters.poucaManutencao}
					onChange={(e) =>
						setFilters({ ...filters, poucaManutencao: e.target.checked })
					}
					className="form-checkbox text-main-green"
				/>
				<span className="cursor-pointer">Pouca Manutenção</span>
			</label>
			{showMore && (
				<>
					<label className="flex items-center space-x-2">
						<input
							type="checkbox"
							name="outroFiltro1"
							checked={filters.outroFiltro1}
							onChange={(e) =>
								setFilters({ ...filters, outroFiltro1: e.target.checked })
							}
							className="form-checkbox text-main-green"
						/>
						<span className="cursor-pointer">Outro Filtro 1</span>
					</label>
					<label className="flex items-center space-x-2">
						<input
							type="checkbox"
							name="outroFiltro2"
							checked={filters.outroFiltro2}
							onChange={(e) =>
								setFilters({ ...filters, outroFiltro2: e.target.checked })
							}
							className="form-checkbox text-main-green"
						/>
						<span className="cursor-pointer">Outro Filtro 2</span>
					</label>
					{/* Adicione mais itens aqui conforme necessário */}
				</>
			)}
			<button
				onClick={toggleShowMore}
				className="text-main-green cursor-pointer">
				{showMore ? "Ver Menos" : "Ver Mais"}
			</button>
		</div>
	);
}
