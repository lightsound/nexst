import type {
  ExitBreakPluginOptions,
  MentionNodeData,
  ResetBlockTypePluginOptions,
  SoftBreakPluginOptions,
  WithAutoformatOptions,
} from "@udecode/plate";
import {
  createPlateOptions,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_PARAGRAPH,
  ELEMENT_TD,
  ELEMENT_TODO_LI,
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  KEYS_HEADING,
} from "@udecode/plate";

import { autoformatRules } from "./autoformat/autoformatRules";

export const options = createPlateOptions();

export const optionsMentionPlugin = {
  maxSuggestions: 10,
  insertSpaceAfterMention: false,
  trigger: "@",
  mentionableFilter: (s: string) => {
    return (mentionable: MentionNodeData) => {
      return (
        mentionable.email.toLowerCase().includes(s.toLowerCase()) ||
        mentionable.name.toLowerCase().includes(s.toLowerCase())
      );
    };
  },
  mentionableSearchPattern: "\\S*",
};

const resetBlockTypesCommonRule = {
  types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
  defaultType: ELEMENT_PARAGRAPH,
};

export const optionsResetBlockTypePlugin: ResetBlockTypePluginOptions = {
  rules: [
    {
      ...resetBlockTypesCommonRule,
      hotkey: "Enter",
      predicate: isBlockAboveEmpty,
    },
    {
      ...resetBlockTypesCommonRule,
      hotkey: "Backspace",
      predicate: isSelectionAtBlockStart,
    },
  ],
};

export const optionsSoftBreakPlugin: SoftBreakPluginOptions = {
  rules: [
    { hotkey: "shift+enter" },
    {
      hotkey: "enter",
      query: {
        allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
      },
    },
  ],
};

export const optionsExitBreakPlugin: ExitBreakPluginOptions = {
  rules: [
    {
      hotkey: "mod+enter",
    },
    {
      hotkey: "mod+shift+enter",
      before: true,
    },
    {
      hotkey: "enter",
      query: {
        start: true,
        end: true,
        allow: KEYS_HEADING,
      },
    },
  ],
};

export const optionsAutoformat: WithAutoformatOptions = {
  rules: autoformatRules,
};

export const editableProps = {
  // placeholder: 'Enter some rich text…',
  spellCheck: false,
  autoFocus: true,
};
