"use client";
import React, { useState, useEffect } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { IoCopyOutline, IoCopy } from "react-icons/io5";

const escapeHtml = (str: string) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const highlightJson = (json: string) => {
  if (typeof json !== "string") {
    json = JSON.stringify(json, null, 2);
  }

  // Escape HTML to prevent any rendering issues
  json = escapeHtml(json);

  return json
    .replace(/\"(.*?)\":/g, '<span class="json-key">"$1"</span>:')
    .replace(
      /: (\".*?\"|true|false|null|\d+)/g,
      ': <span class="json-value">$1</span>'
    );
};

const copyToClipboard = (code: string) => {
  navigator.clipboard.writeText(code);
};

function ReadmeViewer({ readme }: { readme: string }) {
  const [markdownContent, setMarkdownContent] = useState(readme);
  const [isCopied, setIsCopied] = useState(false);

  const renderers: Components = {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold my-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium my-2">{children}</h3>
    ),
    p: ({ children }) => <p className="my-2 text-gray-700">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-5 my-2">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal pl-5 my-2">{children}</ol>
    ),
    li: ({ children }) => <li className="my-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-2">
        {children}
      </blockquote>
    ),
    code({ node, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const language = match ? match[1] : "";
      const code = String(children);

      if (language === "json") {
        const highlightedJson = highlightJson(String(children));
        return (
          <div className="relative p-1">
            <button
              onClick={() => {
                copyToClipboard(code);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
              }}
              className="absolute right-1 top-1 bg-gray-700 text-white text-xs py-1 px-2 rounded hover:bg-gray-600"
            >
              {isCopied ? <IoCopyOutline /> : <IoCopyOutline />}
            </button>
            <pre
              {...(props as React.HTMLProps<HTMLPreElement>)}
              className={`json inline-block p-2 m-1 overflow-x-auto `}
            >
              <code
                className={className}
                dangerouslySetInnerHTML={{ __html: highlightedJson }}
              />
            </pre>
          </div>
        );
      }

      return (
        <div className="relative p-0">
          {code.includes("\n") ? (
            <button
              onClick={() => {
                copyToClipboard(code);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
              }}
              className="absolute right-1 top-1 bg-gray-700 text-white text-xs py-1 px-2 rounded hover:bg-gray-600"
            >
              {isCopied ? <IoCopyOutline /> : <IoCopyOutline />}
            </button>
          ) : null}
          <pre
            {...(props as React.HTMLProps<HTMLPreElement>)}
            className={` inline-block overflow-x-auto p-1 m-0  ${className}`}
          >
            <code className="p-0 inline">{children}</code>
          </pre>
        </div>
      );
    },
  };

  useEffect(() => {
    fetch(readme)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div>
      <div className="prose dark:prose-dark max-w-none  text-gray-400 p-4 rounded shadow-md">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={renderers}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default ReadmeViewer;
