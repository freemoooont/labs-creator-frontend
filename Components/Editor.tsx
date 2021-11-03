import React from "react";
import EditorJS from "@editorjs/editorjs";

interface EditorProps {
    onSave?: boolean
}

export const Editor: React.FC<EditorProps> = ({onSave}) => {
    React.useEffect(() => {
        const CodeBox = require("@bomdi/codebox");
        const InlineCode = require("@editorjs/inline-code");
        const mathTex = require('editorjs-math');
        const editor = new EditorJS({
          tools: {
                inlineCode: {
                    class: InlineCode,
                    shortcut: "CMD+SHIFT+M",
                },
                codeBox: {
                    class: CodeBox,
                    config: {
                        themeURL:
                            "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css", // Optional
                        themeName: "atom-one-dark", // Optional
                        useDefaultTheme: "light", // Optional. This also determines the background color of the language select drop-down
                    },
                },
                math: {
                    class: mathTex, // for CDN: window.MathTex
                },
            },
            holder: "editor",
            placeholder: "Введите текст",
        });


        return () => {
            editor.isReady
                .then(() => {
                    editor.destroy();
                })
                .catch((e) => console.error("ERROR editor cleanup", e));

        };
    }, [onSave]);

    return <div id="editor"/>;
};
