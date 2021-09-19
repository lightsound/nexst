import "react-quill/dist/quill.snow.css";

import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Layout } from "src/components/layout";

const LoadingComponent = () => {
  return <p>Loading ...</p>;
};

const QuillNoSSRWrapper = dynamic(import("react-quill"), { ssr: false, loading: LoadingComponent });

const RQ: NextPage = () => {
  return (
    <Layout>
      <QuillNoSSRWrapper theme="snow" />
    </Layout>
  );
};

export default RQ;
