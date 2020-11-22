import type { ReactNode } from "react";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";

export function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
