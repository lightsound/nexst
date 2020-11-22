import Head from "next/head";
import { Layout } from "src/components/layout";

// eslint-disable-next-line import/no-default-export
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Home</h2>
      <button onClick={() => window.alert("Hello, World!")}>Button</button>
    </Layout>
  );
}
