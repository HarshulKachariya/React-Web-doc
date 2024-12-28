import { useRef, useState } from "react";
import CodeSnippets from "../CodeSnippets";
import CodePreview, { RefreshButton, Span } from "../PreviewBox";

const UseRef = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const inputElement = useRef<any>();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React useRef Hook</h1>

      <p className="text-xl mb-4 ">
        The React <Span>useRef</Span> Hook allows you to persist values across
        renders without causing a re-render. It can be used to directly access a
        DOM element or to keep a mutable value around that doesn’t trigger a
        re-render when updated.
      </p>

      <p className="text-lg font-bold mb-2">Import useRef:</p>

      <CodeSnippets
        codeString={` import { useRef } from "react"`}
        showLineNumbers={false}
      />

      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>

        <p className="mb-2 text-lg">
          To use the <Span>useRef</Span> Hook, initialize a ref with{" "}
          <Span>useRef()</Span> and attach it to a DOM element or use it to
          store a mutable value.
        </p>

        <CodeSnippets
          codeString={`import { useRef, useEffect } from "react";

function ExampleComponent() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default ExampleComponent;
`}
        />

        <CodePreview className="mt-5">
          {!preview ? (
            <div>
              <div className="space-x-3 ">
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={() => setPreview(true)}
                >
                  Preview of code
                </button>
              </div>
            </div>
          ) : (
            <RefreshButton
              className="relative top-1 min-h-48"
              onClick={() => {}}
            >
              <div className="flex gap-3">
                <input
                  type="text"
                  ref={inputElement}
                  className="p-2 rounded-md hover:shadow-md  w-36 "
                />
                <button
                  className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
                  onClick={focusInput}
                >
                  Focus Input
                </button>
              </div>
            </RefreshButton>
          )}
        </CodePreview>
      </div>
    </div>
  );
};

export default UseRef;
