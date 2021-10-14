import "@toast-ui/editor/dist/toastui-editor.css";

import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Layout } from "src/components/layout";

const LoadingComponent = () => {
  return <p>Loading ...</p>;
};

const Editor = dynamic(
  async () => {
    const { Editor } = await import("@toast-ui/react-editor");
    return Editor;
  },
  { ssr: false, loading: LoadingComponent }
);

const PlatePage: NextPage = () => {
  return (
    <Layout>
      <Editor initialValue="hello react editor world!" hideModeSwitch height="600px" initialEditType="wysiwyg" />
    </Layout>
  );
};

export default PlatePage;
