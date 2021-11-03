import React, {ReactElement, ReactNode} from "react";
import {Button, Input} from "@material-ui/core";
import styles from "./CreateLab.module.scss";
import dynamic from "next/dynamic";


// const Editor = dynamic(() => import("../Editor").then((m) => m.Editor), {
//     ssr: false,
// });
const ReactQuill = dynamic(() => import("react-quill"), {ssr: false});
import {Quill} from "react-quill";
const katex = require('katex');
const $ = require("jquery");
if (window !== undefined) window.jQuery = window.$ = $;

import "mathquill/build/mathquill.js";
import "mathquill/build/mathquill.css";

const mathquill4quill = require ("mathquill4quill");
import "mathquill4quill/mathquill4quill.css";

import 'react-quill/dist/quill.snow.css';
import 'katex/dist/katex.min.css';

// interface WriteFormProps {
//     title?: string;
// }

const CUSTOM_OPERATORS = [
    ["\\pm", "\\pm"],
    ["\\sqrt{x}", "\\sqrt"],
    ["\\sqrt[3]{x}", "\\sqrt[3]{}"],
    ["\\sqrt[n]{x}", "\\nthroot"],
    ["\\frac{x}{y}", "\\frac"],
    ["\\sum^{s}_{x}{d}", "\\sum"],
    ["\\prod^{s}_{x}{d}", "\\prod"],
    ["\\coprod^{s}_{x}{d}", "\\coprod"],
    ["\\int^{s}_{x}{d}", "\\int"],
    ["\\binom{n}{k}", "\\binom"]
];

export const WriteForm= ({title}) => {
    const [operators, setOperators] = React.useState([]);
    const [displayHistory, setDisplayHistory] = React.useState(false);


    const options = { displayHistory, CUSTOM_OPERATORS };

    const [value, setValue] = React.useState();
    const reactQuill = React.createRef();
    React.useLayoutEffect(()=>{
        const enableMathQuillFormulaAuthoring = mathquill4quill({ Quill, katex });
        enableMathQuillFormulaAuthoring(
            reactQuill?.current?.editor,
            options
        );
    })
    const modules = {
        toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],

            [{list: "ordered"}, {list: "bullet"}],
            [{script: "sub"}, {script: "super"}], // superscript/subscript
            [{header: [1, 2, 3, false]}],

            ["link", "image", "formula"],

            [{color: []}, {background: []}], // dropdown with defaults from theme
            [{align: []}],

            ["clean"] // remove formatting button
        ],
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false
        }
    }
    return (
        <div>
            <Input
                classes={{root: styles.titleField}}
                placeholder="Заголовок"
                defaultValue={title}
            />
            <div className={styles.editor}>
                {/*<Editor onSave = {onSave} />*/}
                <ReactQuill id="editor" ref={reactQuill} value={value} onChange={setValue} modules={modules}/>
            </div>
            <Button variant="contained" color="primary">
                Опубликовать
            </Button>
        </div>
    );
};
