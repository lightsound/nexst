import Link from "next/link";
import type { VFC } from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/plate", label: "plate" },
  { href: "/react-quill", label: "react-quill" },
  { href: "/react-draft-wysiwyg", label: "react-draft-wysiwyg" },
];

export const Header: VFC = () => {
  return (
    <header>
      <h1>Title</h1>
      <nav>
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a style={{ display: "inline-block", padding: 12 }}>{label}</a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
