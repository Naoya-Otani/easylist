import Link from "next/link";
import type { FC } from "react";

const FooterLinks: FC<{
	linkHeading: string;
	links: string[];
	href: string[];
}> = ({ linkHeading, links, href }) => {
	return (
		<div>
			<h2 className="relative w-fit mb-8 text-sm font-semibold text-gray-900 uppercase before:content-[''] before:absolute before:w-full before:-translate-x-1/2 before:left-1/2 before:-bottom-3 before:border-2 before:border-transparent before:border-yellow-500">
				{linkHeading}
			</h2>
			<ul className="text-gray-600 font-medium">
				{links.map((link, index) => (
					<li className="mb-4" key={index + link}>
						<Link href={href[index]} className="hover:underline">
							{link}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterLinks;
