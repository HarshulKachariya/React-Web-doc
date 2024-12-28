import { useState } from "react";
import CodeSnippets from "../CodeSnippets";
import CodePreview, { RefreshButton, Span } from "../PreviewBox";

const OnFocusEvent = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [preview, setPreview] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React onFocus Event</h1>
      <p className="text-xl mb-4 ">
        The React <Span>onFocus</Span> event handler is triggered when an
        element gains focus, such as when a user clicks into an input field. It
        can be used to highlight elements, show additional information, or
        handle other actions when an element becomes active.
      </p>
      <p className="text-lg font-bold mb-2">Using onFocus:</p>
      <CodeSnippets
        codeString={` <input type="text" onFocus={handleFocus} />`}
        showLineNumbers={false}
      />
      <div className="bg-gray-200 rounded-lg py-4 mb-4">
        <h2 className="text-lg font-bold mb-2">Example:</h2>
        <p className="mb-2 text-lg">
          Here’s an example of using the <Span>onFocus</Span> event to change
          the style of an input field when it gains focus.
        </p>
        <CodeSnippets
          codeString={`import { useState } from "react";

function FocusHighlightComponent() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <input
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Enter text"
        className={isFocused ? "border-blue-500" : "border-gray-300"}
      />
    </div>
  );
}

export default FocusHighlightComponent;
`}
        />

        <CodePreview className="mt-5 ">
          {!preview ? (
            <button
              className="bg-[#282c34] p-2 rounded-md hover:shadow-md text-white"
              onClick={() => setPreview(true)}
            >
              Preview of code
            </button>
          ) : (
            <RefreshButton
              className="min-h-48"
              onClick={() => setIsFocused(false)}
            >
              <input
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Enter text"
                className={`p-2 rounded-md hover:shadow-md outline-none border-4 w-40 ${
                  isFocused ? "border-blue-500" : "border-gray-300"
                }`}
              />
            </RefreshButton>
          )}
        </CodePreview>
      </div>
    </div>
  );
};

export default OnFocusEvent;
