import Head from "next/head";
import { Layout } from "src/components/layout";

const About: React.FC = () => (
  <Layout>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>About</h1>
  </Layout>
);

export default About;
