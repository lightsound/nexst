import { Footer } from "src/components/footer";
import { Header } from "src/components/header";

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
