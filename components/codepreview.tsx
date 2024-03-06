import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a syntax highlighting style

const CodePreviewPane = ({ code, language }: { code: string, language: string }) => {
  return (
    <div className="code-preview-pane">
      <SyntaxHighlighter language={language} style={darcula}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};


export default CodePreviewPane;
