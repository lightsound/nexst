import type { AutoformatBlockRule, SPEditor, TEditor } from "@udecode/plate";
import {
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
  getParent,
  isElement,
  isType,
  toggleList,
  unwrapList,
} from "@udecode/plate";

export const preFormat: AutoformatBlockRule["preFormat"] = (editor) => {
  return unwrapList(editor as SPEditor);
};

export const format = (editor: TEditor, customFormatting: any) => {
  if (editor.selection) {
    const parentEntry = getParent(editor, editor.selection);
    if (!parentEntry) return;
    const [node] = parentEntry;
    if (
      isElement(node) &&
      !isType(editor as SPEditor, node, ELEMENT_CODE_BLOCK) &&
      !isType(editor as SPEditor, node, ELEMENT_CODE_LINE)
    ) {
      customFormatting();
    }
  }
};

export const formatList = (editor: TEditor, elementType: string) => {
  format(editor, () => {
    return toggleList(editor as SPEditor, {
      type: elementType,
    });
  });
};

export const formatText = (editor: TEditor, text: string) => {
  format(editor, () => {
    return editor.insertText(text);
  });
};
