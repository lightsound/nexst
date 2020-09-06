import Head from "next/head";
import { Layout } from "src/components/layout";

const Home: React.FC = () => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Home</h1>
    <button onClick={() => window.alert("Hello, World!")}>Button</button>
  </Layout>
);

export default Home;
