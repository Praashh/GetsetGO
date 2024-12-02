"use client"
import { Editor } from '@monaco-editor/react'
import React, { useRef } from 'react'

const IDE = () => {
    const editorRef = useRef(null);

    const handleEditorDidMount = (editor: any) => {
        editorRef.current = editor;
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (editorRef.current) {
            // @ts-ignore
            const code = editorRef.current.getValue();
            console.log(code);
        }
    };

    const handleResetCode = ()=>{
        confirm("do you want to reset your code?")
        if (editorRef.current) {
             // @ts-ignore
            editorRef.current.setValue("//start writing code from here.");
          }
    }

    return (
        <div className="flex justify-center items-start h-screen">
            <div className="w-full max-w-4xl p-4 border border-[#5d5d5f]">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="">
                        <Editor
                            height="80vh"
                            defaultLanguage="rust"
                            defaultValue='//start writing code from here..'
                            theme='vs-dark'
                            onMount={handleEditorDidMount}
                        />
                    </div>
                    <div className="flex justify-between pt-2">
                        <div className="flex items-center space-x-5"></div>
                        <div className="flex-shrink-0">
                        <button
                        onClick={handleResetCode}
                                className="inline-flex mr-5 items-center rounded-md bg-[#efeff3] duration-300 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-[#949494]"
                            >
                                Reset
                            </button>
                            <button
                                type="submit"
                                className="inline-flex items-center rounded-md bg-[#efeff3] duration-300 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-[#949494]"
                            >
                                Run
                            </button>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default IDE
