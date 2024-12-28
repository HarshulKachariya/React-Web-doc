import { useCallback, useState } from "react";
import { IoIosCopy } from "react-icons/io";
import { IoCheckmarkDone } from "react-icons/io5";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippets = ({
  codeString,
  showLineNumbers = true,
  className,
  language = "jsx",
}: any) => {
  const [copied, setCopied] = useState(false);

  const copyCodeToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(codeString).then(
      () => {
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 1000);
      },
      (err) => {
        setCopied(false);
        console.error("Failed to copy code: ", err);
      }
    );
  }, [codeString]);

  return (
    <div className="relative">
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        className={`rounded-lg bg-gray-800 ${className}`}
        showLineNumbers={showLineNumbers}
      >
        {codeString}
      </SyntaxHighlighter>
      <div className="absolute top-1 right-2">
        <button
          className=" p-2 rounded-md hover:shadow-md text-xl text-white/30 hover:text-white hover:transition-all hover:duration-300"
          onClick={copyCodeToClipboard}
        >
          {copied ? <IoCheckmarkDone /> : <IoIosCopy />}
        </button>
      </div>
    </div>
  );
};

export default CodeSnippets;
