import Link from "next/link";

export default function Button({ href, children }) {
	return (
		<Link
			href={href}
			className="flex gap-1 border border-main-green text-main-green bg-white px-2 md:px-4 py-1 md:py-2 rounded-md text-sm">
			{children}
		</Link>
	);
}
