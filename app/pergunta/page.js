"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { RiImageAddLine } from "react-icons/ri";

export default function Pergunta() {
	const [pergunta, setPergunta] = useState("");
	const [fotos, setFotos] = useState([]);
	const onDrop = (acceptedFiles) => {
		setFotos(acceptedFiles);
	};

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: "image/*",
	});

	const handleEnviarClick = () => {
		console.log("Pergunta:", pergunta);
		console.log("Imagens:", fotos);
	};

	return (
		<div className="container mx-auto py-4">
			<h1 className="text-3xl  mb-3">Está com alguma dúvida?</h1>
			<p className="mb-8">
				Temos especialistas especialista em plantas, fornecendo informações e dicas para cultivar
				com sucesso.
			</p>
			<div className="question-container flex mt-4">
				<div className="user-image mr-3">
					<Image
						src="/avatar.jpg"
						width={65}
						height={65}
						alt="Avatar"
						className="rounded-full border border-main-green"
					/>
				</div>

				<div className="question-content w-full rounded bg-white p-4">
					<textarea
						className="textarea p-2 w-full h-22"
						placeholder="Fazer sua pergunta"
						value={pergunta}
						onChange={(e) => setPergunta(e.target.value)}
					/>

					<div className="flex items-center justify-between mt-2">
						<div {...getRootProps()} className="flex items-center mt-1 cursor-pointer">
							<input {...getInputProps()} />
							<RiImageAddLine size={23} /> <span className="text-xs ml-2">Adicionar imagem</span>
						</div>
						<button
							className="text-white bg-main-green px-2 md:px-4 py-1 md:py-2 rounded-md text-sm"
							onClick={handleEnviarClick}>
							Enviar
						</button>
					</div>
					{fotos.length > 0 && (
						<div>
							<ul style={{ fontSize: "10px" }}>
								{fotos.map((file) => (
									<li key={file.name}>{file.name}</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
