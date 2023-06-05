import { FC } from "react";
import Link from "next/link";

const FooterLinks: FC<{
  linkHeading: string;
  links: string[];
  href: string[];
}> = ({ linkHeading, links, href }) => {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {linkHeading}
      </h2>
      <ul className="text-gray-600 dark:text-gray-400 font-medium">
        {links.map((link, index) => (
          <li className="mb-4" key={index}>
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
