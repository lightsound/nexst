import type { AutoformatRule } from "@udecode/plate";
import { ELEMENT_DEFAULT } from "@udecode/plate";

import { DIGITS, DIGITS_WITH_SPACE } from "./autoformatConstants";
import { formatText } from "./autoformatUtils";

const multiplicationWithoutSpace: AutoformatRule[] = DIGITS.map((digit) => {
  return {
    type: ELEMENT_DEFAULT,
    mode: "block",
    match: [`${digit}*`, `${digit}x`],
    trigger: [...DIGITS, ...DIGITS_WITH_SPACE],
    insertTrigger: true,
    format: (editor) => {
      return formatText(editor, `${digit}×`);
    },
  };
});

const multiplicationWithSpace: AutoformatRule[] = DIGITS.map((digit) => {
  return {
    type: ELEMENT_DEFAULT,
    mode: "block",
    match: [`${digit} *`, `${digit} x`],
    trigger: [...DIGITS, ...DIGITS_WITH_SPACE],
    insertTrigger: true,
    format: (editor) => {
      return formatText(editor, `${digit} ×`);
    },
  };
});

export const autoformatMultiplication: AutoformatRule[] = [...multiplicationWithoutSpace, ...multiplicationWithSpace];
