import { FontDownload } from "@styled-icons/material/FontDownload";
import { FormatColorText } from "@styled-icons/material/FormatColorText";
import { Image } from "@styled-icons/material/Image";
import { Link } from "@styled-icons/material/Link";
import {
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createDeserializeAstPlugin,
  createDeserializeCSVPlugin,
  createDeserializeHTMLPlugin,
  createDeserializeMDPlugin,
  createExitBreakPlugin,
  createFontBackgroundColorPlugin,
  createFontColorPlugin,
  createFontSizePlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHistoryPlugin,
  createImagePlugin,
  createItalicPlugin,
  createKbdPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createPlateComponents,
  createPlateOptions,
  createReactPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  ELEMENT_IMAGE,
  ELEMENT_PARAGRAPH,
  HeadingToolbar,
  MARK_BG_COLOR,
  MARK_COLOR,
  MARK_FONT_SIZE,
  Plate,
  StyledLeaf,
  ToolbarColorPicker,
  ToolbarImage,
  ToolbarLink,
  withStyledProps,
} from "@udecode/plate";
import type { NextPage } from "next";
import { useMemo } from "react";
import { Layout } from "src/components/layout";
import {
  ToolbarButtonsAlign,
  ToolbarButtonsBasicElements,
  ToolbarButtonsBasicMarks,
  ToolbarButtonsList,
  ToolbarButtonsTable,
} from "src/components/toolbars";
import {
  optionsAutoformat,
  optionsExitBreakPlugin,
  optionsResetBlockTypePlugin,
  optionsSoftBreakPlugin,
} from "src/options";

const editableProps = {
  placeholder: "Enter some rich text…",
  spellCheck: false,
  autoFocus: true,
};

const styledComponents = createPlateComponents({
  [MARK_COLOR]: withStyledProps(StyledLeaf, {
    leafProps: {
      [MARK_COLOR]: ["color"],
    },
  }),
  [MARK_BG_COLOR]: withStyledProps(StyledLeaf, {
    leafProps: {
      [MARK_BG_COLOR]: ["backgroundColor"],
    },
  }),
  [MARK_FONT_SIZE]: withStyledProps(StyledLeaf, {
    leafProps: {
      [MARK_FONT_SIZE]: ["fontSize"],
    },
  }),
});

const defaultOptions = createPlateOptions();

const PlatePage: NextPage = () => {
  const pluginsMemo = useMemo(() => {
    const plugins = [
      createReactPlugin(),
      createHistoryPlugin(),
      createParagraphPlugin(),
      createBlockquotePlugin(),
      createTodoListPlugin(),
      createHeadingPlugin(),
      createImagePlugin(),
      createLinkPlugin(),
      createListPlugin(),
      createTablePlugin(),
      createMediaEmbedPlugin(),
      createCodeBlockPlugin(),
      createAlignPlugin(),
      createBoldPlugin(),
      createCodePlugin(),
      createItalicPlugin(),
      createHighlightPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createFontColorPlugin(),
      createFontBackgroundColorPlugin(),
      createFontSizePlugin(),
      createKbdPlugin(),
      createNodeIdPlugin(),
      createAutoformatPlugin(optionsAutoformat),
      createResetNodePlugin(optionsResetBlockTypePlugin),
      createSoftBreakPlugin(optionsSoftBreakPlugin),
      createExitBreakPlugin(optionsExitBreakPlugin),
      createTrailingBlockPlugin({ type: ELEMENT_PARAGRAPH }),
      createSelectOnBackspacePlugin({ allow: ELEMENT_IMAGE }),
    ];

    plugins.push(
      ...[
        createDeserializeMDPlugin({ plugins }),
        createDeserializeCSVPlugin({ plugins }),
        createDeserializeHTMLPlugin({ plugins }),
        createDeserializeAstPlugin({ plugins }),
      ]
    );

    return plugins;
  }, []);

  return (
    <Layout>
      <Plate
        id="playground"
        plugins={pluginsMemo}
        components={styledComponents}
        options={defaultOptions}
        editableProps={editableProps}
      >
        <HeadingToolbar>
          <ToolbarButtonsBasicElements />
          <ToolbarButtonsList />
          <ToolbarButtonsBasicMarks />
          <ToolbarColorPicker pluginKey={MARK_COLOR} icon={<FormatColorText />} />
          <ToolbarColorPicker pluginKey={MARK_BG_COLOR} icon={<FontDownload />} />
          <ToolbarButtonsAlign />
          <ToolbarLink icon={<Link />} />
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <ToolbarImage icon={<Image />} />
          <ToolbarButtonsTable />
        </HeadingToolbar>
      </Plate>
    </Layout>
  );
};

export default PlatePage;
