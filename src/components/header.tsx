import Link from "next/link";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export const Header: React.FC = () => (
  <header>
    <h1>Title</h1>
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.href} style={{ display: "contents" }}>
            <Link href={item.href}>
              <a style={{ display: "inline-block", padding: 12 }}>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
