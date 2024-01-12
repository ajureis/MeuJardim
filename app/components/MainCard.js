import React from "react";
import Link from "next/link";

export default function MainCard({ tag, title, url, author, image }) {
	return (
		<div
			className="container-image rounded mb-4"
			style={{ backgroundImage: `url(${image})` }}>
			<div className="content">
				<p className="tag p-1 text-xs text-white bg-secondary-green rounded inline">
					{tag}
				</p>
				<div className="main-card bg-white p-2 rounded  mt-1 mb-1">
					<h1 className="title text-2xl mb-2">
						<Link href={url}>{title}</Link>
					</h1>
					<p className="text-sm text-gray-600">{author} </p>
				</div>
			</div>
		</div>
	);
}
