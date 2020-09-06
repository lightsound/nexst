import Link from "next/link";

export const Header: React.FC = () => (
  <header>
    <h1>Title</h1>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
