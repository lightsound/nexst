import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { EditorState } from "draft-js";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Layout } from "src/components/layout";

const LoadingComponent = () => {
  return <p>Loading ...</p>;
};

const Editor = dynamic(
  async () => {
    const { Editor } = await import("react-draft-wysiwyg");
    return Editor;
  },
  { ssr: false, loading: LoadingComponent }
);

const RDW: NextPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  return (
    <Layout>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={handleEditorStateChange}
      />
    </Layout>
  );
};

export default RDW;
