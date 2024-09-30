import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { CopyButton } from "./CopyButton";

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

function ReadmeViewer({ readme }: { readme: string }) {
  const removeFrontMatter = (readme: string) => {
    const parts = readme.split("---");
    if (parts.length > 2) {
      return `${parts.slice(2).join("---")}`;
    }
    return readme;
  };

  const renderers: Components = {
    h1: ({ children }) => (
      <h1 className="text-3xl text-white font-bold my-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl text-white text-opacity-80 font-semibold my-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl text-white text-opacity-80 font-medium my-2">
        {children}
      </h3>
    ),
    a: ({ children }) => (
      <a className="text-blue-400 hover:text-blue-500 hover:underline">
        {children}
      </a>
    ),
    p: ({ children }) => <p className="my-2 text-gray-400">{children}</p>,
    ul: ({ children }) => <ul className=" list-none pl-5 my-2">{children}</ul>,
    ol: ({ children }) => (
      <ol className="list-decimal pl-5 my-2">{children}</ol>
    ),
    li: ({ children }) => <li className="my-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-2">
        {children}
      </blockquote>
    ),
    code({ className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const language = match ? match[1] : "";
      const code = String(children);

      if (language === "json") {
        const highlightedJson = highlightJson(String(children));
        return (
          <div className="relative p-1 overflow-x-scroll">
            <CopyButton code={code} />
            <pre
              {...(props as React.HTMLProps<HTMLPreElement>)}
              className={`json inline-block w-[90%] p-2 m-1`}
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
        <div
          className={`relative p-0 ${
            code.includes("\n") && "overflow-x-scroll bg-gray-700 text-gray-300"
          } `}
        >
          {code.includes("\n") ? <CopyButton code={code} /> : null}
          <pre
            {...(props as React.HTMLProps<HTMLPreElement>)}
            className={` inline-block p-1 m-0  ${className}`}
          >
            <code className="p-0 inline">{children}</code>
          </pre>
        </div>
      );
    },
  };

  return (
    <div className="w-[90%] mx-auto">
      <div className="prose dark:prose-dark text-gray-400 p-4 rounded shadow-md">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={renderers}>
          {removeFrontMatter(readme)}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default ReadmeViewer;
