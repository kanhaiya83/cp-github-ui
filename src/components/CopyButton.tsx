"use client";
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

interface CopyButtonProps {
  code: string;
}
export const CopyButton: React.FC<CopyButtonProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
  };
  return (
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
  );
};
