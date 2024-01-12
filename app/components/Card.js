import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card({ title, image, tag, url, author }) {
	return (
		<div className="card">
			<div className="mb-2 relative" style={{ width: "100%", height: "240px" }}>
				<Link href={url}>
					<Image src={image} alt={title} className="rounded-lg" fill={true} />
				</Link>
				<span className="p-1 absolute bottom-3 left-2 text-xs text-white bg-secondary-green rounded inline">
					{tag}
				</span>
			</div>
			<h2 className="title text-xl font-semibold mb-1">
				<Link href={url}>{title}</Link>
			</h2>
			<p className="text-sm text-gray-600">{author} </p>
		</div>
	);
}
