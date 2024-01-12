import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
	return (
		<div className="w-80 flex items-center justify-between bg-main-light-grey rounded-md border">
			<input
				type="text"
				placeholder="Pesquisar"
				className="w-72 border p-2 rounded-md text-sm"
				style={{ background: "none", border: "none" }}
			/>
			<button className=" px-2">
				<FiSearch />
			</button>
		</div>
	);
}
