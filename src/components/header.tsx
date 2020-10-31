import Link from "next/link";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export const Header: React.FC = () => (
  <header>
    <h1>Title</h1>
    <nav>
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <a style={{ display: "inline-block", padding: 12 }}>{item.label}</a>
        </Link>
      ))}
    </nav>
  </header>
);
