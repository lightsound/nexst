import type { AutoformatRule, TElement, TodoListItemNodeData } from "@udecode/plate";
import { ELEMENT_LI, ELEMENT_OL, ELEMENT_TODO_LI, ELEMENT_UL, setNodes } from "@udecode/plate";
import { Editor } from "slate";

import { formatList, preFormat } from "./autoformatUtils";

export const autoformatLists: AutoformatRule[] = [
  {
    mode: "block",
    type: ELEMENT_LI,
    match: ["* ", "- "],
    preFormat,
    format: (editor) => {
      return formatList(editor, ELEMENT_UL);
    },
  },
  {
    mode: "block",
    type: ELEMENT_LI,
    match: ["1. ", "1) "],
    preFormat,
    format: (editor) => {
      return formatList(editor, ELEMENT_OL);
    },
  },
  {
    mode: "block",
    type: ELEMENT_TODO_LI,
    match: "[] ",
  },
  {
    mode: "block",
    type: ELEMENT_TODO_LI,
    match: "[x] ",
    format: (editor) => {
      return setNodes<TElement<TodoListItemNodeData>>(
        editor,
        { type: ELEMENT_TODO_LI, checked: true },
        {
          match: (n) => {
            return Editor.isBlock(editor, n);
          },
        }
      );
    },
  },
];
