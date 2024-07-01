import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MainCard({ tag, title, url, author, image }) {
	return (
		<div className="relative w-full h-64 rounded mb-4 overflow-hidden">
			<Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded" />
			<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
				<div className="tag p-1 text-xs text-white bg-secondary-green rounded inline-block max-w-max">
					<p>{tag}</p>
				</div>
				<div className="main-card bg-white bg-opacity-75 p-2 rounded mt-1">
					<h1 className="title text-2xl mb-2">
						<Link href={url}>{title}</Link>
					</h1>
					<p className="text-sm text-gray-600">{author}</p>
				</div>
			</div>
		</div>
	);
}
